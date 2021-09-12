---
description: >-
  When activating Sentry crash reporting in JavaScript client-side code,
  the default mechanism captures and sends the current URL, including any URL
  fragments. This can pose a privacy issue when dealing with client-side end-to-end
  encrypted applications.
authors: [Romain Clement]
date: 2020-05-01
tags: [e2ee, typescript, web, privacy, sentry]
language: en
draft: false
---

# Scrubbing URL fragments from Sentry crash reports

:fontawesome-solid-calendar: {{{ page.meta.date|localized_date }}}
:fontawesome-solid-clock: {{{ page.markdown|readtime }}} minutes read
{ .article-meta }

---

When activating [Sentry][sentry] crash reporting in JavaScript client-side code,
the default mechanism captures and sends the current URL, including any URL
fragments. This can pose a privacy issue when dealing with client-side end-to-end
encrypted applications.

I faced this issue as I started developing [Griffonnage][griffonnage], a real-time
end-to-end encrypted collaborative drawing application.

## URL fragments

First things first. What is an _URL fragment_? It is the optional ending part
of an URL materialized after the `#` character. The part right after the `#` is
named the [fragment identifier][wikipedia-fragment] and it can be used for
all sorts of things.

One of the oldest usage is the concept of [HTML anchors][html-anchor] in order
to link to an element on the same web page, e.g.
`https://en.wikipedia.org/wiki/HTML_element#Anchor` (HTML anchor inception).

Another use-case is for developers using [Single-Page Applications][wikipedia-spa]
where the fragment is used for in-browser application routing without page reload.
However, this is less common nowadays with the introduction of the
[HTML5 History Mode][html-history], allowing to ditch the URL fragment and to use
the browser history programmatically instead.

The nice thing with URL fragments is that [**their value is never sent during a
request to a server and only processed by the browser**][html-fragment].
This property opens up new possibilities for privacy-first applications.

## End-to-end encryption

Some services such as [Firefox Send][firefox-send] and [Excalidraw][excalidraw]
(check out those services, there are great!) are using URL fragments extensively
in order to deliver end-to-end encryption in a transparent and user-friendly manner.
The team behind Excalidraw has even written a [blog post][excalidraw-blog] about it.

The general concensus is to store a symmetric encryption key within the URL
fragment so that the full URL can be shared among users and end-to-end encryption
happens behind the scenes. Of course, this puts the responsability of key management
in the hand of the end-user, which is a debate for another time.

It usually looks something like this:

`https://mysecureapp.com/somepage#base64-encryption-key`

As the encryption key contained in the fragment identifier is only available on
client-side, the application can load it at startup and use it directly in the
client-side JavaScript code.

## Sentry

I have been using the [Sentry][sentry] service for both hobby and professionnal
software for the last two years. Crash reports are working great accross all
programming languages and frameworks (JavaScript, TypeScript, Python, Rust, Vue.js,
React.js, you name it!). Being able to track bugs only when they happen instead of
relying on server logs parsing (when you have access to them) is so much more
efficient and it helps delivering quality product in no time. Cherry on top: it is
[open-source][sentry-oss] and can be easily self-hosted (if that's a requirement)!

The Sentry team has been dedicated to respect user's privacy since the beginning
by handling _Personnally Identifiable Information_ [with care][sentry-sensitive].

However, this promise falls short when dealing with URL fragments!
Indeed, when Sentry emits a crash report using the [JavaScript SDK][sentry-js],
the full URL is captured and sent to their servers 😱:

```json
{
  ...
  "exception": {
    "values": [
      {
        "type": "TypeError",
        "value": "something bad happened",
      }
    ]
  },
  "level": "error",
  "event_id": "3966a45604f142c49dea2fc1a6a3c42d",
  "platform": "javascript",
  "environment": "production",
  "release": "1.0.0",
  "request": {
    "url": "https://mysecureapp.com/somepage#iBhgO+Z2dhQGDYRiA8==",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:75.0) Gecko/20100101 Firefox/75.0"
    }
  }
}
```

In the event snippet above, we can clearly see that Sentry will record the full
URL including the fragment identifier:

`https://mysecureapp.com/somepage#iBhgO+Z2dhQGDYRiA8==`

For most applications, this is not an issue as the information contained within
the fragment identifier is not sensitive. But in the case of end-to-end encrypted
applications storing an encryption key in it, this is not an option!

Fortunately, there is a way to [customize the event][sentry-custom] sent to Sentry
right before it leaves the browser. This way you can simply scrub the URL fragment
entirely from the captured url. Here is an example using TypeScript:

```ts
import * as Sentry from '@sentry/browser'
import { Event as SentryEvent } from '@sentry/types'

Sentry.init({
  dsn: '<your-sentry-dsn>',
  beforeSend(event: SentryEvent): SentryEvent {
    if (event.request?.url) {
      event.request.url = event.request.url.split('#')[0]
    }
    return event
  },
})
```

I have applied this very technique to scrub the encryption keys from Sentry reports
in [Griffonnage][griffonnage-github] (see commit [1d81adf][griffonnage-commit]).

## Summary

When building secure and privacy-first end-to-end encrypted applications,
developers must analyse the ins and outs of the data they are dealing with,
especially the ones that are supposed to remain secure! This is where drawing
the [threat model][wikipedia-threat-model] is necessary and can help identify
potential vulnerabilities.

While sharing URLs with encryption keys in it might be a debate, it is still a
great and easy way to protect your users data with end-to-end encryption, but
as a developer you have to be careful that your application will not send those
secrets with 3rd-party services.

On the same subject, if you're thinking about using [Stripe][stripe] as a
payment-gateway for your next end-to-end encrypted application using URL fragments
to store sensitive data, [be careful and think twice][stripe-url-collection] (thanks
to my friend [François Best][francois-best] for the link!).

As a final note, I am having a blast developing [Griffonnage][griffonnage] to
provide my friends with a truly private way to play with collaborative drawing
during the COVID-19 lockdown (as an alternative to Skribbl.io and the likes).
If you're feeling all nerdy and privacy-conscious, come contribute to the project
on [GitHub][griffonnage-github]!

[griffonnage]: https://griffonnage.now.sh 'Griffonnage'
[griffonnage-github]: https://github.com/griffonnage/griffonnage 'Griffonnage GitHub'
[griffonnage-commit]: https://github.com/griffonnage/griffonnage/commit/1d81adf27d77ec41244179d7616ae993e02a763c 'Griffonnage Commit #1d81adf27d'
[wikipedia-fragment]: https://en.wikipedia.org/wiki/Fragment_identifier 'Wikipedia - Fragment Identifier'
[wikipedia-spa]: https://en.wikipedia.org/wiki/Single-page_application 'Wikipedia - Single Page Application'
[wikipedia-threat-model]: https://en.wikipedia.org/wiki/Threat_model 'Wikipedia - Threat Model'
[html-anchor]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Linking_to_an_element_on_the_same_page 'MDN - Anchor'
[html-history]: https://developer.mozilla.org/en-US/docs/Web/API/History 'MDN - History'
[html-fragment]: https://www.w3.org/TR/webarch/#media-type-fragid 'MDN - Fragment'
[firefox-send]: https://send.firefox.com 'Firefox Send'
[excalidraw]: https://excalidraw.com 'Excalidraw'
[excalidraw-blog]: https://blog.excalidraw.com/end-to-end-encryption/ 'Excalidraw Blog'
[sentry]: https://sentry.io 'Sentry'
[sentry-oss]: https://sentry.io/_/open-source/ 'Sentry Open-Source'
[sentry-js]: https://docs.sentry.io/platforms/javascript/ 'Sentry JS SDK'
[sentry-sensitive]: https://docs.sentry.io/data-management/sensitive-data/ 'Sentry Sensitive Data'
[sentry-custom]: https://docs.sentry.io/data-management/sensitive-data/#custom-event-processing-in-the-sdk 'Sentry Sensitive Data'
[stripe]: https://stripe.com 'Stripe'
[stripe-url-collection]: https://mtlynch.io/stripe-update/#disclose-url-collection-more-explicitly 'Stripe URL Collection'
[francois-best]: https://francoisbest.com 'François Best'
