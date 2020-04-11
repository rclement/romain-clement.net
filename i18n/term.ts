import en from './en'

const messages = JSON.parse(JSON.stringify(en))

messages.navbar.home = '~'
messages.navbar.language = 'i18n'

messages.error.pageNotFound.title = '404'
messages.error.pageNotFound.subtitle = 'raise NotFoundException'
messages.error.backToHome = 'cd ~'

messages.home.hero.title = 'rmnclmnt'
messages.home.hero.location = '45.1841,5.7153'

messages.home.freelancing.title = 'async/await'
messages.home.oss.title = 'code'
messages.home.talks.title = 'lorem ipsum'
messages.home.music.title = 'sin(2𝛑ft)'
messages.home.contact.title = 'echo'

export default messages
