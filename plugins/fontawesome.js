import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faKey, faRocket, faSadTear } from '@fortawesome/free-solid-svg-icons'
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
  faKey,
  faRocket,
  faSadTear,
  faConnectdevelop,
  faGithub,
  faKeybase,
  faLinkedin,
  faViadeo,
  faXing
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
