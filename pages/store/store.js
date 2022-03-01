import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 首页横向 tab 切换时传输的值
const list = {
	listing: []
}

const state = {
	list
}

var {
	log
} = console

export default new Vuex.Store({
	state,
	actions: {
		indexHomeListAction(a, b) {
			log('indexHomeListAction', a, b)
			a.commit('indexHomeListMutation', b)
		}
	},
	mutations: {
		indexHomeListMutation(a, b) {
			log('indexHomeListMutation', a, b)
			a.list = {
				listing: b
			}
			log('indexHomeListMutation - saved', a, b)
		}
	}
})
