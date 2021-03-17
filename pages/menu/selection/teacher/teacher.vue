<template>
	<view class="container">
		<my-infomuation>
			<view class="tips">
				<view class="tips-head">提示</view>
				<view class="tips-content">当前学年学期未安排优秀教师评选！</view>
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

		}
	}
</script>

<style lang="scss" scoped>
.tips {
	.tips-head {
		border-bottom: 1px solid #000;
		font-size: 40upx;
		text-align: center;
		line-height: 1.5;
	}
	.tips-content {
		text-align: center;
		font-size: 32upx;
		padding: 25upx 0;
	}
}
</style>
