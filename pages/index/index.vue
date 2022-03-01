<template>
	<view>
		<Search></Search>
		<Carousel :carouselList="carouselList"></Carousel>
		<Ticket :ticketList="ticketList"></Ticket>
		<Classify :classifyList="classifyList"></Classify>
		<Content :tabList="tabList" :pullDownPageNum="pullDownPageNum" :pullDownPageSize="pullDownPageSize"></Content>

		<view class="loading-container" v-if="loadingState">
			<view class="u-page__loading-item">
				<u-loading-icon mode="circle" color="#FFD300" size="36" inactive-color="#EEEEEE" :vertical="true"
					:isDot="true" text="正在加载..."></u-loading-icon>
			</view>
		</view>
		<Article :articleList="articleList" :pullDownStatus="pullDownStatus" v-else></Article>
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
		homeList,
		homeListCount
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
				articleTotal: 0,
				loadingState: false,
				pullDownStatus: 'loadmore',
				pullDownPageNum: 0,
				pullDownPageSize: 5,
				switchTabState: false,
			};
		},
		created() {
			Promise.all([home('banners'), home('tickets'), home('classifies'), home('tabs'), homeListCount('recommend'),
					homeList('recommend',
						this.pullDownPageNum, this.pullDownPageSize)
				])
				.then(res => {
					log(res)
					this.carouselList = res[0].data
					this.ticketList = res[1].data
					this.classifyList = res[2].data
					this.tabList = res[3].data
					this.articleTotal = res[4].total

					this.$store.dispatch('indexHomeListAction', res[5].data)

					this.pullDownPageNum = ++this.pullDownPageNum
				})
				.catch(err => {
					log(err)
				});
		},
		onReachBottom() {
			const MAX_PAGE = this.articleTotal / this.pullDownPageSize
			if (this.pullDownPageNum >= MAX_PAGE) return;
			this.pullDownStatus = 'loading';
			homeList('recommend', this.pullDownPageNum, this.pullDownPageSize)
				.then(res => {
					log(res)
					let result = [...this.indexHomeArticleList, ...res.data]
					log(result)
					this.$store.dispatch('indexHomeListAction', result)

					setTimeout(() => {
						if (this.pullDownPageNum >= MAX_PAGE) this.pullDownStatus = 'nomore';
						else this.pullDownStatus = 'loading';
					}, 1000)

					this.pullDownPageNum = ++this.pullDownPageNum;
				})
				.catch(err => {
					log(err)
					this.pullDownPageNum = --this.pullDownPageNum;
				});

		},
		computed: {
			// 取出 vuex 数据仓库的数据，Tips：indexHome 表示 state 数据仓库中的数据名称
			// ...mapState(['indexHome']),
			...mapState(['indexHomeArticleList', 'indexHomeArticleLoadingState', 'indexHomeSwitchTabState',
				'indexHomeArticlePageNumTotal'
			]),
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
			},
			indexHomeSwitchTabStateCompute() {
				log(`父页面监听到了变化: ${this.indexHomeSwitchTabState}`)
				this.switchTabState = this.indexHomeSwitchTabState
				if (this.switchTabState) {
					this.$store.commit('indexHomeSwitchTabStateMutation', false)
					this.switchTabState = false

					// 重置下拉次数
					this.pullDownPageNum = 1
					this.articleList = []
				}
			},
			indexHomeArticlePageNumTotalCompute() {
				this.articleTotal = this.indexHomeArticlePageNumTotal
			},
		},
		methods: {}
	};
</script>

<style scoped>
	.loading-container {
		margin: 20upx 0;
	}
</style>
