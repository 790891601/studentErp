<template>
	<view class="container">
		<!-- 课程加分成绩查询结果 -->
		<my-infomuation>
			<view class="p">学年学期：{{detail.xueqi}}</view>
			<view class="p">课程编号：{{detail.xueqi}}</view>
			<view class="p">课程名称：{{detail.xueqi}}</view>
			<view class="p">课程大类：{{detail.xueqi}}</view>
			<view class="p">修读方式：{{detail.xueqi}}</view>
			<view class="p">考试性质：{{detail.xueqi}}</view>
			<view class="p">成绩方式：{{detail.xueqi}}</view>
			<view class="p">成绩标志：{{detail.xueqi}}</view>
			<view class="p">变更前：{{detail.xueqi}}</view>
			<view class="p">变更后：{{detail.xueqi}}</view>
			<view class="p">审核状态：{{detail.xueqi}}</view>
			<view class="p">审核结果：{{detail.xueqi}}</view>
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
					'title': random.date()
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
