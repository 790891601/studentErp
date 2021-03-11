<template>
	<view class="study-plan">
		<my-infomuation>
			<view class="p">计划编号：</view>
			<view class="p">年级：</view>
			<view class="p">适用对象：</view>
			<view class="p">计划类型：</view>
			<view class="p">
				<text>模块方向选择：</text>
				<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
			</view>
			<view class="p">备注：</view>
			<view class="buttons">
				<view class="button-view" @tap="onNavigateToMixin" data-url="menu/studyPlan/preExamination/preExamination">预审</view>
				<view class="button-view" @tap="onNavigateToMixin" data-url="menu/studyPlan/detail/detail">查看</view>
			</view>
		</my-infomuation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				moduleRanges: [0,1,2],
				defaultValue: 2
			}
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
@import "../../../common/scss/button.scss";
.buttons {
	margin-top: 50upx;
	display: flex;
	justify-content: space-between;
}
.selector {
	flex: 1 auto;
}
</style>
