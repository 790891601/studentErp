<template>
	<view class="class-score">
		<!-- 培养计划查询结果 -->
		<my-infomuation>
			<view class="p">计划编号：</view>
			<view class="p">年级：</view>
			<view class="p">适用对象：</view>
			<view class="p">计划类型：</view>
			<view class="p">学生人数：</view>
			<view class="p">管理单位：</view>
			<view class="p">版本名称：</view>
			<view class="p">备注：</view>
			<view class="p">计划相似度：</view>
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
