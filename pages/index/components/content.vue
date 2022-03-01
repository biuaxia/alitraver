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
		homeList
	} from '../../../common/cloudfun.js'

	var {
		log
	} = console

	export default {
		name: 'content',
		props: {
			tabList: Array
		},
		data() {
			return {}
		},
		methods: {
			click(item) {
				log('item', item);
				homeList(item.nav)
					.then(res => {
						log(res)
						let listData = res.data
						this.$store.dispatch('indexHomeListAction',listData)
					})
					.catch(err => {
						log(err)
					});
			}
		}
	};
</script>
