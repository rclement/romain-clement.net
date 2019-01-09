import Vue from 'vue'

export default function({ app, store }) {
  const consent = store.state.analytics.consent

  if (process.client) {
    if (consent) {
      Vue.$ga.enable()
    } else {
      Vue.$ga.disable()
    }
  }
}
