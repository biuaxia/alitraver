<template>
	<view>
		<!-- ticket -->
		<u-grid :border="false" col="5" @click="click">
			<u-grid-item v-for="(item,index) in ticketList" :key="index">
				<u-icon :customStyle="{marginTop:20+'rpx'}" :name="item.image" :size="40" imgMode="widthFix">
				</u-icon>
				<text class="grid-text">{{item.title}}</text>
			</u-grid-item>
		</u-grid>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		name: 'ticket',
		props:{
			ticketList: Array
		},
		data() {
			return {
				
			}
		},
		methods: {
			click(name) {
				this.$refs.uToast.success(`点击了第${name}个`)
			}
		}
	}
</script>

<style scoped>
	.grid-text {
		font-size: 14px;
		color: #909399;
		padding: 10rpx 0 20rpx 0rpx;
		/* #ifndef APP-PLUS */
		box-sizing: border-box;
		/* #endif */
	}
</style>
