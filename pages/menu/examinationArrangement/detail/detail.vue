<template>
	<view class="container">
		<!-- 考试安排查询结果 -->
		<view v-for="(item,index) in list" :key="index" @tap="onNavigateToMixin" data-url="menu/examinationArrangement/detail/detail/detail" :data-id="item.id">
			<my-infomuation>
				<view class="p">学号：</view>
				<view class="p">姓名：</view>
				<view class="p">考试课程：</view>
				<view class="p">学时：</view>
				<view class="p">试卷编号：</view>
				<view class="p">考试形式：</view>
				<view class="p">考试日期：</view>
				<view class="p">考试时间：</view>
				<view class="p">考试周次：</view>
				<view class="p">考试星期：</view>
				<view class="p">占用节次：</view>
				<view class="p">考试校区：</view>
				<view class="p">考试场地：</view>
				<view class="p">缓考：</view>
				<view class="p">座位号：</view>
				<view class="p">安排类型：</view>
				<view class="p">考试类型：</view>
			</my-infomuation>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				page: 1
			}
		},
		onLoad() {
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

				let data = {
					page: this.page,
					limit: this.limit
				}
				try {
					let res = await this.$get('', data);
				}catch(e) {
					console.log(e)
				}
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
