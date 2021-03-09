<template>
	<view class="repassword-container">
		<!-- 忘记密码 -->
		<view class="title">找回密码</view>
		<view class="form">
			<view class="input-block">
				<view class="input-label">账号</view>
				<view class="input-value">
					<input class="input" type="text" placeholder="请输入学号或工号" />
				</view>
			</view>
			<view class="input-block">
				<view class="input-label">密码</view>
				<view class="input-value">
					<input class="input" type="text" password placeholder="请输入密码" />
				</view>
			</view>
			<view class="input-block">
				<view class="input-label">验证码</view>
				<view class="input-value">
					<input class="input" type="text" placeholder="请输入验证码" />
				</view>
			</view>
			<view class="submit-button">找回</view>
		</view>
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
.title {
	color: rgba(82, 143, 251, 1);
	text-align: center;
	padding: 92upx 0 64upx;
	font-size: 38upx;
}
.form {
	.input-block {
		margin: 0 24upx 36upx;
		display: flex;
		line-height: 92upx;
		height: 92upx;
		.input-label {
			font-size: 32upx;
			width: 120upx;
			background-color: #F4F4F4;
			border: 1px solid #BBBBBB;
			text-align: center;
			border-radius: 5upx 0 0 5upx;
		}
		.input-value {
			font-size: 32upx;
			flex: 1;
			border: 1px solid rgb(187, 187, 187);
			padding-left: 15upx;
			border-radius: 0 5upx 5upx 0;
		}
		.input {
			line-height: 92upx;
			height: 92upx;
		}
	}
	.submit-button {
		margin: 84upx auto 0;
		text-align: center;
		border-radius: 10upx;
		background-color: #F48D3A;
		color: white;
		width: 386upx;
		height: 104upx;
		line-height: 104upx;
		font-size: 36upx;
	}
}
</style>
