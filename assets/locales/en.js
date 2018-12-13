import common from './common'

export default {
  ...common,
  lang: 'English',
  navbar: {
    home: 'Home',
    freelance: 'Freelance',
    software: 'Software',
    contact: 'Contact',
    language: 'Language'
  },
  home: {
    title: 'Romain Clement',
    subtitle: 'Freelance Software Engineer',
    presentation:`
      <p>Hi, I'm Romain Clement</p>
      <p>
        I'm
        <strong>CTO</strong>
        at
        <a
          href="https://sylha.io"
          target="_blank">
          Sylha
        </a>
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
        <a
          href="https://www.malt.fr/profile/romainclement/"
          target="_blank">
          freelancing contracts
        </a>.
      </p>
    `,
    letsTalk: 'Let\'s talk!',
    newOpportunity: 'New opportunity',
    companies: 'Companies I\'ve worked with'
  },
  freelance: {
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
    projects: [
      {
        title: 'Meeblip Controller',
        subtitle: 'Take full control over your Meeblip Anode!',
        content: `
          <p>
            <a
              href="https://github.com/rclement/meeblip-controller/releases/latest"
              target="_blank">
              <img src="https://img.shields.io/github/release/rclement/meeblip-controller.svg">
            </a>

            <a
              href="https://github.com/rclement/meeblip-controller"
              target="_blank">
              <img src="https://img.shields.io/github/license/rclement/meeblip-controller.svg">
              <img src="https://img.shields.io/github/stars/rclement/meeblip-controller.svg">
            </a>
          </p>

          <p>
            Meeblip Controller is a real-time MIDI controller for the
            <a
              href="https://meeblip.com/products/meeblip-anode-synth"
              target="_blank">
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
