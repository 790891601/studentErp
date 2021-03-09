<template>
	<view class="user">
		<view class="userinfo">
			<!-- 未登录 -->
			<view class="empty-login" v-if="!hasLogin">
				<view class="empty-login-head">
					<text class="fa fa-user-circle user-circle"></text>
					<text class="userinfo-tips">请先登录账号</text>
				</view>

				<view class="login-button" @tap="onNavigateToMixin" data-url="login/login">登录</view>
				<!-- <button class="login-button" type="primary" open-type="getUserInfo" @getuserinfo="wxGetUserInfo">登录</button> -->
			</view>
			<!-- 已登陆 -->
			<view class="login" v-else>
				<view class="avatar-wrap">
					<image class="avatar-image" src="../../../static/60x60.png"></image>
				</view>
				<view class="userinfo-list">
					<view class="userinfo-item" v-for="item in userinfo.list">{{item.title}}</view>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="list-item" @tap="onNavigateToMixin" data-url="setting/setting">
				<view>通用设置</view>
				<view>
					<uni-icons type="forward"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue'

	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				userinfo: {
					list: [{
						label: '',
						title: '学生姓名'
					},{
						label: '学号:',
						title: '学号'
					}]
				},
				hasLogin: false, //是否登陆
			}
		},
		methods: {
			onClick(e) {
				console.log(e);
			},
			wxGetUserInfo(e) {
				//获取用户登录信息
				console.log(e)
			}
		}
	}
</script>

<style lang="scss" scoped>
.userinfo {
	padding: 30upx;
}
.list {
	margin-top: 30upx;
}
.list-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 24upx 30upx;
	font-size: 36upx;
	border: 1px solid #F5F5F5;
}
/* 未登录 */
.empty-login {
	.empty-login-head {
		display: flex;
		align-items: center;
	}
	.user-circle {
		font-size: 110upx;
		margin-right: 24upx;
	}
	.userinfo-tips {
		font-size: 36upx;
	}

	/* 登录按钮 */
	.login-button {
		margin-top: 25upx;
		background-color: #007AFF;
		color: white;
		text-align: center;
		line-height: 80upx;
		height: 80upx;
		width: 100%;
		font-size: 36upx;
		border-radius: 15upx;
	}
}
/* 已登陆 */
.login {
	background-color: rgb(177, 207, 241);
	box-shadow: #999999 0px 2px 6px 0px;
	border-radius: 15upx;
	display: flex;
	padding: 24upx;
	.avatar-image {
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
		margin-right: 24upx;
	}
	.userinfo-list {
		flex: 1;
	}
}
</style>
