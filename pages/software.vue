<template>
  <div class="software">
    <section
      id="meeblip-controller"
      class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <h1 class="title">Meeblip Controller</h1>
            <h6 class="subtitle">Take full control over your Meeblip Anode!</h6>
            <div class="content">
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
            </div>

            <div class="tags">
              <span class="tag">C++</span>
              <span class="tag">JUCE</span>
              <span class="tag">FRUT</span>
              <span class="tag">CMake</span>
              <span class="tag">MIDI</span>
              <span class="tag">VST</span>
              <span class="tag">VST3</span>
              <span class="tag">AU</span>
            </div>
          </div>

          <div class="column is-centered">
            <image-modal
              src="https://raw.githubusercontent.com/rclement/meeblip-controller/master/ext/meeblip-controller-screenshot.png"
              height="400px"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ImageModal from '@/components/ImageModal'

export default {
  components: {
    ImageModal
  }
}
</script>

<style scoped>
.column.is-centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
