<template>
	<view class="add-options">
		<!-- 添加常用选项 -->
		<view class="module" v-for="(item, index) in menuSourceData" :key="index">
			<view class="module-title">{{item.title}}</view>
			<view class="card-list">
				<view class="card-item" v-for="(card, index2) in item.children" :key="index2" @tap="onNavigateToMixin" :data-url="card.url">
					<view class="fa fa-2x card-icon" :class="[card.icon]"></view>
					<text class="card-text">{{card.title}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import menuSourceData from '@/common/data/menuSourceData.js'
	export default {
		components: {
		},
		data() {
			return {
				menuSourceData: menuSourceData
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.card-icon {
	display: block;
}

.module-title {
	text-shadow: rgb(50, 145, 248) 0px 2px 6px;
	font-size: 36upx;
	padding: 30upx 0 30upx 6%;
}
.card-list {
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	align-items: center;
}
.card-item {
	width: 33.333333333%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 50upx;
	position: relative;
	.card-icon {
		margin-bottom: 12upx;
	}
}
</style>
