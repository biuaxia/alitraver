<template>
	<view class="container">
		<view class="icon-container">
			<image src="../../../static/tab/scanCode.svg" mode="widthFix"></image>
		</view>
		<view class="search-container">
			<image src="../../../static/tab/search.svg" mode="widthFix"></image>
			<input type="text" placeholder="请输入文字" disabled />
		</view>
		<view class="icon-container">
			<image src="../../../static/tab/message.svg" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "search",
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		justify-content: space-between;
		height: 70upx;
		align-items: center;
		background: linear-gradient(to top, #FFE566 2%, #FFD300 100%);
		padding: 30upx 0;
	}

	.icon-container {
		width: 50upx;
		height: 50upx;
		padding: 0 15upx;
	}

	.icon-container image {
		width: 50upx;
		height: 50upx;
	}

	.search-container {
		height: 70upx;
		line-height: 70upx;
		width: 100%;
		display: flex;
		flex-direction: flex;
		background: #FFF7D4;
		border-top-left-radius: 50upx;
		border-bottom-left-radius: 50upx;
		border-top-right-radius: 10upx;
		border-bottom-right-radius: 50upx;
	}

	.search-container image {
		margin: auto 20upx;
		width: 40upx;
		height: 40upx;
	}

	.search-container input {
		height: 70upx;
		line-height: 70upx;
		width: 100%;
		font-size: 30upx;
		color: #666666;
	}
</style>
