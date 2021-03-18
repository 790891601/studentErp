<template>
	<view class="empty-container">
		<image src="/static/empty.png" mode="widthFix" style="width: 100%;"></image>
	</view>
</template>

<script>
	export default {
		name:"empty-view",
		data() {
			return {};
		}
	}
</script>

<style>
.image {
	width: 100%;
}
.empty-container {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}
</style>
