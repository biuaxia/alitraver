<template>
	<view class="container">
		<u-swiper :list="dataList" radius="0" imgMode="widthFix" indicator indicatorMode="line" circular></u-swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					
					/* 'cloud://medical-appointments-7b621f545c8.6d65-medical-appointments-7b621f545c8-1309166222/banners/9bd9b167gy1fwrt0fwlh3j21hc0u0alc.jpg',
					'cloud://medical-appointments-7b621f545c8.6d65-medical-appointments-7b621f545c8-1309166222/banners/9bd9b167gy1fwsfhi3x9vj21hc0u0hc0.jpg',
					'cloud://medical-appointments-7b621f545c8.6d65-medical-appointments-7b621f545c8-1309166222/banners/9bd9b167gy1fwsgehvzr7j21hc0u0b29.jpg',
					'cloud://medical-appointments-7b621f545c8.6d65-medical-appointments-7b621f545c8-1309166222/banners/9bd9b167gy1fwsghhpbn6j21hc0u0b29.jpg',
					'cloud://medical-appointments-7b621f545c8.6d65-medical-appointments-7b621f545c8-1309166222/banners/9bd9b167gy1g2qksqall0j21hc0u01kx.jpg',
					'cloud://medical-appointments-7b621f545c8.6d65-medical-appointments-7b621f545c8-1309166222/banners/9bd9b167gy1g2qkt9k952j21hc0u01kx.jpg',
					'cloud://medical-appointments-7b621f545c8.6d65-medical-appointments-7b621f545c8-1309166222/banners/9bd9b167gy1g4lia5oyxsj21hc0xcb29.jpg',
					'cloud://medical-appointments-7b621f545c8.6d65-medical-appointments-7b621f545c8-1309166222/banners/9bd9b167gy1g4lifhuoeoj21hc0xchdt.jpg',
					'cloud://medical-appointments-7b621f545c8.6d65-medical-appointments-7b621f545c8-1309166222/banners/9bd9b167gy1g4lj28n2goj21hc0xc4qq.jpg',
					'cloud://medical-appointments-7b621f545c8.6d65-medical-appointments-7b621f545c8-1309166222/banners/9bd9b167ly1g2qks5y32nj21hc0u01kx.jpg', */
				],
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.container {
		margin: 0 0;
	}
</style>
