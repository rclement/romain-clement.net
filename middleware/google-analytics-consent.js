import Vue from 'vue'

export default function({ store }) {
  const dnt = store.state.analytics.dnt
  const consent = store.state.analytics.consent
  const track = !dnt && consent

  if (process.client) {
    if (track) {
      Vue.$ga.enable()
    } else {
      Vue.$ga.disable()
    }
  }
}
