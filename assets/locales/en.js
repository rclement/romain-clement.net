export default {
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
  }
}
