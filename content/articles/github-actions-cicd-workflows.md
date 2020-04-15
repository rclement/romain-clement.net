---
title: CI/CD workflows with GitHub Actions
summary: The current state of [GitHub Actions] is promising but still has some rough edges,when it comes to configuring complete CI/CD workflows. But I've managed to find some tricks to get the job done.
author: romainclement
tags: [ci-cd, github, actions, yaml]
language: en
published: 2020-04-12
draft: false
---

The current state of [GitHub Actions] is promising but still has some rough edges
when it comes to configuring complete CI/CD workflows.
Compared to other systems such as [GitLab-CI], it can be a pain to achieve the
pipelines you're after without violating DRY principles.

However, after skimming the web for answers and a lot of trials and errors,
I've managed to find some tricks to get the job done. Let's get into it!

## Some code snippet

```yaml
name: CI/CD

on: [push]

env:
  NODE_VERSION: '12.16.1'

jobs:
  test:
    name: Test
    runs-on: ubuntu-latest
```

[GitHub Actions]: https://github.com/features/actions
[GitLab-CI]: https://docs.gitlab.com/ce/ci/
