<template>
	<view class="container">
		<!-- 学籍预警 -->
		<view v-for="(item,index) in list" :key="index">
			<my-infomuation>
				<view class="p">学年学期：{{item.className}}</view>
				<view class="p">学号：{{item.className}}</view>
				<view class="p">姓名：{{item.className}}</view>
				<view class="p">班级：{{item.className}}</view>
				<view class="p">预警类型：{{item.className}}</view>
				<view class="p">预警信息：{{item.className}}</view>
				<view class="p">审核状态：{{item.className}}</view>
			</my-infomuation>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {},
				list: [],
				page: 1
			}
		},
		onLoad(options) {
			this.options = options;
			this.loadData();
		},
		methods: {
			async loadData() {
				let random = this.$Mock.Random;
				this.list = this.mock({
					'code': 0,
					'msg': '成功',
					'list|1-10': [{
						'id|+1': 1,
						'className': random.ctitle(5, 15),
						'type': random.integer(36, 72) + '学时',
						'score': random.integer(1, 4),
						'bixiu': '必修'
					}]
				}).list;

				// let data = {
				// 	page: this.page,
				// 	limit: this.limit
				// }
				// this.$get('', data).then(res => {
				// 	console.log(res);
				// });
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../../common/scss/button.scss";
.container {
	padding-top: 30upx;
}
.selector {
	width: 70%;
}
.buttons {
	margin-top: 60upx;
	display: flex;
	justify-content: center;
	padding-bottom: 70upx;
}
</style>
