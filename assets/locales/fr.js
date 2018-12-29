import common from './common'

export default {
  ...common,
  lang: 'Français',
  title: 'Romain Clement',
  keywords:
    'romain, clement, independant, logiciel, ingenieur, grenoble, developpement, web, audio, plugins, python, flask, nodejs, nuxtjs, vuejs, c++, juce',
  navbar: {
    home: 'Accueil',
    freelance: 'Freelance',
    software: 'Logiciels',
    contact: 'Contact',
    language: 'Langue'
  },
  credits: {
    social: {
      getInTouch: 'Prise de contact',
      hireMe: 'Propositions de contrats'
    },
    copyright: {
      text: 'Tous droits réservés',
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
          value: '6201Z (Programmation informatique)'
        }
      ],
      link: {
        name: 'Infogreffe - Registre du commerce et des sociétés',
        url:
          'https://www.infogreffe.fr/entreprise-societe/841265655-clement-romain-84126565500016.html?afficherretour=true&tab=entrep'
      }
    }
  },
  contact: {
    name: 'Nom',
    email: 'E-mail',
    subject: 'Sujet',
    message: 'Message',
    send: 'Envoyer'
  },
  home: {
    title: 'Ingénieur Logiciel Indépendant',
    presentation: `
      <p>Bonjour, je m'appelle Romain Clement</p>
      <p>
        Je suis
        <strong>directeur technique</strong>
        chez
        <strong>
          <a
            href="https://sylha.io"
            title="Sylha"
            alt="Sylha">
            Sylha
          </a>
        </strong>
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
        <strong>missions en freelance</strong>.
      </p>
    `,
    letsTalk: 'Parlons-en !',
    newOpportunity: 'Nouvelle opportunité',
    companies: "Sociétés avec lesquelles j'ai travaillé"
  },
  freelance: {
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
  },
  software: {
    title: 'Logiciels',
    projects: [
      {
        title: 'Meeblip Controller',
        subtitle: 'Reprenez les pleins pouvoirs sur votre Meeblip Anode !',
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
            Meeblip Contoller est un contrôleur MIDI temps-réel pour le synthétiseur
            <a
              href="https://meeblip.com/products/meeblip-anode-synth"
              title="Meeblip Anode"
              alt="Meeblip Anode">
              Meeblip Anode
            </a>,
            disponible sur MacOS, Windows et Linux sous la forme d'un plug-in audio (VST, VST3, AU) et d'une application standalone.
          </p>

          <p>
            Téléchargez-le, c'est gratuit et libre!
          </p>
        `,
        tags: ['C++', 'CMake', 'JUCE', 'FRUT', 'MIDI', 'VST', 'VST3', 'AU'],
        image: {
          src:
            'https://raw.githubusercontent.com/rclement/meeblip-controller/master/ext/meeblip-controller-screenshot.png',
          title: 'Meeblip Controller capture',
          height: '400px'
        }
      }
    ]
  }
}
