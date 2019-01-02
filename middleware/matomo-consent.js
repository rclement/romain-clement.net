export default function({ route, store }) {
  route.meta.matomo = {
    ...(!store.state.consent.analytics
      ? { requireConsent: ['requireConsent'] }
      : {}),
    ...(!store.state.consent.analytics
      ? { disableCookies: ['disableCookies'] }
      : {}),
    ...(store.state.consent.analytics
      ? { setConsentGiven: ['setConsentGiven'] }
      : {})
  }
}
