export default ({ store }) => {
  const dnt = navigator.doNotTrack || navigator.msDoNotTrack
  const dntEnabled = dnt === 'yes' || dnt === '1'

  if (dntEnabled) {
    store.dispatch('analytics/doNotTrack')
  }
}
