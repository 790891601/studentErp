<template>
	<view class="container">
		<my-empty-tips></my-empty-tips>
	</view>
</template>

<script>
	import myEmptyTips from '@/components/my-empty-tips.vue'
	export default {
		components: {
			myEmptyTips
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.container {
	padding-top: 160upx;
}
</style>
