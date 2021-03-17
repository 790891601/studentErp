<template>
	<view class="container">
		<!-- 查看学习计划 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 培养计划 -->
				<view v-for="(item,index) in list" :key="index" @tap="onNavigateToMixin" data-url="menu/studyPlan/detail/detail/detail" :data-id="item.id">
					<my-infomuation >
						<view class="p">开设学期：{{item.xueqi}}</view>
						<!-- <view class="p">课程编号：</view> -->
						<view class="p">课程名称：{{item.className}}</view>
						<!-- <view class="p">课程英文名称：</view>
						<view class="p">课程平台：</view>
						<view class="p">课程大类：</view>
						<view class="p">课程分类：</view> -->
						<view class="p">学分：{{item.score}}</view>
						<view class="p">总学时/类型：{{item.type}}</view>
						<!-- <view class="p">成绩方式：</view>
						<view class="p">考核方式：</view>
						<view class="p">修读方式：</view>
						<view class="p">模块方向：</view> -->
					</my-infomuation>
				</view>
			</my-tab-pane>
			<!-- 培养要求 -->
			<my-tab-pane :active="active" :index="1">
				<rich-text :nodes="nodes"></rich-text>
			</my-tab-pane>
		</my-tab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				head: [{
					title: '培养任务'
				},{
					title: '培养要求'
				}],
				active: 0,
				list: [],
				nodes: '<p>培养要求</p>'
			}
		},
		onLoad() {
			this.loadData();
		},
		methods: {
			loadData() {
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
