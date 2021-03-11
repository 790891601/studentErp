<template>
	<view class="info" :style="{ backgroundColor: bgcolor }">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:"my-infomuation",
		props: {
			bgcolor: {
				type: String,
				default: 'rgb(177, 207, 241)'
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
.info {
	box-shadow: #F5F5F5 0px 2px 6px 0px;
	border-radius: 18upx;
	margin: 30upx 24upx;
	padding: 32upx 50upx;
}
</style>
