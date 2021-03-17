<template>
	<view class="container">
		<!-- 全校课表查询结果 -->
		<view v-for="(item,index) in list" :key="index" @tap="onNavigateToMixin" data-url="menu/classTimetable/schoolClassTimetable/detail/detail" :data-id="item.id">
			<my-infomuation>
				<view class="p">学年学期：{{item.xueqi}}</view>
				<!-- <view class="p">开课编号：</view> -->
				<view class="p">课程名称：{{item.className}}</view><!--
				<view class="p">教学班名称：</view>
				<view class="p">排课人数：</view>
				<view class="p">上课人数：</view> -->
				<view class="p">授课教师：{{item.teacher}}</view><!--
				<view class="p">星期：</view>
				<view class="p">节次：</view>
				<view class="p">上课地点：</view>
				<view class="p">周次：</view>
				<view class="p">课序：</view>
				<view class="p">教学环节：</view>
				<view class="p">日期：</view>
				<view class="p">分组名：</view>
				<view class="p">授课内容简介：</view> -->
			</my-infomuation>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {}, //参数对象
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
						'xueqi': '2019-2020-1',
						'className': random.ctitle(5, 15),
						'type': random.integer(36, 72) + '学时',
						'score': random.integer(1, 4),
					}]
				}).list;

				// let data = {

				// }
				// try {
				// 	let res = await this.$get('', data);

				// }catch(e) {
				// 	console.log(e);
				// }
			}
		}
	}
</script>

<style lang="scss" scoped>
.container {
	padding-top: 30upx;
	box-sizing: border-box;
}
</style>
