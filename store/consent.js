export const state = () => ({
  analytics: false
})

export const mutations = {
  setAnalytics(state, accept) {
    state.analytics = accept
  }
}
