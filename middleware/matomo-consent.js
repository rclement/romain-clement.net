export default function({ route, store }) {
  const dnt = store.state.analytics.dnt
  const consent = store.state.analytics.consent
  const track = !dnt && consent

  route.meta.matomo = {
    ...(!track ? { requireConsent: ['requireConsent'] } : {}),
    ...(track ? { setConsentGiven: ['setConsentGiven'] } : {})
  }
}
