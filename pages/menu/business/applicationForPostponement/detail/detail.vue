<template>
	<view class="container">
		<!-- 查看缓考记录 -->
		<my-infomuation>
			<view class="p">开课学期：{{detail.no}}</view>
			<view class="p">学号：{{detail.no}}</view>
			<view class="p">姓名：{{detail.no}}</view>
			<view class="p">课程名称：{{detail.no}}</view>
			<view class="p">总学时：{{detail.no}}</view>
			<view class="p">开课院系：{{detail.no}}</view>
			<view class="p">认定教师：{{detail.no}}</view>
			<view class="p">申请时间：{{detail.no}}</view>
			<view class="p">申请原因：{{detail.no}}</view>
			<view class="p">审核状态：{{detail.no}}</view>
			<view class="p">审核结果：{{detail.no}}</view>
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
					'no': random.ctitle(5,10),
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
