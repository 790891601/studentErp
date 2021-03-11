<template>
	<view class="class-score">
		<!-- 学籍预警 -->
		<my-infomuation>
			<view class="p">学年学期：</view>
			<view class="p">学号：</view>
			<view class="p">姓名：</view>
			<view class="p">班级：</view>
			<view class="p">预警类型：</view>
			<view class="p">预警信息：</view>
			<view class="p">审核状态：</view>
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
@import "../../../common/scss/button.scss";
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
