<template>
	<view class="container">
		<!-- 课程成绩查询结果 -->
		<my-infomuation>
			<view class="p">学年学期：{{detail.xueqi}}</view>
			<view class="p">学号：{{detail.xueqi}}</view>
			<view class="p">姓名：{{detail.xueqi}}</view>
			<view class="p">课程编号：{{detail.xueqi}}</view>
			<view class="p">课程名称：{{detail.xueqi}}</view>
			<view class="p">总成绩：{{detail.xueqi}}</view>
			<view class="p">绩点：{{detail.xueqi}}</view>
			<view class="p">学时：{{detail.xueqi}}</view>
			<view class="p">学分：{{detail.xueqi}}</view>
			<view class="p">课程大类：{{detail.xueqi}}</view>
			<view class="p">课程分类：{{detail.xueqi}}</view>
			<view class="p">修读方式：{{detail.xueqi}}</view>
			<view class="p">考试性质：{{detail.xueqi}}</view>
			<view class="p">成绩方式：{{detail.xueqi}}</view>
			<view class="p">任务编号：{{detail.xueqi}}</view>
			<view class="p">有效：{{detail.xueqi}}</view>
			<view class="p">成绩标志：{{detail.xueqi}}</view>
			<view class="p">提示：{{detail.xueqi}}</view>
			<view class="p">备注：{{detail.xueqi}}</view>
		</my-infomuation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {},
				detail: {},
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
				this.detail = this.mock({
					'id|+1': 1,
					'xueqi': random.date()
				});

				// let data = {

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
.class-score {
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
