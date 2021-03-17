<template>
	<view class="container">
		<!-- 课程评价 -->
		<my-infomuation>
			<view class="p">
				<text class="field">课程编号：</text>
				<my-input class="selector" v-model="form.classNo"></my-input>
			</view>
			<view class="p">
				<text class="field">课程名称：</text>
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
				form: {
					classNo: ''
				}
			}
		},
		methods: {
			onSubmit() {
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
