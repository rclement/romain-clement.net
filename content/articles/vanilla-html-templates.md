---
template: article.html
title: Vanilla HTML templates
description: >-
  Native HTML templates allow to easily perform dynamic rendering without a
  Javascript framework.
author: romainclement
date: 2022-11-24
tags: [html, javascript]
language: en
draft: false
---

Today I learn there is some basic support for
[HTML templates](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
using vanilla Javascript!

Suppose you want to dynamically list issues from one of your GitHub repositories
within an HTML page. You are fetching data from the
[GitHub REST API](https://docs.github.com/en/rest/issues/issues#list-repository-issues).
You are not using any Javascript framework/library such as React, Vue, Angular, JQuery.

You can simply define your HTML structure such as:

```html
<div id="gh-issue-list"></div>

<template id="gh-issue-template">
  <article class="gh-issue-item">
    <h4><a class="gh-issue-url" href="">Title</a></h4>
    <small>Submitted by <a class="gh-issue-author" href="">username</span></small>
  </article>
</template>
```

The `<template>` tag will not be rendered by the browser. Then you can trigger a
small script to insert all the issues by cloning the template and filling the data:

```html
<script>
  function addIssueItem(issue) {
    const issueList = document.querySelector('#gh-issue-list')
    const issueTemplate = document.querySelector('#gh-issue-template')
    const issueItem = submissionTemplate.content.cloneNode(true)

    const link = submissionItem.querySelector('.gh-issue-url')
    link.setAttribute('href', issue.html_url)
    link.text = issue.title

    const author = submissionItem.querySelector('.gh-issue-author')
    author.setAttribute('href', issue.user.html_url)
    author.text = issue.user.login

    submissionList.appendChild(submissionItem)
  }

  async function getLatestIssues(repository) {
    const response = await fetch(`https://api.github.com/repos/${repository}/issues`)
    const issues = await response.json()
    issues.forEach(addIssueItem)
  }

  getLatestIssues('owner/repo')
</script>
```

And voilà! No more battling with successive `document.createElement` and
`document.appendChild` calls everywhere, you just fill the template with the
data! This technique is especially useful when writing Markdown documents with
a static-site generator, where only a sprinkle of Javascript is needed.

Of course for more complex use-cases, using a proper Javascript library might
be the right choice. But I prefer the minimal approach whenever I can!
