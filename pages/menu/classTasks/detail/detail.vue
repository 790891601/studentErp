<template>
	<view class="container">
		<!-- 查询上课任务列表 -->
		<empty-view v-if="!list.length"></empty-view>
		<z-paging ref="paging" @query="queryList" :list.sync="list">
			<view>
				<view v-for="(item,index) in list" :key="index" @tap="onNavigateToMixin" data-url="menu/classTasks/detail/detail/detail" :data-id="item.id">
					<my-infomuation>
						<!-- <view class="p">课程编号：</view> -->
						<view class="p">课程名称：{{item.className}}</view>
						<!-- <view class="p">教师名称：</view>
						<view class="p">上课人数：</view>
						<view class="p">授课教师：</view> -->
						<!-- <view class="p">计划类型：</view>
						<view class="p">计划学时：</view> -->
						<view class="p">开课学时：{{item.type}}</view>
						<view class="p">学分：{{item.score}}</view>
						<view class="p">修读方式：{{item.bixiu}}</view>
						<!-- <view class="p">课程大类：</view>
						<view class="p">考核方式：</view>
						<view class="p">课程分类：</view>
						<view class="p">选中方式：</view>
						<view class="p">开课编号：</view>
						<view class="p">免听：</view>
						<view class="p">网考号：</view>
						<view class="p">教学日历：</view>
						<view class="p">课程分组：</view> -->
					</my-infomuation>
				</view>
			</view>
		</z-paging>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {},
				list: []
			}
		},
		onLoad(options) {
			this.options = options;
			this.loadData();
		},
		methods: {
			async queryList(pageNo, pageSize) {
				let random = this.$Mock.Random;
				this.$refs.paging.addData(this.mock({
					'code': 0,
					'msg': '成功',
					'list|15': [{
						'id|+1': 1,
						'className': random.ctitle(5, 15),
						'type': random.integer(36, 72) + '学时',
						'score': random.integer(1, 4),
						'bixiu': '必修'
					}]
				}).list);

				// try {
				// 	let data = {
				// 		pageNum: pageNo,
				// 		pageSize: pageSize
				// 	}
				// 	let res = await this.$get('', data);
				// 	this.$refs.paging.addData(res.records);
				// }catch(e) {
				// 	console.log(e);
				// }
			},
			loadData() {
				let random = this.$Mock.Random;
				setTimeout(() => {
					this.list = this.mock({
						'code': 0,
						'msg': '成功',
						'list|10': [{
							'id|+1': 1,
							'className': random.ctitle(5, 15),
							'type': random.integer(36, 72) + '学时',
							'score': random.integer(1, 4),
							'bixiu': '必修'
						}]
					}).list;
				}, 3000)

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

<style scoped>
.container {
	height: 100%;
}
</style>
