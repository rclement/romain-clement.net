import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faExclamationCircle,
  faKey,
  faRocket
} from '@fortawesome/free-solid-svg-icons'
import {
  faConnectdevelop,
  faGithub,
  faKeybase,
  faLinkedin,
  faViadeo,
  faXing
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(
  faExclamationCircle,
  faKey,
  faRocket,
  faConnectdevelop,
  faGithub,
  faKeybase,
  faLinkedin,
  faViadeo,
  faXing
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
