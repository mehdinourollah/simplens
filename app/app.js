import Vue from "nativescript-vue";
import Vuex from 'vuex'

import Fake from "./components/Fake";
import Login from './components/Login'
import axios from 'axios'


Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    
  }
})

Vue.config.silent = false

Vue.registerElement(
  'CardView',
  () => require('@nstudio/nativescript-cardview').CardView
);

new Vue({
  render: h => h('frame', [h(Login)]),
  store: store,
}).$start();

// Bug https://github.com/shirakaba/react-nativescript/issues/65 temp solution
global.__onLiveSyncCore = function () {
  var frame = require('@nativescript/core').Frame.topmost()
  if (frame) {
    if (frame.currentPage && frame.currentPage.modal) {
      frame.currentPage.modal.closeModal()
    }

    if (frame.currentPage) {
      frame.currentPage.addCssFile(
        // require('@nativescript/core').getCssFileName() // Causing crash for HMR changes with the CopyWebpackPlugin bug
      )
    }
  }
}