import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faAt,
  faCheck,
  faCode,
  faComments,
  faExclamationCircle,
  faEnvelope,
  faKey,
  faLaptopCode,
  faMusic,
  faNewspaper,
  faPaperPlane,
  faRocket,
  faRss,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faConnectdevelop,
  faGithub,
  faGitlab,
  faKeybase,
  faLinkedin,
  faViadeo,
  faXing,
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(
  faAt,
  faCheck,
  faCode,
  faComments,
  faExclamationCircle,
  faEnvelope,
  faKey,
  faLaptopCode,
  faMusic,
  faNewspaper,
  faPaperPlane,
  faRocket,
  faRss,
  faUser,
  faConnectdevelop,
  faGithub,
  faGitlab,
  faKeybase,
  faLinkedin,
  faViadeo,
  faXing
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
