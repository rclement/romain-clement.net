export default {
  navbar: {
    home: 'Home',
    language: 'Language',
  },

  credits: {
    about: {
      title: 'About',
    },
    credits: {
      title: 'Credits',
      website: 'This website is open-source software under {license} license',
      powered: 'Powered by {nuxt}, {bulma} and {fontawesome}',
      analytics: 'Privacy-first analytics tracking powered by {chiffre}',
    },
    copyright: {
      text: 'Copyright',
      start: '2018',
      end: 'present',
      owner: 'Romain Clement',
    },
    version: 'Version',
  },

  error: {
    pageNotFound: {
      title: 'Page not found',
      subtitle: 'It seems you are lost!',
    },
    backToHome: 'Back to home',
  },

  home: {
    hero: {
      title: 'Romain Clement',
      subtitle: 'Software Engineer & Trainer',
      location: 'Grenoble, France',
      contact: 'Contact',
    },

    freelancing: {
      title: 'Freelancing',
      whatICanDo:
        'My current domains of interest and expertise include data engineering, automated quality assurance, privacy-by-design, cryptography and active learning. My favorite technical stacks include Python, Node.js, TypeScript, Nuxt.js/Vue.js, PostgreSQL, Redis, Docker, GitLab-CI, GitHub Actions. And I am currently exploring the brave new world of {rust}!',
      whatIWontDo: `I am not the right man for the job if you are looking for webdesign, CMS-based monolith websites (Wordpress, Drupal, etc.), PHP, develop massive user-data-aggregation systems, privacy-invasive systems.`,
      companiesIveWorkedWith: `Since 2012, I've been working with various companies. I believe in building software with privacy in mind from the ground-up: this is something we can choose willingly from the start, empowering businesses to find their true added value. Designing privacy-friendly systems goes hand in hand with transparency and security. I am currently accepting new contracts.`,
    },

    oss: {
      title: 'Open-Source',
      text: `I truly believe free and open-source software is key in building transparent and privacy-conscious software. Here are some open-source projects I've either contributed and/or initiated.`,
    },

    talks: {
      title: 'Talks',
      text:
        'I enjoy attending and hosting tech meetups (co-organizer of the {meetup-python-grenoble}), and also giving a few technical talks once in a while.',
    },

    music: {
      title: 'Music',
      text: `When I'm not writing code, I play music.`,
    },

    contact: {
      title: 'Contact',
      subtitle: `Looking for a freelance software developer for your next project? Let's talk!`,
      notice: `This message will be encrypted using my {pgp} public key. If you'd like me to respond with end-to-end encryption, do not forget to attach your PGP public key!`,
      email: {
        label: 'E-mail',
      },
      name: {
        label: 'Name',
      },
      subject: {
        label: 'Subject',
      },
      message: {
        label: 'Message',
      },
      publicKey: {
        label: 'PGP public key',
        select: 'Select PGP public key',
      },
      send: 'Send',
      success: 'Thank you for your message!',
      failure: 'Your message could not be sent, please try again later.',
      powered: 'Powered by {mailer}',
    },
  },
}
