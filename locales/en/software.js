export default {
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
        src:
          'https://raw.githubusercontent.com/rclement/meeblip-controller/master/ext/meeblip-controller-screenshot.png',
        title: 'Meeblip Controller screenshot',
        height: '400px'
      }
    }
  ]
}
