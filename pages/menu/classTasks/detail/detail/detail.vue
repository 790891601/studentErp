<template>
	<view class="container">
		<!-- 查看上课任务详情 -->
		<my-infomuation>
			<view class="p">课程编号：{{detail.no}}</view>
			<view class="p">课程名称：{{detail.no}}</view>
			<view class="p">教师名称：{{detail.no}}</view>
			<view class="p">上课人数：{{detail.no}}</view>
			<view class="p">授课教师：{{detail.no}}</view>
			<view class="p">计划类型：{{detail.no}}</view>
			<view class="p">计划学时：{{detail.no}}</view>
			<view class="p">开课学时：{{detail.no}}</view>
			<view class="p">学分：{{detail.no}}</view>
			<view class="p">修读方式：{{detail.no}}</view>
			<view class="p">课程大类：{{detail.no}}</view>
			<view class="p">考核方式：{{detail.no}}</view>
			<view class="p">课程分类：{{detail.no}}</view>
			<view class="p">选中方式：{{detail.no}}</view>
			<view class="p">开课编号：{{detail.no}}</view>
			<view class="p">免听：{{detail.no}}</view>
			<view class="p">网考号：{{detail.no}}</view>
			<view class="p">教学日历：{{detail.no}}</view>
			<view class="p">课程分组：{{detail.no}}</view>
		</my-infomuation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: {}
			}
		},
		onLoad() {
			this.loadData();
		},
		methods: {
			loadData() {
				let random = this.$Mock.Random;
				this.detail = this.mock({
					'id|+1': 1,
					'no': random.ctitle(5,10),
				});

				// let data = {
				// 	page: this.page,
				// 	limit: this.limit
				// }
				// this.$get('', data).then(res => {
				// 	console.log(res);
				// });
			}
		}
	}
</script>

<style>

</style>
