<template>
	<view class="container"><u-swiper :list="carouselList" keyName="image" radius="0" indicator indicatorMode="line" circular></u-swiper></view>
</template>

<script>
export default {
	name: 'carousel',
	props: {
		carouselList: Array
	},
	data() {
		return {};
	},
	methods: {}
};
</script>

<style scoped>
.container {
	margin: 0 0;
}
</style>
