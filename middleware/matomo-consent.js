export default function({ route, store }) {
  route.meta.matomo = {
    ...(!store.state.analytics.consent
      ? { requireConsent: ['requireConsent'] }
      : {}),
    ...(store.state.analytics.consent
      ? { setConsentGiven: ['setConsentGiven'] }
      : {})
  }
}
