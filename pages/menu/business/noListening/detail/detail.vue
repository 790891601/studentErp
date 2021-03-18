<template>
	<view>
		<my-infomuation>
			<view class="p">开课学期：{{detail.xueqi}}</view>
			<view class="p">学号：{{detail.xueqi}}</view>
			<view class="p">姓名：{{detail.xueqi}}</view>
			<view class="p">免听课程：{{detail.xueqi}}</view>
			<view class="p">总学时：{{detail.xueqi}}</view>
			<view class="p">教学班：{{detail.xueqi}}</view>
			<view class="p">申请时间：{{detail.xueqi}}</view>
			<view class="p">申请原因：{{detail.xueqi}}</view>
			<view class="p">审核状态：{{detail.xueqi}}</view>
			<view class="p">审核结果：{{detail.xueqi}}</view>
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
			async loadData() {
				let random = this.$Mock.Random;
				this.detail = this.mock({
					'id|+1': 1,
					'xueqi': random.ctitle(5,10),
				});

				let data = {
					page: this.page,
					limit: this.limit
				}
				try {
					let res = await this.$get('', data);
				}catch(e) {
					console.log(e);
				}
			}
		}
	}
</script>

<style>

</style>
