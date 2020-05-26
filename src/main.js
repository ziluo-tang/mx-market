// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/assets/iconfont/iconfont.css'
import {Tabbar, 
        TabbarItem,
        Icon,
        Search,
        Tab,
        Tabs,
        Card,
        Button,
        Checkbox,
        Stepper,
        Image,
        Lazyload,
        Loading,
        NavBar,
        SubmitBar
      } from 'vant';

Vue.use(Tabbar)
.use(TabbarItem)
.use(Icon)
.use(Search)
.use(Tab)
.use(Tabs)
.use(Card)
.use(Button)
.use(Checkbox)
.use(Stepper)
.use(Image)
.use(Lazyload)
.use(Loading)
.use(NavBar)
.use(SubmitBar)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
