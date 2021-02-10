import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Row, Col, Container, Header, Main, Divider, Menu, MenuItem, Table, TableColumn, Card, Loading, Button} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import "@/assets/element-variables.scss"

Vue.config.productionTip = false

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

// configure language
locale.use(lang)

// import components
Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Divider)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Card)
Vue.use(Loading)
Vue.use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
