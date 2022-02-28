<script>
	var {log} = console
	export default {
		onLaunch: function() {
			console.log('App Launch')
			if (!wx.cloud){
				log('无法使用云能力')
			}else{
				wx.cloud.init({
					env: 'medical-appointments-7b621f545c8',
					traceUser: true
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>

<!-- 引入uView基础样式 -->
<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
</style>