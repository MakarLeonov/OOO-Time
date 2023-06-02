import { createStore } from 'vuex'
import axios from 'axios'
import service from './modules/service'
import feedback from './modules/feedback'
import promotions from './modules/promotions'
import advantages from './modules/advantages'
import consultations from './modules/consultations'
import auth from './modules/auth'
import other from './modules/other'

export default createStore({
  modules: {
    service,
    feedback,
    promotions,
    advantages,
    consultations,
    auth,
    other,
  },
})
