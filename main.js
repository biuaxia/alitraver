import App from './App'

// 引入 Vuex
import store from './pages/store/store.js'
Vue.prototype.$store = store

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif

// 引入uView主JS库
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
