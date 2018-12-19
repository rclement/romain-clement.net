import common from './common'

export default {
  ...common,
  lang: 'English',
  title: 'Romain Clement',
  keywords: 'romain, clement, freelance, software, engineer, grenoble, development, web, audio, plugins, python, flask, nodejs, nuxtjs, vuejs, c++, juce',
  navbar: {
    home: 'Home',
    freelance: 'Freelance',
    software: 'Software',
    contact: 'Contact',
    language: 'Language'
  },
  credits: {
    social: {
      getInTouch: 'Get in touch',
      hireMe: 'Hire me',
    },
    copyright: {
      text: 'Copyright',
      start: '2018',
      end: 'present',
      author: 'Romain Clement'
    },
    company: {
      name: 'Monsieur Clement Romain',
      address: '80 cours Liberation - Gen de Gaulle, 38100 Grenoble, France',
      kind: 'Micro-entreprise',
      registrations: [
        {
          type: 'SIRET',
          value: '841 265 655 00016'
        },
        {
          type: 'NAF',
          value: '6201Z (Computer programming activities)'
        }
      ],
      link: {
        name: 'Infogreffe - Registre du commerce et des sociétés',
        url: 'https://www.infogreffe.fr/entreprise-societe/841265655-clement-romain-84126565500016.html?afficherretour=true&tab=entrep'
      }
    }
  },
  home: {
    title: 'Freelance Software Engineer',
    presentation:`
      <p>Hi, I'm Romain Clement</p>
      <p>
        I'm
        <strong>CTO</strong>
        at
        <strong>
          <a
            href="https://sylha.io"
            title="Sylha"
            alt="Sylha">
            Sylha
          </a>
        </strong>
        and a
        <strong>freelance software engineer</strong>
        building
        <strong>web</strong>
        and
        <strong>audio</strong>
        applications, based in the French Alps.
      </p>
      <p>
        I strive for
        <strong>code quality</strong>
        and
        <strong>continuous processes</strong>,
        while being an
        <strong>open-source enthusiast</strong>.
      </p>
      <p>
        I am currently accepting new
        <strong>
          <a
            href="https://www.malt.fr/profile/romainclement/"
            title="Malt"
            alt="Malt">
            freelancing contracts
          </a>
        </strong>.
      </p>
    `,
    letsTalk: 'Let\'s talk!',
    newOpportunity: 'New opportunity',
    companies: 'Companies I\'ve worked with'
  },
  freelance: {
    title: 'Freelance',
    presentation: 'I am available for new freelance software development contracts regarding full-stack development and/or digital audio applications.',
    profile: 'My freelancer profile can be found on {comet} and {malt}.',
    newProject: 'New project',
    services: [
      {
        title: 'Full-stack development',
        subtitle: 'Fancy a new online service?',
        content: `
          <p>
            I can help on choosing and orchestrating the proper technological stack, developing software for
            <strong>web-services</strong>
            (back-end, API),
            <strong>web-apps</strong>
            (front-end),
            <strong>mobile apps</strong>,
            and implementing a strategy for
            <strong>continuous integration and deployment</strong>.
          </p>
        `,
        tags: ['Python', 'Flask', 'Node.js', 'Vue.js', 'React-Native', 'PostgreSQL', 'MongoDB', 'Redis', 'Stripe', 'Mangopay', 'Docker']
      },
      {
        title: 'Digital audio',
        subtitle: 'An audio and/or music related project in mind?',
        content: `
          <p>
            I can help making those waves happen by engineering
            <strong>multi-platform</strong>
            (MacOS, Windows, Linux) and
            <strong>performant</strong>
            software for
            <strong>desktop applications</strong>
            and
            <strong>audio plug-ins</strong>.
          </p>
        `,
        tags: ['C++', 'CMake', 'JUCE', 'FRUT', 'DSP', 'OpenGL', 'VST', 'AU', 'AAX']
      }
    ]
  },
  software: {
    title: 'Software',
    projects: [
      {
        title: 'Meeblip Controller',
        subtitle: 'Take full control over your Meeblip Anode!',
        content: `
          <p>
            <a
              href="https://github.com/rclement/meeblip-controller/releases/latest"
              title="Meeblip Controller GitHub Releases"
              alt="Meeblip Controller GitHub Releases">
              <img src="https://img.shields.io/github/release/rclement/meeblip-controller.svg">
            </a>

            <a
              href="https://github.com/rclement/meeblip-controller"
              title="Meeblip Controller GitHub"
              alt="Meeblip Controller GitHub">
              <img src="https://img.shields.io/github/license/rclement/meeblip-controller.svg">
              <img src="https://img.shields.io/github/stars/rclement/meeblip-controller.svg">
            </a>
          </p>

          <p>
            Meeblip Controller is a real-time MIDI controller for the
            <a
              href="https://meeblip.com/products/meeblip-anode-synth"
              title="Meeblip Anode"
              alt="Meeblip Anode">
              Meeblip Anode
            </a>
            synthesizer, available on MacOS, Windows and Linux as an audio plug-in (VST, VST3, AU) and a standalone app.
          </p>

          <p>
            Download it, it's free and open-source!
          </p>
        `,
        tags: ['C++', 'CMake', 'JUCE', 'FRUT', 'MIDI', 'VST', 'VST3', 'AU'],
        image: {
          src: "https://raw.githubusercontent.com/rclement/meeblip-controller/master/ext/meeblip-controller-screenshot.png",
          title: 'Meeblip Controller screenshot',
          height: '400px'
        }
      }
    ]
  }
}
