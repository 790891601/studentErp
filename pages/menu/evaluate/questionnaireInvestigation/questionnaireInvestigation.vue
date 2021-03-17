<template>
	<view class="container">
		<!-- 问卷调查 -->
		<my-infomuation>
			<view class="p">问卷编号</view>
			<view class="p">问卷名称</view>
			<view class="p">评价起始时间</view>
			<view class="p">评价结束时间</view>
			<view class="buttons">
				<view class="button-view button-max" @tap="onSubmit">进入填写</view>
			</view>
		</my-infomuation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
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
