<template>
	<view>
		<u-sticky>
			<u-tabs :list="tabList" @click="click" lineWidth="30" lineColor="#FFD300" :activeStyle="{
					color: '#303133',
					fontWeight: 'bold',
					transform: 'scale(1.05)'
				}" :inactiveStyle="{
					color: '#606266',
					transform: 'scale(1)'
				}" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"></u-tabs>
		</u-sticky>
	</view>
</template>

<script>
	import {
		homeList,
		homeListCount
	} from '../../../common/cloudfun.js'

	var {
		log
	} = console

	export default {
		name: 'content',
		props: {
			tabList: Array,
			pullDownPageNum: Number,
			pullDownPageSize: Number,
		},
		data() {
			return {}
		},
		methods: {
			click(item) {
				log('item', item)

				// 重置横向 tab 切换状态
				this.$store.commit('indexHomeSwitchTabStateMutation', true)
				// 重置文章总页数
				homeListCount(item.nav).then(res => {
					this.$store.commit('indexHomeArticlePageNumTotalMutation', res.total)
				})

				// 点击切换展示加载控件
				this.$store.commit('indexHomeListLoadingMutation', true)

				// 加载列表数据
				homeList(item.nav, this.pullDownPageNum, this.pullDownPageSize)
					.then(res => {
						log(res)
						this.$store.dispatch('indexHomeListAction', res.data)

						// 拿到数据隐藏加载控件
						this.$store.commit('indexHomeListLoadingMutation', false);
					})
					.catch(err => {
						log(err)
					});
			}
		}
	};
</script>
