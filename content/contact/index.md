---
# Inspiration: https://learn.getgrav.org/17/forms/forms/example-form
form:
  method: POST
  action: https://contact.romain-clement.net/api/mail

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
      type: e-mail
      autocomplete: true
      required: true

    subject:
      label: Subject
      placeholder: What do you want to talk about?
      type: text
      required: true

    message:
      label: Message
      placeholder: Your message
      type: textarea
      required: true

    public_key:
      label: PGP Public Key
      placeholder: Select PGP Public Key
      type: file

    honeypot:
      type: hidden

  buttons:
    submit:
      type: submit
      value: Send

  notice: |-
    Powered by <a href="https://mailer.romain-clement.net" title="Mailer">Mailer</a>
---

# Contact

Looking for a freelance engineer and/or trainer for your next project? Let's talk!

!!! tip

    This message will be encrypted using my [PGP][pgp-key] public key. If you'd like me to respond with end-to-end encryption, do not forget to attach your PGP public key!

[FORM]

<!--
<form method="post" action="https://contact.romain-clement.net/api/mail">
  <input name="name" type="text" placeholder="Name" required><br />
  <input name="email" type="email" placeholder="E-mail" required><br />
  <input name="subject" type="text" placeholder="Subject" required><br />
  <textarea name="message" maxlength="1000" placeholder="Message" required></textarea><br />
  <input name="public_key_file" type="file"><br />
  <textarea name="public_key" placeholder="PGP public key"></textarea><br />
  <input type="submit" value="Send"><br />
  <input name="honeypot" type="hidden">
</form>
-->

[pgp-key]: /.well-known/openpgpkey/hu/dj3498u4hyyarh35rkjfnghbjxug6b19
