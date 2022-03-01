import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 首页横向 tab 切换时传输的值
const indexHome = {
	articleList: []
}

const state = {
	indexHome
}

var {
	log
} = console

export default new Vuex.Store({
	state,
	// 跳过异步操作，可以直接使用 `this.$store.commit('mutationsName', data)`
	actions: {
		indexHomeListAction(context, data) {
			// Actions 中可以执行异步操作，下面的日志会在 mutations 之后输出
			setTimeout(() => {
				log('indexHomeListAction', data)
			}, 1000)
			
			context.commit('indexHomeListMutation', data)
		}
	},
	mutations: {
		indexHomeListMutation(state, data) {
			log('indexHomeListMutation', data)
			state.indexHome = {
				articleList: data
			}
			log('indexHomeListMutation - saved', data)
		}
	}
})
