<template>
	<view class="container">
		<!-- 操作日志 -->
		<my-infomuation>
			<view class="log-title">起止时间</view>
			<view class="p">
				<my-picker class="selector" mode="date" :defaultValue.sync="form.startTime"></my-picker>
				<uni-icons type="arrowthinright" class="icon-right"></uni-icons>
				<my-picker class="selector" mode="date" :defaultValue.sync="form.endTime"></my-picker>
			</view>
			<view class="buttons">
				<view class="button-view button-lg" @tap="onNavigateToMixin" data-url="menu/operationLog/detail/detail">查询</view>
			</view>
		</my-infomuation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					startTime: '0000-00-00',
					endTime: '0000-00-00'
				}
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
@import "../../../common/scss/button.scss";
.container {
	padding-top: 30upx;
}
.selector {
	width: 50%;
}
.log-title {
	font-size: 38upx;
	text-align: center;
	padding-bottom: 50upx;
}
.p {
	justify-content: space-between;
}
.icon-right {
	margin: 0 16upx;
}
.buttons {
	margin-top: 60upx;
	display: flex;
	justify-content: center;
	padding-bottom: 70upx;
}
</style>
