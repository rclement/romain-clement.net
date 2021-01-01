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
      subtitle: 'Freelance Software Engineer & Trainer',
      location: 'Grenoble, France',
      contact: 'Contact',
    },

    freelancing: {
      title: 'Freelancing',
      interests: {
        text: `My current domains of interest and expertise include {data},
        {ci-cd}, {privacy-by-design}, {e2ee} and {active-learning}.`,
        data: 'data engineering',
        cicd: 'continuous integration / continuous deployment',
        privacyByDesign: 'privacy by design',
        e2ee: 'end-to-end encryption',
        activeLearning: 'active learning',
      },
      stacks: {
        text: `My favorite technical stacks include {python}, {node}, {typescript},
        {nuxt}, {postgresql}, {docker}, {gitlab-ci}, {github-actions}.
        And I am currently {exploring} the brave new world of {rust}!`,
        python: 'Python',
        node: 'Node.js',
        typescript: 'TypeScript',
        nuxt: 'Nuxt.js',
        postgresql: 'PostgreSQL',
        docker: 'Docker',
        gitlabCI: 'GitLab-CI',
        githubActions: 'GitHub Actions',
        exploring: 'exploring',
        rust: 'Rust',
      },
      notInterested: {
        text: `I am not the right man for the job if you are looking for webdesign,
        CMS-based monolith websites (Wordpress, Drupal, etc.), PHP,
        develop massive user-data aggregation systems, privacy-invasive systems.`,
      },
      moto: {
        text: `Since 2012, I've been working with various companies.
        I believe in building software with privacy in mind from the ground-up:
        this is something we can choose willingly from the start, empowering businesses
        to find their true added value.
        Designing privacy-friendly systems goes hand in hand with transparency and security.
        {new-contracts}.`,
        newContracts: 'I am currently accepting new contracts',
      },
    },

    oss: {
      title: 'Open-Source',
      text: `I truly believe free and open-source software is key in building
      transparent and privacy-conscious software. Here are some open-source projects
      I've either contributed and/or initiated on {github} and {gitlab}.`,
      github: 'GitHub',
      gitlab: 'GitLab',
    },

    talks: {
      title: 'Talks',
      text: `I enjoy attending and hosting tech meetups (co-organizer of the
        {meetup-python-grenoble}), and also giving a few technical talks once in a while.`,
    },

    music: {
      title: 'Music',
      text: `When I'm not writing code, I play music.`,
    },

    contact: {
      title: 'Contact',
      subtitle: `Looking for a freelance software developer for your next project? Let's talk!`,
      notice: `This message will be encrypted using my {pgp} public key.
      If you'd like me to respond with end-to-end encryption,
      do not forget to attach your PGP public key!`,
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

  articles: {
    title: 'Articles',
    text: `I mostly write about software engineering for cloud-native applications. And some other stuff.`,
    tags: {
      label: 'Filter by tags',
      placeholder: 'Add some tags',
    },
    slug: {
      minutes: '{n} minute | {n} minutes',
      reading: '{time} read',
      mistake: 'Found a mistake? Edit this article on {url}!',
    },
  },
}
