---
description: >-
  The current state of GitHub Actions is promising but still has some rough edges,
  when it comes to configuring complete GitOps CI/CD workflows.
  But I've managed to find some tricks to get the job done.
authors: [Romain Clement]
date: 2020-04-18
tags: [devops, gitops, ci-cd, github, actions, yaml]
language: en
draft: false
---

# GitOps CI/CD workflows with GitHub Actions

The current state of [GitHub Actions][github-actions] is promising but still
has some rough edges when it comes to configuring complete [GitOps][gitops]
CI/CD workflows. Compared to other systems such as [GitLab-CI][gitlab-ci],
it can be a pain to achieve the pipelines you're after without violating
[DRY][dry] principles.

However, after skimming the web for answers and a lot of trials and errors,
I've managed to find some tricks to get the job done. Let's get into it!

## Dependent and conditional jobs

Suppose you need a complete [GitOps][gitops] CI/CD pipeline for your next
[JAMStack][jamstack] application, with continuous integration on every push,
preview deployment on the `develop` branch and production deployment only on
the `master` branch.

The workflow usually goes as follows:

1. Testing stage (tests, lint check, vulnerabilities check)
2. Building stage

- Depends on the testing stage
- Build for preview if on `develop` branch
- Build for production if on `master` branch

3. Deploying stage

- Deploy for preview if on `develop` branch, depends on preview build
- Deploy for production if on `master` branch, depends on production build

![CI/CD Pipeline Image][img-pipeline]

The tricky part with GitHub Action workflows is to define conditions to trigger
certain jobs on certain conditions. For this, you need to rely on the
[needs statement][needs-statement], the [if statement][if-statement] and
[context and expression syntax][context-expression-syntax]:

```yaml
build-preview:
  name: Build preview
  needs: test
  if: contains(github.ref, 'develop')
```

A complete template for this kind of workflow would be:

```yaml
name: CI/CD

on: [push]

jobs:
  test:
    name: Test
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      ...

  build-preview:
    name: Build Preview
    runs-on: ubuntu-latest
    needs: test
    if: contains(github.ref, 'develop')

    steps:
      - uses: actions/checkout@v2
      ...
      - name: Upload build artifacts
        uses: actions/upload-artifact@v1
        with:
          name: build-preview
          path: dist

  build-production:
    name: Build Production
    runs-on: ubuntu-latest
    needs: test
    if: contains(github.ref, 'master')

    steps:
      - uses: actions/checkout@v2
      ...
      - name: Upload build artifacts
        uses: actions/upload-artifact@v1
        with:
          name: build-production
          path: dist

  deploy-preview:
    name: Deploy Preview
    runs-on: ubuntu-latest
    needs: build-preview
    if: contains(github.ref, 'develop')

    steps:
      - uses: actions/checkout@v2
      - name: Download build artifacts
        uses: actions/download-artifact@v1
        with:
          name: build-preview
          path: dist
      ...

  deploy-production:
    name: Deploy Production
    runs-on: ubuntu-latest
    needs: build-production
    if: contains(github.ref, 'master')

    steps:
      - uses: actions/checkout@v2
      - name: Download build artifacts
        uses: actions/download-artifact@v1
        with:
          name: build-production
          path: dist
      ...
```

And before you ask, no, you cannot store the results of `contains(...)` in
environment variables to be able to re-use them if job's `if` conditions.
According to the [documentation][env-context], "you can only use the env context
in the value of the with and name keys, or in a step's if conditional".

## Git reference retrieval

Sometimes, you need to dynamically retrieve some information from the current
Git reference. A common use-case is to tag a Docker image using the Git reference
information (branch name, commit SHA1, tag name, etc.).

One way of doing it is to use [shell parameter expansion][shell-parameter-expansion]:

```yaml
jobs:
  docker-build:
    name: Docker build
    runs-on: ubuntu-latest

    env:
      IMAGE_NAME: mynamespace/myimage
      IMAGE_TAG: ${GITHUB_REF##*/}

    steps:
      - uses: actions/checkout@v2
      - name: Build Docker image (${{ env.IMAGE_TAG }})
        run: docker build -t $IMAGE_NAME:$IMAGE_TAG .
      ...
```

If the tag value might contain a `/` character, it might be better to use
the replace syntax:

```yaml
env:
  IMAGE_TAG: ${GITHUB_REF/refs\/tags\//}
```

## Dynamic environment variables

The current implementation of GitHub Action workflows does not support
[YAML anchors][yaml-anchors], strongly limiting [DRY][dry] (_Don't Repeat Yourself_)
principles.
This is a shame as this is usually the secret weapon of complex and reusable
CI/CD pipeline configurations!

Nevertheless, GitHub Action workflow have the hability to dynamically set
environment variables which can allow some code factoring.
To set the value of an environment variable dynamically, the
[set-env statement][set-env-statement] can be used:

```yaml
steps:
  - name: Set an env var only for tags
    if: contains(github.ref, 'tags')
    run: echo "::set-env name=VAR_NAME::value"
```

and the new value for `VAR_NAME` will be available for any subsequent actions
in a job, but not the current action which sets it.

Going back to building a Docker image, a common need is to tag the image with
`latest` most of the time, and tag it with the version number (from the Git tag)
for a release build. It could go as follows:

```yaml
build-docker:
  name: Docker build
  runs-on: ubuntu-latest
  needs: test
  if: contains(github.ref, 'master') || contains(github.ref, 'tags')

  env:
    IMAGE_NAME: mynamespace/myimage
    IMAGE_TAG: latest

  steps:
    - uses: actions/checkout@v2
    - name: Select Docker image tag (production only)
      if: contains(github.ref, 'tags')
      run: echo "::set-env name=IMAGE_TAG::${GITHUB_REF##*/}"
    - name: Build Docker image (${{ env.IMAGE_TAG }})
      run: |
        docker pull $IMAGE_NAME:latest
        docker build -t $IMAGE_NAME:$IMAGE_TAG .
```

Not completely [DRY][dry] but at least we did not have to write two separate
jobs for different build configurations depending on the Git reference,
so that's a already a win!

## Conclusion

The [GitHub Actions][github-actions] platform allows more than just CI/CD, being built on a
marketplace community, being integrated with non-Git events (issues, etc.)
and supporting not just Linux-based builds with Windows and MacOS virtual machines.

However, compared to other CI/CD platforms such as [GitLab-CI][gitlab-ci],
defining complete GitOps CI/CD pipelines is not that easy and error-prone.
While searching for the current best-practices, it seems I am clearly not alone
facing those issues and hopefully the GitHub team will fix all those quirks in
the next updates.

[img-pipeline]: ../static/articles/github-actions-cicd-workflows/pipeline.png 'GitOps CI/CD Pipeline'
[github-actions]: https://github.com/features/actions 'GitHub Actions'
[gitlab-ci]: https://docs.gitlab.com/ce/ci/ 'GitLab-CI'
[gitops]: https://www.gitops.tech 'GitOps'
[jamstack]: https://jamstack.org 'JAMStack'
[needs-statement]: https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds 'GitHub Actions - Workflow Syntax'
[if-statement]: https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif 'GitHub Actions - Workflow Syntax'
[set-env-statement]: https://help.github.com/en/actions/reference/workflow-commands-for-github-actions#setting-an-environment-variable 'GitHub Actions - Workflow Commands'
[context-expression-syntax]: https://help.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions 'GitHub Actions - Context and Expression Syntax'
[env-context]: https://help.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#env-context 'GitHub Actions - Context and Expression Syntax'
[shell-parameter-expansion]: https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html 'GNU Bash Shell Parameter Expansion'
[yaml-anchors]: https://docs.gitlab.com/ce/ci/yaml/#anchors 'GitLab-CI YAML Anchors'
[dry]: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself "Wikipedia - Don't Repeat Yourself"
