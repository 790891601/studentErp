<template>
	<view class="input-block">
		<input class="input" type="text" :placeholder="placeholder" :value="value" @input="onInput" />
		<uni-icons class="clear-icon" type="clear" v-show="value.length" @tap="onClear"></uni-icons>
	</view>
</template>

<script>
	export default {
		name:"my-input",
		inheritAttrs: false,
		model: {
			prop: 'value',
			event: 'input'
		},
		props: {
			value: {
				type: String
			},
			placeholder: {
				type: String
			}
		},
		data() {
			return {

			};
		},
		methods: {
			onInput(e) {
				this.$emit('input', e.detail.value);
			},
			onClear() {
				console.log('clear')
				this.$emit('input', '');
			}
		}
	}
</script>

<style lang="scss" scoped>
.input-block {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
	padding: 8upx 80upx 8upx 25upx;
	border-radius: 10upx;
	position: relative;
	.input {
		flex: 1 auto;
	}
	.clear-icon {
		position: absolute;
		right: 15upx;
		top:50%;
		transform: translateY(-50%);
	}
}
</style>
