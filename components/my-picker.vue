<template>
	<picker class="selector" :mode="mode" :range="ranges" :value="defaultKey" :range-key="rangeKey" @change="onChange">
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
				type: [String,Number],
				default: 0
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
			},
			rangeKey: {
				type: String, //对象需要显示的key
				default: ''
			}
		},
		data() {
			return {};
		},
		methods: {
			onChange(e) {
				let value = e.detail.value
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
	border: 1px solid #d4d4d4;
}
.value {
	font-size: 32upx;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	padding: 0 24upx;
}
.selector {
	// min-width: 300upx;
	width: 100%;
}
</style>
