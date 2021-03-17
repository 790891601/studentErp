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
					<view class="fa fa-2x menu-icon" :class="[item.icon]"></view>
					<view class="menu-text">{{item.title}}</view>
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
	import menuSourceData from '@/common/data/menuSourceData.js'

	export default {
		computed: {
			...mapState(['systemInfo', 'selectedMenu'])
		},
		onShow() {
			let newMenu = []; //菜单扁平化
			this.menuSourceData.map(menu => {
				menu.children.map(item => {
					if(this.selectedMenu.indexOf(item.name) > -1) {
						newMenu.push(item);
					}
				});
			});

			this.menu = newMenu;
		},
		onLoad() {
			this.loadData();
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
				menu: [], //菜单
				menuSourceData: menuSourceData
			}
		},
		onShareAppMessage() {
			return {
				title: '分享标题',
				path: '/pages/tabBar/home/home'
			}
		},
		methods: {
			async loadData() {
				//请求首页数据
				let data = {

				}
				try {
					let home = await this.$get('home', data);
				}catch(err) {
					console.log(err);
				}
			},
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
	margin: 30upx 24upx 50upx;
	box-shadow: #F5F5F5 0px 2px 6px 0px;
	border: 1px solid #ececec;
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
	justify-content: center;
	text-align: center;
	margin-bottom: 50upx;
	.menu-icon {
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
