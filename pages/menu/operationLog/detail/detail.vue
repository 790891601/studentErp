<template>
	<view class="container">
		<!-- 操作日志查询结果 -->
		<my-infomuation>
			<view class="p">名称：</view>
			<view class="p">描述：</view>
			<view class="p">IP地址：</view>
			<view class="p">操作时间：</view>
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
