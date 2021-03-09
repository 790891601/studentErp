<script>
	import { mapMutations } from 'vuex'
    export default {
        onLaunch: function() {
            console.log('App Launch');
			//系统初始化
			this.initialSystemInfo()
        },
        onShow: function() {
            console.log('App Show')
        },
        onHide: function() {
            console.log('App Hide')
        },
		globalData: {
			test: ''
		},
		methods:{
			...mapMutations(['setUniverifyErrorMsg','setUniverifyLogin', 'setSystemInfo']),
			initialSystemInfo() {
				this.setSystemInfo(uni.getSystemInfoSync());
			}
		}
    }
</script>

<style>
    /* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
    @import './common/uni.css';
	@import './common/font-awesome-4.7.0/css/font-awesome.css';
</style>
