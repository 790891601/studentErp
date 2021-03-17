<template>
	<view class="info">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:"my-infomuation",
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
	background-color: white;
}
</style>
