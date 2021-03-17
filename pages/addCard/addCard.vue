<template>
	<view class="add-options">
		<view class="add-head">
			<view class="done-button" @tap="onDone">完成</view>
		</view>
		<!-- 添加常用选项 -->
		<checkbox-group @change="onCheckboxGroup">
			<view class="module" v-for="(item, index) in menu" :key="index">
				<view class="module-title">{{item.title}}</view>
				<view class="card-list">
					<view class="card-item" v-for="(card, index2) in item.children" :key="index2">
						<view class="fa fa-2x card-icon" :class="[card.icon]"></view>
						<text class="card-text">{{card.title}}</text>
						<checkbox name="card" color="#528FFB" class="card-checkbox" :value="card.name" :checked="card.checked"></checkbox>
					</view>
				</view>
			</view>
		</checkbox-group>
	</view>
</template>

<script>
	import {mapState, mapMutations} from 'vuex';
	import menuSourceData from '@/common/data/menuSourceData.js'

	export default {
		components: {
		},
		computed: {
			...mapState(['selectedMenu'])
		},
		onShow() {
			//初始化菜单
			this.checkMenuName = this.selectedMenu;
			
			this.menu = menuSourceData.map(menu => {
				menu.children = menu.children.map(item => {
					if(this.selectedMenu.indexOf(item.name) > -1) item.checked = true;
					return item;
				});
				return menu;
			})
		},
		data() {
			return {
				checkMenuName: [], //选中列表
				menu: [], //菜单
				menuSourceData: menuSourceData
			}
		},
		methods: {
			...mapMutations(['setselectedMenu']),
			onDone() {
				//完成
				//存储本地的数据
				this.$utils.setStorageSync(this.$config.varNames.MENU, this.checkMenuName);
				this.setselectedMenu(this.checkMenuName);

				uni.switchTab({
					url: '/pages/tabBar/home/home'
				})
			},
			onCheckboxGroup(e) {
				this.checkMenuName = e.detail.value;
			}
		}
	}
</script>

<style lang="scss" scoped>
.add-options {
	padding-top: 124upx;
}
.add-head {
	display: flex;
	justify-content: flex-end;
	padding: 24upx 0;
	width: 100%;
	background-color: #fff;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 11;
}
.done-button {
	margin-right: 20upx;
	width: 168upx;
	height: 76upx;
	line-height: 76upx;
	font-size: 32upx;
	border-radius: 12upx;
	text-align: center;
	background-color: rgb(39, 177, 72);
	color: white;
}
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
	.card-check {
	}
	.card-checkbox {
		// transform: scale(0.75);

		position: absolute;
		right: 0;
		top: 0;
		transform: translateY(-10%);
	}
}
</style>
