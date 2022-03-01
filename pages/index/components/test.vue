<template>
	<view class="wrap">
		<view class="item u-border-bottom" v-for="(item, index) in pullDownPageTotal" :key="index">
			{{'第' + item + '条数据'}}
		</view>
		<u-loadmore :status="pullDownStatus" />
	</view>
</template>

<script>
	export default {
		props: {
			pullDownStatus: String,
			pullDownPageNum: Number,
			pullDownPageSize: Number,
			pullDownPageTotal: Number
		},
		data() {
			return {}
		},
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}

	.item {
		padding: 24rpx 0;
		color: $u-content-color;
		font-size: 28rpx;
	}
</style>
