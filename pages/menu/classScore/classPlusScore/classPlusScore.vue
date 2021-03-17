<template>
	<view class="container">
		<!-- 课程加分成绩查询结果 -->
		<view v-for="(item, index) in list" :key="index" @tap="onNavigateToMixin" data-url="menu/classScore/classPlusScore/detail/detail" :data-id="item.id">
			<my-infomuation>
				<view class="p">学年学期：{{item.xueqi}}</view>
				<!-- <view class="p">课程编号：{{item.xueqi}}</view> -->
				<view class="p">课程名称：{{item.xueqi}}</view>
				<!-- <view class="p">课程大类：{{item.xueqi}}</view> -->
				<view class="p">修读方式：{{item.xueqi}}</view>
				<!-- <view class="p">考试性质：{{item.xueqi}}</view>
				<view class="p">成绩方式：{{item.xueqi}}</view>
				<view class="p">成绩标志：{{item.xueqi}}</view>
				<view class="p">变更前：{{item.xueqi}}</view>
				<view class="p">变更后：{{item.xueqi}}</view> -->
				<view class="p">审核状态：{{item.xueqi}}</view>
				<view class="p">审核结果：{{item.xueqi}}</view>
			</my-infomuation>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {},
				list: [],
				page: 1
			}
		},
		onLoad(options) {
			this.options = options;
			this.loadData();
		},
		methods: {
			async loadData() {
				let random = this.$Mock.Random;
				this.list = this.mock({
					'code': 0,
					'msg': '成功',
					'list|1-10': [{
						'id|+1': 1,
						'xueqi': random.date()
					}]
				}).list;

				// let data = {

				// }
				// try {
				// 	let res = await this.$get('', data);
				// }catch(e) {
				// 	console.log(e)
				// }
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../../../common/scss/button.scss";
.container {
	padding-top: 30upx;
}
.selector {
	width: 70%;
}
.buttons {
	margin-top: 60upx;
	display: flex;
	justify-content: center;
	padding-bottom: 70upx;
}
</style>
