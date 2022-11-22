---
# Inspiration: https://learn.getgrav.org/17/forms/forms/example-form
form:
  name: contact

  fields:
    name:
      label: Name
      placeholder: Your name
      type: text
      autocomplete: true
      required: true

    email:
      label: E-mail
      placeholder: Your e-mail
      type: email
      autocomplete: true
      required: true

    subject:
      label: Subject
      placeholder: What do you want to talk about?
      type: text
      minlength: 1
      maxlength: 100
      required: true

    message:
      label: Message
      placeholder: Your message
      type: textarea
      minlength: 1
      maxlength: 1000
      required: true

    public_key:
      label: PGP Public Key
      placeholder: Attach your PGP Public Key
      type: textarea
      minlength: 1

    honeypot:
      type: hidden

    consent:
      label: I consent to having this website store my submitted information in order to respond to my inquiry.
      type: checkbox
      required: true

  buttons:
    submit:
      type: submit
      value: Send

  redirect:
    success: /contact/success/
    error: /contact/error/

  notice: |-
    Powered by <a href="https://rclement.github.io/mailer/" title="Mailer">Mailer</a>
---

# Contact

Looking for a freelance engineer and/or trainer for your next project? Let's talk!

---

You can either fill the contact form below or book a 30 minutes call with me.
Be sure to include every detail I should know in advance to make it effective!

[:fontawesome-solid-video: Schedule a call](https://cal.com/romainclement/){ .md-button .md-button--primary }

---

!!! tip

    This message will be encrypted using my [PGP][pgp-key] public key. If you'd like me to respond with end-to-end encryption, do not forget to attach your PGP public key!

{{ form }}

[pgp-key]: /.well-known/openpgpkey/hu/dj3498u4hyyarh35rkjfnghbjxug6b19
