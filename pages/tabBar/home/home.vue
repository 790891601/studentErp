<template>
	<view class="uni-container">
		<!-- 轮播图容器 -->
		<view class="swiper-container">
			<swiper
				class="swiper"
				:style="{height: swiperImageHeight[swiperCurrent] + 'px'}"
				:indicator-dots="swiperConfig.indicatorDots"
				:autoplay="swiperConfig.autoplay"
				:interval="swiperConfig.interval"
				:duration="swiperConfig.duration"
				@change="onSwiperChange">
				<swiper-item v-for="(item,index) in swiperImages"
							:key="index">
					<image :src="item.src" @load="onSwiperImageLoad($event, index)" class="swiper-image" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 通知容器 -->
		<view class="notify-container">
			<view class="notify-head">
				<!-- 通知头部 -->
				<image src="/static/notify.png" style="width: 48upx;height: 48upx;"></image>
				<text class="notify-head-title">公告通知</text>
			</view>
			<view class="notify-content">
				<!-- 通知的内容 -->
				
			</view>
		</view>
		<!-- 菜单列表 -->
		<view class="menu-container">
			<view class="menu-list">
				<view class="menu-item" v-for="item in menu" @tap="onNavigateToMixin" :data-url="item.url">
					<image class="menu-icon" :src="item.icon"></image>
					<view class="menu-text">{{item.text}}</view>
				</view>
				<view class="menu-item" @tap="onNavigateToMixin" data-url="addCard/addCard">
					<view class="menu-add"></view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		computed: {
			...mapState(['systemInfo'])
		},
		data() {
			return {
				list: [],
				swiperConfig: {
					indicatorDots: true,
					autoplay: true,
					interval: 3000,
					duration: 500
				},
				swiperCurrent: 0, //当前项
				swiperImageHeight: [0], //高度数组
				swiperImages: [{
					src: '/static/swiper.jpeg'
				},{
					src: '/static/swiper.jpeg'
				}],
				menu: [{
					icon: '/static/60x60.png',
					text: '学籍卡片',
					url: 'tabBar/user/user'
				},{
					icon: '/static/60x60.png',
					text: '学籍卡片'
				},{
					icon: '/static/60x60.png',
					text: '学籍卡片'
				},{
					icon: '/static/60x60.png',
					text: '学籍卡片'
				}]
			}
		},
		onShareAppMessage() {
			return {
				title: '分享标题',
				path: '/pages/tabBar/home/home'
			}
		},
		methods: {
			onSwiperChange(e) {
				this.swiperCurrent = e.detail.current
			},
			onSwiperImageLoad(e, index) {
				//求轮播图的高度
				let {windowWidth} = this.systemInfo,
					swiperWidth = e.detail.width,
					swiperHeight = e.detail.height;

				let scale = swiperWidth / swiperHeight;
				let height = windowWidth / scale;

				this.swiperImageHeight[index] = height;
			}
		}
	}
</script>

<style lang="scss" scoped>
.swiper {
	width: 100%;
}
.swiper-image {
	width: 100%;
}
.notify-container {
	margin: 30upx 24upx;
	box-shadow: #999 0px 2px 6px 0px;
	border-radius: 18upx;
	padding: 20upx 30upx;
	.notify-head-title {
		padding-left: 20upx;
	}
}
.menu-container {
}
.menu-list {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
}
.menu-item {
	width: 33.333333333%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 50upx;
	.menu-icon {
		width: 60upx;
		height: 60upx;
		margin-bottom: 12upx;
	}
	.menu-text {
	}
	.menu-add {
		width: 102upx;
		height: 102upx;
		background-color: #F5F5F5;
		position: relative;
		border-radius: 15upx;
		&::before {
			content: "+";
			font-size: 48upx;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}
	}
}
</style>
