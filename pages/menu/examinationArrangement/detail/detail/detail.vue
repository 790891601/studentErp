<template>
	<view class="container">
		<!-- 考试安排查询结果 -->
		<my-infomuation>
			<view class="p">学号：{{detail.id}}</view>
			<view class="p">姓名：{{detail.id}}</view>
			<view class="p">考试课程：{{detail.id}}</view>
			<view class="p">学时：{{detail.id}}</view>
			<view class="p">试卷编号：{{detail.id}}</view>
			<view class="p">考试形式：{{detail.id}}</view>
			<view class="p">考试日期：{{detail.id}}</view>
			<view class="p">考试时间：{{detail.id}}</view>
			<view class="p">考试周次：{{detail.id}}</view>
			<view class="p">考试星期：{{detail.id}}</view>
			<view class="p">占用节次：{{detail.id}}</view>
			<view class="p">考试校区：{{detail.id}}</view>
			<view class="p">考试场地：{{detail.id}}</view>
			<view class="p">缓考：{{detail.id}}</view>
			<view class="p">座位号：{{detail.id}}</view>
			<view class="p">安排类型：{{detail.id}}</view>
			<view class="p">考试类型：{{detail.id}}</view>
		</my-infomuation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {},
				detail: {}
			}
		},
		onLoad(options) {
			this.options = options;
			this.loadData();
		},
		methods: {
			async loadData() {
				let random = this.$Mock.Random;
				this.detail = this.mock({
					'id|+1': 1,
					'xueqi': '2019-2020-1',
					'className': random.ctitle(5, 15),
					'type': random.integer(36, 72) + '学时',
					'score': random.integer(1, 4),
				});

				// let data = {
				// 	page: this.page,
				// 	limit: this.limit
				// }
				// try {
				// 	let res = await this.$get('', data);
				// }catch(e) {
				// 	console.log(e)
				// }
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../../../../common/scss/button.scss";
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
