<template>
	<view>
		<Search></Search>
		<Carousel :carouselList="carouselList"></Carousel>
		<Ticket :ticketList="ticketList"></Ticket>
		<Classify :classifyList="classifyList"></Classify>
		<Content :tabList="tabList"></Content>

		<view class="loading-container" v-if="loadingState">
			<view class="u-page__loading-item">
				<u-loading-icon mode="circle" color="#FFD300" size="36" inactive-color="#EEEEEE" :vertical="true"
					:isDot="true" text="正在加载..."></u-loading-icon>
			</view>
		</view>
		<Article :articleList="articleList" v-else></Article>
	</view>
</template>

<script>
	import Search from './components/search';
	import Carousel from './components/carousel';
	import Ticket from './components/ticket';
	import Classify from './components/classify';
	import Content from './components/content';
	import Article from './components/article';

	import {
		mapState
	} from 'vuex'

	import {
		home,
		homeList
	} from '../../common/cloudfun.js';

	var {
		log
	} = console;

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
				articleList: [],
				loadingState: false
			};
		},
		created() {
			Promise.all([home('banners'), home('tickets'), home('classifies'), home('tabs'), homeList('recommend')])
				.then(res => {
					log(res)
					this.carouselList = res[0].data
					this.ticketList = res[1].data
					this.classifyList = res[2].data
					this.tabList = res[3].data
					// this.articleList = res[4].data
					this.$store.dispatch('indexHomeListAction', res[4].data)
				})
				.catch(err => {
					log(err)
				});
		},
		computed: {
			// 取出 vuex 数据仓库的数据，Tips：indexHome 表示 state 数据仓库中的数据名称
			// ...mapState(['indexHome']),
			...mapState(['indexHomeArticleList', 'indexHomeArticleLoadingState']),
			// 处理首页 tab 切换时的数据
			indexHomeListCompute() {
				log('首页文章数据发生改变')
				log('1. ', this.articleList)
				this.articleList = this.indexHomeArticleList
			},
			indexHomeListLoadingStateCompute() {
				log('首页文章状态发生改变')
				log('2. ', this.loadingState)
				this.loadingState = this.indexHomeArticleLoadingState
			}
		},
		methods: {}
	};
</script>

<style scoped>
	.loading-container {
		margin: 20upx 0;
	}
</style>
