<template>
	<view>
		<Search></Search>
		<Carousel></Carousel>
		<Ticket></Ticket>
		<Classify></Classify>
	</view>
</template>

<script>
	import Search from './components/search'
	import Carousel from './components/carousel'
	import Ticket from './components/ticket'
	import Classify from './components/classify'

	export default {
		components: {
			Search,
			Carousel,
			Ticket,
			Classify
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
