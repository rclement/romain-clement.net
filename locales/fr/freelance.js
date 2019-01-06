export default {
  title: 'Freelance',
  presentation:
    "J'accepte de nouvelles missions freelance en développement full-stack et/ou audio numérique.",
  profile: 'Mon profil de freelancer se trouve sur {comet} et {malt}.',
  newProject: 'Nouveau projet',
  services: [
    {
      title: 'Développement full-stack',
      subtitle: "Envie d'un nouveau service en ligne ?",
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
      tags: [
        'Python',
        'Flask',
        'Node.js',
        'Vue.js',
        'React-Native',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Stripe',
        'Mangopay',
        'Docker'
      ]
    },
    {
      title: 'Audio numérique',
      subtitle: "Un projet lié à l'audio et/ou la musique en tête ?",
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
      tags: [
        'C++',
        'CMake',
        'JUCE',
        'FRUT',
        'DSP',
        'OpenGL',
        'VST',
        'AU',
        'AAX'
      ]
    }
  ]
}
