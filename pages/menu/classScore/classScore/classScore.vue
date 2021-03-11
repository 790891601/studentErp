<template>
	<view class="class-score">
		<!-- 课程成绩查询结果 -->
		<my-infomuation>
			<view class="p">学年学期：</view>
			<view class="p">学号：</view>
			<view class="p">姓名：</view>
			<view class="p">课程编号：</view>
			<view class="p">课程名称：</view>
			<view class="p">总成绩：</view>
			<view class="p">绩点：</view>
			<view class="p">学时：</view>
			<view class="p">学分：</view>
			<view class="p">课程大类：</view>
			<view class="p">课程分类：</view>
			<view class="p">修读方式：</view>
			<view class="p">考试性质：</view>
			<view class="p">成绩方式：</view>
			<view class="p">任务编号：</view>
			<view class="p">有效：</view>
			<view class="p">成绩标志：</view>
			<view class="p">提示：</view>
			<view class="p">备注：</view>
		</my-infomuation>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
@import "../../../../common/scss/button.scss";
.class-score {
	margin-top: 160upx;
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
