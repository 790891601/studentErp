<template>
	<view class="container">
		<!-- 课程成绩查询结果 -->
		<view v-for="(item, index) in list" :key="index" @tap="onNavigateToMixin" data-url="menu/classScore/classScore/detail/detail" :data-id="item.id">
			<my-infomuation>
				<view class="p">学年学期：{{item.xueqi}}</view>
				<!-- <view class="p">学号：</view> -->
				<view class="p">姓名：{{item.nickName}}</view>
				<!-- <view class="p">课程编号：</view> -->
				<view class="p">课程名称：{{item.className}}</view>
				<view class="p">总成绩：{{item.totalScore}}</view>
				<!-- <view class="p">绩点：</view> -->
				<view class="p">学时：{{item.time}}</view>
				<view class="p">学分：{{item.score}}</view>
				<!-- <view class="p">课程大类：</view>
				<view class="p">课程分类：</view>
				<view class="p">修读方式：</view>
				<view class="p">考试性质：</view>
				<view class="p">成绩方式：</view>
				<view class="p">任务编号：</view>
				<view class="p">有效：</view>
				<view class="p">成绩标志：</view>
				<view class="p">提示：</view>
				<view class="p">备注：</view> -->
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
						'title': random.date()
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
.class-score {
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
