export default {
  navbar: {
    home: 'Home',
    language: 'Language',
  },

  credits: {
    about: {
      title: 'About',
      company: {
        name: 'Monsieur Romain Clement',
        address: {
          line1: '80 cours Liberation - Gen de Gaulle',
          postcode: '38100',
          city: 'Grenoble',
          country: 'France',
        },
        kind: 'Micro-entreprise',
        registrations: [
          {
            type: 'SIRET',
            value: '841 265 655 00016',
          },
          {
            type: 'NAF',
            value: '6201Z (Computer programming activities)',
          },
        ],
      },
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
      companies: {
        simplon: {
          name: 'Simplon.co',
          year: '2019 - 2020',
          job: 'Data Developer Training',
          skills: [
            'Data analysis',
            'Data engineering',
            'Project Management',
            'Python',
            'SQL',
            'Cloud',
          ],
        },
        wattamate: {
          name: 'Wattamate',
          year: '2019 - 2020',
          job: 'Backend Software Development',
          skills: [
            'Micro-services',
            'CI/CD',
            'Cloud',
            'Security',
            'Python',
            'SQL',
            'NoSQL',
            'Docker',
            'Kubernetes',
          ],
        },
        pulsar: {
          name: 'Pulsar Audio',
          year: '2018',
          job: 'Audio Software Development',
          skills: ['DSP', 'C++', 'CMake', 'OpenGL', 'JUCE', 'VST', 'AU', 'AAX'],
        },
      },
    },

    oss: {
      title: 'Open-Source',
      text: `I truly believe free and open-source software is key in building transparent and privacy-conscious software. Here are some open-source projects I've either contributed and/or initiated.`,
      projects: {
        mailer: {
          name: 'Mailer',
          tagline: 'Dead-simple mailer micro-service for static websites',
        },
        nuxtChiffre: {
          name: 'Nuxt Chiffre Module',
          tagline: 'Chiffre Analytics module for Nuxt.js',
        },
        cozyTagAndPass: {
          name: 'Cozy Konnector Tag&Pass',
          tagline: 'Cozy konnector to fetch bills from Tag&Pass',
        },
        cozyThomann: {
          name: 'Cozy Konnector Thomann',
          tagline: 'Cozy konnector to fetch bills from Thomann',
        },
        meeblipController: {
          name: 'Meeblip Controller',
          tagline: 'MIDI controller for the Meeblip Anode synthesizer',
        },
      },
    },

    talks: {
      title: 'Talks',
      text:
        'I enjoy attending and hosting tech meetups (co-organizer of the {meetup-python-grenoble}), and also giving a few technical talks once in a while.',
      keynotes: {
        pythonCelery: {
          title: 'Python + Celery',
          subtitle: 'Manage your asynchronous tasks with Celery',
        },
        modernPythonDevelopment: {
          title: 'Modern Python Development',
          subtitle: 'Python software development for the modern age',
        },
        swarmFactor: {
          title: 'The Swarm Factor',
          subtitle: '12-factor Docker Swarm stacks',
        },
      },
    },

    music: {
      title: 'Music',
      text: `When I'm not writing code, I play music.`,
      bands: {
        hambush: {
          name: 'Hambush',
          style: 'Progressive Rock / Metal',
          text: 'Bass guitar, mixing, mastering, web',
        },
      },
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
