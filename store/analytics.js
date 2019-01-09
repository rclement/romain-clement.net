export const state = () => ({
  dnt: false,
  consent: false
})

export const mutations = {
  setDnt(state, dnt) {
    state.dnt = dnt
  },

  setConsent(state, consent) {
    state.consent = consent
  }
}

export const actions = {
  doNotTrack({ commit }) {
    commit('setDnt', true)
  },

  accept({ commit }) {
    commit('setConsent', true)
  },

  decline({ commit }) {
    commit('setConsent', false)
  }
}
