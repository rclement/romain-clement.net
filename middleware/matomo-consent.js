export default function({ route, store }) {
  route.meta.matomo = {
    ...(!store.state.matomo.consent
      ? { requireConsent: ['requireConsent'] }
      : {}),
    ...(store.state.matomo.consent
      ? { setConsentGiven: ['setConsentGiven'] }
      : {})
  }
}
