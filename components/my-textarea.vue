<template>
	<view class="input-block">
		<textarea class="input" :placeholder="placeholder" @input="onInput" confirm-type="done" :value="value"></textarea>
		<uni-icons class="clear-icon" type="clear" v-show="value.length" @tap="onClear"></uni-icons>
	</view>
</template>

<script>
	export default {
		name:"my-textarea",
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
	padding: 16upx 80upx 16upx 25upx;
	border-radius: 10upx;
	position: relative;
	border: 1px solid #d4d4d4;
	height: 150upx;
	.input {
		font-size: 32upx;
		flex: 1 auto;
		height: 100%;
	}
	.clear-icon {
		position: absolute;
		right: 15upx;
		top:50%;
		transform: translateY(-50%);
	}
}
</style>
