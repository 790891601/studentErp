<template>
	<view class="container">
		<view class="userinfo">
			<!-- 未登录 -->
			<view class="empty-login" v-if="!hasLogin">
				<view class="empty-login-head">
					<text class="fa fa-user-circle user-circle"></text>
					<view class="userinfo-wrap">
						<button class="login-button" type="primary" open-type="getUserInfo" @getuserinfo="onLogin">点击登录</button>
						<!-- <view class="login-button" @tap="onNavigateToMixin" data-url="login/login">登录</view> -->
						<text class="userinfo-tips">登录后数据不丢失</text>
					</view>
				</view>
			</view>
			<!-- 已登陆 -->
			<view class="login" v-else>
				<view class="avatar-wrap">
					<!-- <text class="fa fa-user-circle user-circle"></text> -->
					<image class="avatar-image" src="../../../static/60x60.png"></image>
				</view>
				<view class="userinfo-list">
					<view class="userinfo-item" v-for="item in userinfo.list">
						<text class="label">{{item.label}}</text>
						<text>{{item.title}}</text>
					</view>
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
	import {mapActions,mapState} from 'vuex';
	import uniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue'

	export default {
		components: {
			uniIcons
		},
		computed: {
			...mapState(['hasLogin'])
		},
		data() {
			return {
				userinfo: {
					list: [{
						label: '姓名：',
						title: '陈奕迅'
					},{
						label: '学号：',
						title: '10010'
					},{
						label: '性别：',
						title: '男'
					},{
						label: '入学年份：',
						title: '1999'
					},{
						label: '院系名称：',
						title: '广州北大'
					},{
						label: '学制：',
						title: '5年'
					},{
						label: '专业：',
						title: '计算机'
					},{
						label: '班级：',
						title: '15级计算机'
					},{
						label: '所在校区：',
						title: '东南校区'
					},{
						label: '民族：',
						title: '汉'
					},{
						label: '联系电话：',
						title: '13528934290'
					},{
						label: '证件号码：',
						title: '440183100011291171'
					},{
						label: '证件类型：',
						title: '身份证'
					}]
				}
			}
		},
		methods: {
			...mapActions(['getUserToken']),
			async onLogin(e) {
				console.log(e);
				//获取用户登录信息
				let token = await this.getUserToken();
				console.log(token)
			}
		}
	}
</script>

<style lang="scss" scoped>
/* 未登录外层 */
.userinfo-wrap {
	margin-left: 20upx;
	display: flex;
	flex-direction: column;
	.login-button {
		font-size: 36upx;
		background-color: #fff;
		color: #333;
		margin: 0;
		padding: 0;
		text-align: left;
		line-height: 1.5;
		&::after {
			border: none;
		}
	}
	.userinfo-tips {
		color: #999;
		font-size: 28upx;
	}
}
.userinfo {
	padding: 0 0 30upx;
}
.list {
	background-color: #fff;
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
	padding: 50upx 24upx 30upx;
	background-color: #fff;
	.empty-login-head {
		display: flex;
		align-items: center;
	}
	.user-circle {
		font-size: 110upx;
		margin-right: 24upx;
		color: #e0e0e0;
	}
}
/* 已登陆 */
.login {
	padding: 50upx 24upx 30upx;
	background-color: #fff;
	box-shadow: #F5F5F5 0px 2px 6px 0px;
	border-radius: 15upx;
	display: flex;
	.avatar-image {
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
		margin-right: 24upx;
	}
	.userinfo-list {
		flex: 1;
	}
	.userinfo-item {
		margin-bottom: 26upx;
		.label {}
	}
}
</style>
