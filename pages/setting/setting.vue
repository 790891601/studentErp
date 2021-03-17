<template>
	<view class="setting">
		<view class="list">
			<view class="list-item" @tap="onClearCache">
				<view>清理缓存</view>
				<view>
					<uni-icons type="forward"></uni-icons>
				</view>
			</view>
		</view>
		<view class="tips-block">若遇到使用问题，请清除缓存并重新进入小程序</view>

		<view class="list">
			<view class="list-item" @tap="onCallPhone">
				<view>联系电话</view>
				<view class="righ-item">
					<view class="tips-text">快速致电咨询</view>
					<uni-icons type="forward"></uni-icons>
				</view>
			</view>
			<view class="list-item" @tap="onNavigateToMixin" data-url="setting/setting">
				<view>服务协议</view>
				<view>
					<uni-icons type="forward"></uni-icons>
				</view>
			</view>
			<view class="list-item" @tap="onNavigateToMixin" data-url="setting/setting">
				<view>隐私政策</view>
				<view>
					<uni-icons type="forward"></uni-icons>
				</view>
			</view>
			<view class="list-item" @tap="onNavigateToMixin" data-url="setting/setting">
				<view>关于广东工业大学教务系统</view>
			</view>
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
			async onClearCache() {
				//清除缓存信息
				let isConfirm = await this.$utils.customShowModal({
					content: '是否要清除缓存？'
				});
				if(isConfirm) {
					this.$utils.clearStorageSync(this.$config.varNames.USER_TOKEN);
					this.$utils.customShowToast('清除成功');
				}
			},
			async onCallPhone() {
				//拨打电话
				let isConfirm = await this.$utils.customShowModal({
					content: '是否要拨打电话？'
				});
				if(isConfirm) {
					uni.makePhoneCall({
						phoneNumber: '15319234290',
						success: (res) => {
							console.log('拨打电话成功!', res)
						},
						fail: (res) => {
							console.log('拨打电话失败!', res)
						}
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.setting {
	background-color: rgb(241, 241, 241);
	min-height: 100vh;
	overflow: scroll;
}
.list {
	margin-top: 30upx;
	background-color: #fff;
	.list-item {
		border-top: 1px solid #ccd0d0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 24upx 30upx;
		font-size: 36upx;
		&:first-child {
			border-top: none;
		}
	}
	.righ-item {
		display: flex;
	}
	.tips-text {
		color: #abacb0;
	}
}
.tips-block {
	color: #999;
	padding: 24upx 30upx 10upx 30upx;
}
</style>
