<template>
	<view class="container">
		<!-- 测验成绩查询结果 -->
		<my-infomuation>
			<view class="p">课程编号：</view>
			<view class="p">课程名称：</view>
			<view class="p">学号：</view>
			<view class="p">姓名：</view>
			<view class="p">班级名称：</view>
			<view class="p">测验1：</view>
			<view class="p">测验2：</view>
			<view class="p">测验3：</view>
			<view class="p">平均分：</view>
			<view class="p">明细：</view>
		</my-infomuation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {}, //参数对象
				detail: {},
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
				this.detail = this.mock({
					'id|+1': 1,
					'xueqi': '2019-2020-1',
					'className': random.ctitle(5, 15),
					'type': random.integer(36, 72) + '学时',
					'score': random.integer(1, 4),
				});

				// let data = {
				// 	page: this.page,
				// 	limit: this.limit
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
@import "../../../../../common/scss/button.scss";
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
