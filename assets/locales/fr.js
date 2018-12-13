export default {
  lang: 'Français',
  navbar: {
    home: 'Accueil',
    freelance: 'Freelance',
    software: 'Logiciels',
    contact: 'Contact',
    language: 'Langue'
  },
  home: {
    title: 'Romain Clement',
    subtitle: 'Ingénieur Logiciel Indépendant',
    presentation: `
      <p>Bonjour, je m'appelle Romain Clement</p>
      <p>
        Je suis
        <strong>directeur technique</strong>
        chez
        <a
          href="https://sylha.io"
          target="_blank">
          Sylha
        </a>
        et
        <strong>ingénieur logiciel indépendant</strong>
        développant des applications
        <strong>web</strong>
        et
        <strong>audio</strong>,
        basé dans les alpes françaises.
      </p>
      <p>
        J'ai une forte sensibilité pour le
        <strong>code de qualité</strong>,
        les
        <strong>processus continus</strong>
        ainsi que le
        <strong>logiciel libre</strong>.
      </p>
      <p>
        J'accèpte actuellement de nouvelles
        <a
          href="https://www.malt.fr/profile/romainclement/"
          target="_blank">
          missions en freelance
        </a>.
      </p>
    `,
    letsTalk: 'Parlons-en !',
    newOpportunity: 'Nouvelle opportunité',
    companies: 'Sociétés avec lesquelles j\'ai travaillé'
  },
  freelance: {
    newProject: 'Nouveau projet',
    services: [
      {
        title: 'Développement full-stack',
        subtitle: 'Envie d\'un nouveau service en ligne ?',
        content: `
          <p>
            Je peux apporter mon aide dans le choix et l\'orchestration de la stack technologique la plus adaptée, en développant des
            <strong>web-services</strong>
            (back-end, API),
            des
            <strong>web-apps</strong>
            (front-end),
            des <strong>applications mobiles</strong>,
            et implémenter une stratégie
            <strong>d\'intégration et déploiement continu</strong>.
          </p>
        `,
        tags: ['Python', 'Flask', 'Node.js', 'Vue.js', 'React-Native', 'PostgreSQL', 'MongoDB', 'Redis', 'Stripe', 'Mangopay', 'Docker']
      },
      {
        title: 'Audio numérique',
        subtitle: 'Un projet lié à l\'audio et/ou la musique en tête ?',
        content: `
          <p>
            Je peux apporter mon expertise dans la manifestation de ces ondes sonores en concevant des
            <strong>applications natives</strong>
            et des
            <strong>plug-ins audio</strong>,
            <strong>performants</strong>
            et
            <strong>multiplatformes</strong>
            (MacOS, Windows, Linux).
          </p>
        `,
        tags: ['C++', 'CMake', 'JUCE', 'FRUT', 'DSP', 'OpenGL', 'VST', 'AU', 'AAX']
      }
    ]
  }
}
