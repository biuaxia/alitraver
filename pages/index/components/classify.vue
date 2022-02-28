<template>
	<view class="container">
		<u-divider :dot="true"></u-divider>

		<u-grid :border="true" col="4">
			<u-grid-item v-for="(item,index) in classifyList" :key="index" :customStyle="{padding:20 + 'rpx 0'}">
				<text class="title">{{item.title}}</text>
				<text class="sub-title">{{item.subTitle}}</text>
			</u-grid-item>
		</u-grid>

		<u-divider :dot="true"></u-divider>
	</view>
</template>

<script>
	export default {
		name: 'classify',
		props:{
			classifyList:Array
		},
		data() {
			return {
				
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
		margin-top: 5upx;
		font-size: 23upx;
		color: #686868;
	}
</style>
