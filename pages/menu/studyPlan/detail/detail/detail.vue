<template>
	<view class="container">
		<!-- 查看培养计划 -->
		<my-infomuation>
			<view class="p">开设学期：{{detail.xueqi}}</view>
			<view class="p">课程编号：{{detail.no}}</view>
			<view class="p">课程名称：{{detail.className}}</view>
			<view class="p">课程英文名称：{{detail.englishClassName}}</view>
			<view class="p">课程平台：{{detail.platform}}</view>
			<view class="p">课程大类：{{detail.parentCate}}</view>
			<view class="p">课程分类：{{detail.cate}}</view>
			<view class="p">学分：{{detail.score}}</view>
			<view class="p">总学时/类型：{{detail.type}}</view>
			<view class="p">成绩方式：{{detail.scoreType}}</view>
			<view class="p">考核方式：{{detail.examination}}</view>
			<view class="p">修读方式：{{detail.studyMethod}}</view>
			<view class="p">模块方向：{{detail.module}}</view>
		</my-infomuation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: {}, //培养计划详情
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
					'xueqi': '2019-2020-1',
					'className': random.ctitle(5, 15),
					'type': random.integer(36, 72) + '学时',
					'score': random.integer(1, 4),
					'no': random.id(),
					'englishClassName': random.title(5,15),
					'platform': random.title(5,15),
					'parentCate': random.title(1,5),
					'cate': random.title(1,5),
					'scoreType': random.title(1,5),
					'examination': '考查',
					'studyMethod': '必修',
					'module': '模块方向一'
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

<style lang="scss" scoped>
.container {
	padding-top: 30upx;
}
</style>
