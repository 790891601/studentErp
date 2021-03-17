<template>
	<view class="container">
		<!-- 考级成绩 -->
		<view v-for="(item,index) in list" :key="index" @tap="onNavigateToMixin" data-url="menu/levelExaminationScore/detail/detail" :data-id="item.id">
			<my-infomuation class="block">
				<view class="p">学年学期：{{item.className}}</view>
				<view class="p">考级课程：{{item.className}}</view>
				<view class="p">考试时间：{{item.time}}</view>
				<view class="p">总成绩：{{item.score}}</view><!--
				<view class="p">准考证号：</view>
				<view class="p">成绩标志：</view>
				<view class="p">听力成绩：</view>
				<view class="p">阅读成绩：</view>
				<view class="p">综合成绩：</view>
				<view class="p">口语成绩：</view>
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
			loadData() {
				let random = this.$Mock.Random;
				this.list = this.mock({
					'code': 0,
					'msg': '成功',
					'list|1-10': [{
						'id|+1': 1,
						'className': random.ctitle(5, 15),
						'time': '2019-1-1',
						'score': random.integer(1, 4)
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

<style lang="scss" scoped>
.block {
	margin-top: 50upx;
}
</style>
