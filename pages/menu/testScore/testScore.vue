<template>
	<view class="container">
		<!-- 测验成绩查询 -->
		<my-infomuation>
			<view class="p">
				<text class="field">学年学期：</text>
				<my-picker class="selector" :ranges="year" rangeKey="title" :defaultValue="form.year.title" @change="onChange($event, 'year')"></my-picker>
			</view>
			<view class="buttons">
				<view class="button-view button-max" @tap="onNavigateToMixin" data-url="menu/testScore/detail/detail">查询</view>
			</view>
		</my-infomuation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {},
				form: {},
				year: []
			}
		},
		onLoad(options) {
			this.options = options;
			this.loadData();
		},
		methods: {
			async loadData() {
				let random = this.$Mock.Random;
				this.year = this.examinationType = this.examinationCate = this.mock({
					'code': 0,
					'msg': '成功',
					'list|1-10': [{
						'id|+1': 1,
						'title': random.date()
					}]
				}).list;

				// let data = {

				// }
				// try {
				// 	let res = await this.$get('', data);
				// }catch(e) {
				// 	console.log(e)
				// }
			},
			onChange(index, name) {
				this.$set(this.form, name, this[name][index]);
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../../common/scss/button.scss";
.container {
	padding-top: 30upx;
}
.selector {
	width: 70%;
}
.p {
	justify-content: space-between;
}
.buttons {
	margin-top: 60upx;
	display: flex;
	justify-content: center;
	padding-bottom: 70upx;
}
</style>
