<template>
	<view class="login-wrap">
		<view class="student-logo">
			<image class="logo" src="/static/v2_qnsymi.png" mode="widthFix"></image>
		</view>
		<view class="form">
			<view class="form-title">教务管理系统</view>
			<view class="input-block">
				<view class="input-label">账号</view>
				<view class="input-value">
					<input class="input" v-model="username" type="text" placeholder="请输入学号或工号" />
				</view>
			</view>
			<view class="input-block">
				<view class="input-label">密码</view>
				<view class="input-value">
					<input class="input" v-model="password" type="text" password placeholder="请输入密码" />
				</view>
			</view>
			<view class="input-block">
				<view class="input-label">验证码</view>
				<view class="input-value">
					<input class="input" v-model="code" type="text" placeholder="请输入验证码" />
				</view>
			</view>
			<view class="submit-button" @tap="onLogin">立即登录</view>
			<view class="repassword" @tap="onNavigateToMixin" data-url="repassword/repassword">忘记密码</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				code: ''
			}
		},
		methods: {
			async onLogin() {
				//立即登录
				let data = {
					username: this.username,
					password: this.password,
					code: this.code
				}
				try {
					let rst = await this.$post('login', data);
				}catch(err) {
					console.log(err);
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.login-wrap {
	padding-top: 126upx;
	.student-logo {
		width: 80%;
		margin: 0 auto;
	}
}
.form {
	.form-title {
		font-size: 42upx;
		text-align: center;
		padding: 68upx 0 50upx;
	}
	.input-block {
		margin: 0 24upx 24upx;
		display: flex;
		height: 92upx;
		line-height: 92upx;
		.input-label {
			width: 120upx;
			background-color: rgb(177, 207, 241);
			border: 1px solid rgb(177, 207, 241);
			text-align: center;
			border-radius: 5upx 0 0 5upx;
			font-size: 32upx;
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
		margin: 72upx auto 0;
		text-align: center;
		border-radius: 10upx;
		background-color: rgb(65, 169, 114);
		color: white;
		width: 386upx;
		height: 104upx;
		line-height: 104upx;
		font-size: 36upx;
	}
	.repassword {
		margin: 40upx auto 0;
		text-align: center;
		width: 286upx;
		height: 70upx;
		line-height: 70upx;
		font-size: 36upx;
	}
}
</style>
