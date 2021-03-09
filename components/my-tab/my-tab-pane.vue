<template>
	<view :class="['my-tab-pane' + index]" v-show="active === index">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			index: {
				type: Number,
				default: 0
			},
			active: {
				type: Number,
				default: 0
			}
		}
	}
</script>

<style>
</style>
