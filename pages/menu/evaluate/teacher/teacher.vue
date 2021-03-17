<template>
	<view class="container">
		<!-- 教师评价 -->
		<my-infomuation>
			<view class="p">
				<text class="field">教师编号：</text>
				<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
			</view>
			<view class="p">
				<text class="field">教师姓名：</text>
				<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
			</view>
			<view class="p">
				<text class="field">学年学期：</text>
				<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
			</view>
			<view class="p">
				<text class="field">课程：</text>
				<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
			</view>
			<view class="p">
				<text class="field">教学环节：</text>
				<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
			</view>
			<view class="p">
				<text class="field">结课日期：</text>
				<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
			</view>
			<view class="buttons">
				<view class="button-view button-max" @tap="onSubmit">进入评价</view>
			</view>
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
			onSubmit() {
				//报名
				console.log(this.form);
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../../../common/scss/button.scss";
.container {
	padding-top: 30upx;
}
.selector {
	width: 60%;
}
.p {
	justify-content: space-between;
	align-items: flex-start;
}
.buttons {
	margin-top: 60upx;
	display: flex;
	justify-content: space-between;
	padding-bottom: 70upx;
}
.hr {
	margin-top: 120upx;
}
</style>
