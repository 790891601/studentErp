<template>
	<picker class="selector" :mode="mode" :range="ranges" :value="defaultKey" @change="onChange">
		<view class="select">
			<view class="value">{{defaultValue}}</view>
			<uni-icons type="arrowdown"></uni-icons>
		</view>
	</picker>
</template>

<script>
	export default {
		name:"my-picker",
		props: {
			defaultKey: {
				type: [String,Number]
			},
			defaultValue: {
				type: String,
				default: ''
			},
			ranges: {
				type: [Array,Object]
			},
			mode: {
				type: String,
				default: 'selector'
			}
		},
		data() {
			return {};
		},
		methods: {
			onChange(e) {
				console.log(e)
				let value = e.detail.value
				this.$emit('update:defaultValue', value);
				this.$emit('change', value);
			}
		}
	}
</script>

<style lang="scss" scoped>
.select {
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8upx;
	border-radius: 10upx;
}
.selector {
	min-width: 150upx;
}
</style>
