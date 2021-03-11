<template>
	<view class="my-tab">
		<view class="tab-head">
			<view class="tab-head-item"
				  :style="{width: columnWidth}"
				  :class="[index === active ? 'tab-head-active' : '']"
				  v-for="(item,index) in head"
				  :key="index"
				  @tap="onClick(index)">
				{{item.title}}
			</view>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			head: {
				tpye: Array,
				default: () => []
			},
			active: {
				type: Number,
				default: 0
			},
			column: {
				type: Number,
				default: 3
			}
		},
		created() {
			//默认一行三列
			let blockWidth = 100 / this.column;

			this.columnWidth = blockWidth + '%';
		},
		data() {
			return {
				columnWidth: '33.333333333%'
			}
		},
		methods: {
			onClick(index) {
				//点击索引
				if(index === this.active) {
					return false;
				}
				this.$emit('update:active', index);
			}
		}
	}
</script>

<style lang="scss" scoped>
.tab-head {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding-top: 44upx;
}
.tab-head-item {
	text-align: center;
	font-size: 36upx;
	color: rgba(0,0,0,.62);
	margin-bottom: 48upx;
}
.tab-head-active {
	text-shadow: rgb(50, 145, 248) 0px 2px 6px;
}
</style>
