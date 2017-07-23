// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'

import firebase from 'firebase'
// import firebaseui from 'firebaseui'
// import {db} from '@/helpers/firebase'
import 'firebaseui/dist/firebaseui.css'

Vue.config.productionTip = false

Vue.use(VueFire)


new Vue({
  el: '#app',
  router,
  created(){
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          // this.$router.push('/success')
          this.$router.push('/')
        } else {
          this.$router.push('/auth')
        }
     });
  },
  template: '<App/>',
  components: { App }
})
