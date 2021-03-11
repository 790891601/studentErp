<template>
	<view class="class-score">
		<!-- 测验成绩查询结果 -->
		<my-infomuation>
			<view class="p">课程编号：</view>
			<view class="p">课程名称：</view>
			<view class="p">学号：</view>
			<view class="p">姓名：</view>
			<view class="p">班级名称：</view>
			<view class="p">测验1：</view>
			<view class="p">测验2：</view>
			<view class="p">测验3：</view>
			<view class="p">平均分：</view>
			<view class="p">明细：</view>
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
