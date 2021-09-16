---
template: article.html
title: Cloudflare setup for CDN and PaaS platforms
description: >-
  When hosting applications using modern CDNs and PaaS platforms such as Vercel
  and Heroku, configuring Cloudflare as the protecting proxy in front of those
  services can be challenging. After some research, I managed to find a permanent
  solution.
author: Romain Clement
date: 2020-06-08
tags: [cloud, web, cdn, paas, cloudflare, vercel]
language: en
draft: false
---

When hosting applications using modern CDN and PaaS platforms such as [Vercel][vercel]
and [Heroku][heroku], configuring [Cloudflare][cloudflare] as the protecting proxy
in front of those services can be challenging. After some research, I managed to
find a permanent solution.

## Context

After setting up a domain with Cloudflare, each DNS entry can be configured as being:

- **Proxied**: Cloudflare acts as a safety net in front of your application,
  providing features such as HTTPS certificates, caching and DDoS mitigation
- **DNS only**: Cloudflare is just redirecting the traffic without being in the way,
  the same way your domain provider usually does it.

To enjoy all the benefits from Cloudflare is to use the proxy mode whenever possible,
especially for web applications. By default, when using proxied DNS entries,
all the traffic will be **enforced to use HTTPS** as a security measure.

Most modern web application deployment platforms such as CDN and PaaS usually
require to generate their own HTTPS certificate using the now ubiquitous
[Let's Encrypt][lets-encrypt] and force all traffic to HTTPS. This is great as
this is the first line of defense for most web applications and avoid beginners
to make some mistakes. The only requirement for this to work is that the domain
(or subdomain) pointing to the application platform allows the following endpoint
to **be reached without HTTPS**: `http://my.domain.com/.well-known/acme-challenge/...`.

And this is where the issue arises: as a Cloudflare user I want to use the proxy
feature for all my domains and subdomains with maximum safety features such as
HTTPS everywhere, but the application platform behind Cloudflare requires to
generate HTTPS certificate using... a plain HTTP endpoint!

Fortunately, Cloudflare is a mature service and provides some extensive configuration,
enabling us to find a proper setup!

## Cloudflare setup

The proposed setup is based on the followings links:

- Vercel [documentation][vercel-docs-cloudflare]
- Dom Talbot's [Cloudflare + Zeit][dom-talbot-cloudflare-zeit] article
- James Homer [comment][github-vercel-issue] on GitHub Vercel Documentation repository

The general idea is:

1. Disable global HTTPS enforcement from Cloudflare
2. Add an exception rule to allow unsecure HTTP traffic only for Let's Encrypt
   certificates generation
3. Add a fallback rule to enforce secure HTTPS traffic

### Configuration steps

1. Enable "Full" or "Full (strict)" SSL/TLS encryption mode:
```
SSL/TLS -> Overview -> Full / Full (strict)
```
![Cloudflare SSL/TLS][img-cloudflare-ssl]

2. Disable "Always Use HTTPS" feature:
```
SSL/TLS -> Edge Certificates -> Always Use HTTPS -> Off
```
![Cloudflare Edge Certificates][img-cloudflare-edge]

3. Add a first "Page Rule" to allow Let's Encrypt certificate generation:
```
Page Rules -> Create Page Rule
  - URL: *domain.com/.well-known/acme-challenge/*
  - Setting: SSL OFF
```

4. Add a second "Page Rule" to enforce all traffic to HTTPS
```
Page Rules -> Create Page Rule
  - URL: http://*domain.com/*
  - Setting: Always Use HTTPS
```

5. Order the "Page Rules" such that the "Always Use HTTPS" is the last one
   (this is very important!)
![Cloudflare Page Rules][img-cloudflare-pagerules]

You should now be able to setup DNS entries as proxied one, even with application
platforms behind!

![Cloudflare DNS Entries][img-cloudflare-dns]

## Summary

I had been struggling with this issue for a long time, but this simple Cloudflare
setup now allows me to add DNS entries at will, pointing to various deployment
platforms. It also works great when using static hosting plaforms such as
[GitHub Pages][github-pages] and [GitLab Pages][gitlab-pages]. I can now enjoy the
best of both worlds: full-fledge network security with modern application deployment!

[vercel]: https://vercel.com 'Vercel'
[heroku]: https://heroku.com 'Heroku'
[cloudflare]: https://cloudflare.com 'Cloudflare'
[github-pages]: https://pages.github.com 'GitHub Pages'
[gitlab-pages]: https://docs.gitlab.com/ce/user/project/pages/ 'GitLab Pages'
[lets-encrypt]: https://letsencrypt.org "Let's Encrypt"
[vercel-docs-cloudflare]: https://vercel.com/docs/v2/custom-domains#cloudflare 'Vercel Documentation'
[dom-talbot-cloudflare-zeit]: https://levelup.gitconnected.com/how-to-set-up-cloudflare-with-zeit-93daa7d45dd 'Dom Talbot: Cloudflare + Zeit'
[github-vercel-issue]: https://github.com/vercel/docs/issues/489#issuecomment-587132197 'GitHub Vercel'
[img-cloudflare-ssl]: ../static/articles/cloudflare-setup-cdn-paas/cloudflare-ssl.png 'Cloudflare SSL/TLS'
[img-cloudflare-edge]: ../static/articles/cloudflare-setup-cdn-paas/cloudflare-edge.png 'Cloudflare Edge Certificates'
[img-cloudflare-pagerules]: ../static/articles/cloudflare-setup-cdn-paas/cloudflare-pagerules.png 'Cloudflare Page Rules'
[img-cloudflare-dns]: ../static/articles/cloudflare-setup-cdn-paas/cloudflare-dns.png 'Cloudflare DNS Entries'
