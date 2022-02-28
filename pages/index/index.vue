<template>
	<view>
		<Search></Search>
		<Carousel :carouselList="carouselList"></Carousel>
		<Ticket :ticketList="ticketList"></Ticket>
		<Classify :classifyList="classifyList"></Classify>
		<Content :tabList="tabList"></Content>
		<Article :articleList="articleList"></Article>
	</view>
</template>

<script>
import Search from './components/search';
import Carousel from './components/carousel';
import Ticket from './components/ticket';
import Classify from './components/classify';
import Content from './components/content';
import Article from './components/article';

import { home } from '../../common/cloudfun.js';

var { log } = console;

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
			articleList: []
		};
	},
	created() {
		Promise.all([home('banners'), home('tickets'), home('classifies'), home('tabs'), home('recommend')])
			.then(res => {
				log(res);
				this.carouselList = res[0].data;
				this.ticketList = res[1].data;
				this.classifyList = res[2].data;
				this.tabList = res[3].data;
				this.articleList = res[4].data;
			})
			.catch(err => {
				log(err);
			});
	},
	methods: {}
};
</script>

<style></style>
