export const state = () => ({
  consent: false
})

export const mutations = {
  setConsent(state, consent) {
    state.consent = consent
  }
}

export const actions = {
  accept({ commit }) {
    commit('setConsent', true)
  },

  decline({ commit }) {
    commit('setConsent', false)
  }
}
