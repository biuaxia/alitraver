<template>
	<view class="active">
		<view class="content">
			<block v-for="(item, index) in articleList" :key="index">
				<view class="article">
					<view class="article-image">
						<image :src="item.image" mode="aspectFill" class="animated fadeIn"></image>
					</view>
					<view class="article-introduce">
						<view class="article-name">{{ item.name }}</view>
						<u-text :lines="2" :text="item.list" bold></u-text>
						<view class="article-label">{{ item.label }}</view>
						<view class="article-purchase">
							<text class="current-price">￥{{ item.price }}</text>
							<text class="current-purchase">{{ item.buy }} 人已购</text>
						</view>
					</view>
				</view>
			</block>
		</view>

		<u-loadmore :status="pullDownStatus" />

		<!-- <u-gap bgColor="#fff" height="1500px"></u-gap>
		<u-divider text="已到底部"></u-divider> -->
	</view>
</template>

<script>
	export default {
		name: 'article',
		props: {
			articleList: Array,
			pullDownStatus: String,
		},
		data() {
			return {}
		},
		computed: {},
		methods: {}
	};
</script>

<style scoped>
	.active {
		margin: 20upx 20upx;
	}

	.content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;
		-webkit-flex-wrap: wrap;
		overflow: hidden;
	}

	.article {
		width: 48%;
		flex-direction: column;
		display: flex;
		box-sizing: border-box;
	}

	.article-image {
		height: 400upx !important;
		object-fit: cover;
		overflow: hidden;
	}

	.article-image image {
		width: 100% !important;
		height: 100% !important;
		object-fit: cover;
		border-radius: 10upx;
	}

	.article-name {
		font-size: 32upx;
		color: #d0b083;
		margin: 10upx 0;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.article-list {
		font-size: 32upx;
		color: #444444;
		font-weight: bold;
		line-height: 50upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		height: 100upx !important;
	}

	.article-label {
		font-size: 25upx;
		color: #d0b083;
		padding: 10upx 0;
	}

	.article-purchase {
		display: flex;
		align-items: center;
		padding-bottom: 10upx;
	}

	.current-price {
		font-size: 36upx;
		color: #ff6b28;
		padding-right: 9upx;
	}

	.current-purchase {
		padding-left: 10upx;
	}
</style>
