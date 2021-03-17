<template>
	<view class="container">
		<my-infomuation v-for="(item, index) in planList" :key="index">
			<view class="p">计划编号：{{item.no}}</view>
			<view class="p">年级：{{item.class}}</view>
			<view class="p">适用对象：{{item.target}}</view>
			<view class="p">计划类型：{{item.plan}}</view>
			<view class="p">
				<text class="flex-none">模块方向选择：</text>
				<my-picker class="selector" :ranges="item.fangxiang" rangeKey="title" :defaultValue="item.selectFangXiang.title" @change="onChange($event, index)"></my-picker>
			</view>
			<view class="p">备注：{{item.comment}}</view>
			<view class="buttons">
				<view class="button-view" @tap="onNavigateToMixin" data-url="menu/studyPlan/preExamination/preExamination">预审</view>
				<view class="button-view2" @tap="onNavigateToMixin" data-url="menu/studyPlan/detail/detail">查看</view>
			</view>
		</my-infomuation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				planList: [],
				page: 1,
				limit: 10
			}
		},
		onLoad() {
			this.loadData();
		},
		methods: {
			loadData() {
				let random = this.$Mock.Random;
				let data = this.mock({
					'code': 0,
					'msg': '成功',
					'list|1-10': [{
						'id|+1': 1,
						'no': random.increment(20191102),
						'class': '2019',
						'target': random.ctitle(1, 15),
						'plan': random.ctitle(4),
						'fangxiang|2-3': [{
							'id|+1': 1,
							'title': random.ctitle(4, 5)
						}],
						'comment': random.ctitle(1,15),
					}]
				}).list;

				this.planList = this.formatData(data);


				// let data = {
				// 	page: this.page,
				// 	limit: this.limit
				// }
				// this.$get('', data).then(res => {
				// 	console.log(res);
				// });
			},
			formatData(data) {
				for(let i = 0, len = data.length; i < len; i++) {
					if(data[i].fangxiang && data[i].fangxiang.length) {
						data[i].selectFangXiang = data[i].fangxiang[0];
					}
				}
				return data;
			},
			onChange(event, index) {
				let planTarget = this.planList[index],
					fangxiangTarget = planTarget.fangxiang[event];
				this.$set(this.planList[index], 'selectFangXiang', fangxiangTarget)
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../../common/scss/button.scss";
.buttons {
	margin-top: 50upx;
	display: flex;
	justify-content: space-between;
}
.selector {
	flex: 1 auto;
}
</style>
