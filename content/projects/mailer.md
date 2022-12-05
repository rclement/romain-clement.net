---
hide:
  - footer
---

# Mailer

[![Stars](https://img.shields.io/github/stars/rclement/mailer)](https://github.com/rclement/mailer "Stars")
[![Version](https://img.shields.io/github/tag/rclement/mailer.svg)](https://github.com/rclement/mailer/releases/latest "Version")
[![License](https://img.shields.io/github/license/rclement/mailer)](https://github.com/rclement/mailer/blob/master/LICENSE "License")

Dead-simple mailer micro-service for static websites.

[:fontawesome-brands-github: Project on GitHub][repository]

[:fontawesome-solid-book: Documentation][documentation]

!!! tip

    The [contact form](../contact.md) of this website uses Mailer to send e-mails
    behind the scenes!

## Pitch

A free and open-source software alternative to contact form services such as FormSpree,
to integrate a contact form seamlessly within your next static website!

When building static websites and JAMStack web applications, the need for a contact
form arises pretty often but requires some server-side processing. Mailer provides
a dead-simple micro-service (usable as a serverless function) for this purpose,
enabling one to receive e-mails from a simple form using a single AJAX request.

## Technology

- [x] Python
- [x] FastAPI
- [x] SMTP
- [x] PGP
- [x] Docker

[repository]: https://github.com/rclement/mailer "GitHub Repository"
[documentation]: https://rclement.github.io/mailer/ "Documentation"
