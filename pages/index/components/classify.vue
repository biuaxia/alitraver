<template>
	<view class="container">
		<u-divider :dot="true"></u-divider>

		<u-grid :border="true" col="4">
			<u-grid-item v-for="(item,index) in tables" :key="index" :customStyle="{padding:20 + 'rpx 0'}">
				<text class="title">{{item.title}}</text>
				<text class="sub-title">{{item.subTitle}}</text>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default {
		name: 'classify',
		data() {
			return {
				tables: [{
					title: '出境游',
					subTitle: '走遍全球',
				}, {
					title: '国内游',
					subTitle: '精选路线',
				}, {
					title: '周边游',
					subTitle: '暑假红包',
				}, {
					title: '精选购',
					subTitle: '免税预购',
				}, {
					title: '签证/签注',
					subTitle: '领券',
				}, {
					title: '会员',
					subTitle: '签到',
				}, {
					title: '每日福利',
					subTitle: '领里程',
				}, {
					title: '全部',
					subTitle: '更多推荐',
				}]
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.container {
		margin: 0 40upx;
	}

	.title {
		font-size: 30upx;
		color: #333333;
		font-weight: bold;
	}

	.sub-title {
		font-size: 23upx;
		color: #686868;
	}
</style>
