<template>
	<view class="class-score">
		<!-- 考试安排查询结果 -->
		<my-infomuation>
			<view class="p">学号：</view>
			<view class="p">姓名：</view>
			<view class="p">考试课程：</view>
			<view class="p">学时：</view>
			<view class="p">试卷编号：</view>
			<view class="p">考试形式：</view>
			<view class="p">考试日期：</view>
			<view class="p">考试时间：</view>
			<view class="p">考试周次：</view>
			<view class="p">考试星期：</view>
			<view class="p">占用节次：</view>
			<view class="p">考试校区：</view>
			<view class="p">考试场地：</view>
			<view class="p">缓考：</view>
			<view class="p">座位号：</view>
			<view class="p">安排类型：</view>
			<view class="p">考试类型：</view>
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
