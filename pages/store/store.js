import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
	// 首页横向 tab 切换时传输的值
	indexHomeArticleList: [],
	// 首页横向 tab 切换时展示加载控件
	indexHomeArticleLoadingState: false,
	// 首页横向 tab 切换状态
	indexHomeSwitchTabState: false,
	// 首页文章总页数
	indexHomeArticlePageNumTotal: 0,
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
		},
	},
	mutations: {
		indexHomeListMutation(state, data) {
			log('indexHomeListMutation', state, data)
			state.indexHomeArticleList = data
			log('indexHomeListMutation - saved', state, data)
		},
		indexHomeListLoadingMutation(state, data) {
			log('indexHomeListLoadingMutation', data)
			if (data) {
				state.indexHomeArticleLoadingState = data
			} else {
				setTimeout(() => {
					state.indexHomeArticleLoadingState = data
				}, 1000)
			}
		},
		indexHomeSwitchTabStateMutation(state, data) {
			log(`Vuex中收到了变化: ${data}`)
			state.indexHomeSwitchTabState = data
		},
		indexHomeArticlePageNumTotalMutation(state, data) {
			state.indexHomeArticlePageNumTotal = data
		}
	}
})
