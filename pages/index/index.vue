<template>
	<view>
		<Search></Search>
		<Carousel :carouselList="carouselList"></Carousel>
		<Ticket :ticketList="ticketList"></Ticket>
		<Classify :classifyList="classifyList"></Classify>
		<Content :tabList="tabList"></Content>
		<Article></Article>
	</view>
</template>

<script>
	import Search from './components/search'
	import Carousel from './components/carousel'
	import Ticket from './components/ticket'
	import Classify from './components/classify'
	import Content from './components/content'
	import Article from './components/article'

	var {
		log
	} = console

	export default {
		components: {
			Search,
			Carousel,
			Ticket,
			Classify,
			Content,
			Article
		},
		data() {
			return {
				carouselList: [],
				ticketList: [],
				classifyList: [],
				tabList: [],
			}
		},
		created() {
			const db = wx.cloud.database()
			const bannerReq = db.collection('banners')
			bannerReq.get()
				.then((res) => {
					log(res)
					this.carouselList = res.data
				})
				.catch((err) => {
					log(err)
				})
			const ticketReq = db.collection('tickets')
			ticketReq.get()
				.then((res) => {
					log(res)
					this.ticketList = res.data
				})
				.catch((err) => {
					log(err)
				})

			const classifyReq = db.collection('classifies')
			classifyReq.get()
				.then((res) => {
					log(res)
					this.classifyList = res.data
				})
				.catch((err) => {
					log(err)
				})


			const tabReq = db.collection('tabs')
			tabReq.get()
				.then((res) => {
					log(res)
					this.tabList = res.data
				})
				.catch((err) => {
					log(err)
				})

		},
		methods: {

		}
	}
</script>

<style>

</style>
