<template>
	<view>
		<u-sticky>
			<u-tabs
				:list="tabList"
				@click="click"
				lineWidth="30"
				lineColor="#FFD300"
				:activeStyle="{
					color: '#303133',
					fontWeight: 'bold',
					transform: 'scale(1.05)'
				}"
				:inactiveStyle="{
					color: '#606266',
					transform: 'scale(1)'
				}"
				itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
			></u-tabs>
		</u-sticky>
	</view>
</template>

<script>
export default {
	name: 'content',
	props: {
		tabList: Array
	},
	data() {
		return {};
	},
	methods: {
		click(item) {
			console.log('item', item);
		}
	}
};
</script>

<style></style>
