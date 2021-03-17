<template>
	<view class="container">
		<my-infomuation class="block">
			<view class="p">学年学期：{{detail.id}}</view>
			<view class="p">考级课程：{{detail.id}}</view>
			<view class="p">考试时间：{{detail.id}}</view>
			<view class="p">总成绩：{{detail.id}}</view>
			<view class="p">准考证号：{{detail.id}}</view>
			<view class="p">成绩标志：{{detail.id}}</view>
			<view class="p">听力成绩：{{detail.id}}</view>
			<view class="p">阅读成绩：{{detail.id}}</view>
			<view class="p">综合成绩：{{detail.id}}</view>
			<view class="p">口语成绩：{{detail.id}}</view>
			<view class="p">备注：{{detail.id}}</view>
		</my-infomuation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {},
				detail: {}
			}
		},
		onLoad(options) {
			this.options = options;
			this.loadData();
		},
		methods: {
			loadData() {
				let random = this.$Mock.Random;
				this.detail = this.mock({
					'id|+1': 1,
					'className': random.ctitle(5, 15),
					'time': '2019-1-1',
					'score': random.integer(1, 4)
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
