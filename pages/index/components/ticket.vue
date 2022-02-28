<template>
	<view>
		<!-- ticket -->
		<u-grid :border="false" col="5" @click="click">
			<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
				<u-icon :customStyle="{marginTop:20+'rpx'}" :name="baseListItem.src" :size="40" imgMode="widthFix">
				</u-icon>
				<text class="grid-text">{{baseListItem.title}}</text>
			</u-grid-item>
		</u-grid>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		name: 'ticket',
		data() {
			return {
				baseList: [{
						src: 'cloud://medical-appointments-7b621f545c8.6d65-medical-appointments-7b621f545c8-1309166222/tickets/VIP.svg',
						title: 'VIP'
					},
					{
						src: 'cloud://medical-appointments-7b621f545c8.6d65-medical-appointments-7b621f545c8-1309166222/tickets/交友.svg',
						title: '交友'
					},
					{
						src: 'cloud://medical-appointments-7b621f545c8.6d65-medical-appointments-7b621f545c8-1309166222/tickets/火热.svg',
						title: '火热'
					},
					{
						src: 'cloud://medical-appointments-7b621f545c8.6d65-medical-appointments-7b621f545c8-1309166222/tickets/美颜.svg',
						title: '美颜'
					},
					{
						src: 'cloud://medical-appointments-7b621f545c8.6d65-medical-appointments-7b621f545c8-1309166222/tickets/音乐.svg',
						title: '音乐'
					},
				]
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
