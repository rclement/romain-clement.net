export default {
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
