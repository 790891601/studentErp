<template>
	<view class="class-tasks">
		<!-- 上课任务 -->
		<my-infomuation>
			<view class="p">
				<text class="field">学年学期：</text>
				<my-picker class="selector" :ranges="schoolYear" :defaultValue="form.schoolYear.title" rangeKey="title" @change="onChange($event, 'schoolYear')"></my-picker>
			</view>
			<view class="p">
				<text class="field">课程大类：</text>
				<my-picker class="selector" :ranges="broadHeading" :defaultValue="form.broadHeading.title" rangeKey="title" @change="onChange($event, 'broadHeading')"></my-picker>
			</view>
			<view class="p">
				<text class="field">课程分类：</text>
				<my-picker class="selector" :ranges="courseCates" :defaultValue="form.courseCates.title" rangeKey="title" @change="onChange($event, 'courseCates')"></my-picker>
			</view>
			<view class="input-wrap">
				<text class="field">课程名称：</text>
				<my-input class="selector" v-model="form.className"></my-input>
			</view>
			<view class="buttons">
				<view class="button-view button-max" @tap="onNavigateToMixin" data-url="menu/classTasks/detail/detail">查询</view>
			</view>
		</my-infomuation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				schoolYear: [],
				broadHeading: [],
				courseCates: [],
				form: {
					schoolYear: {},
					broadHeading: {},
					courseCates: {},
					className: ''
				}
			}
		},
		onLoad() {
			this.loadData();
		},
		methods: {
			loadData() {
				let random = this.$Mock.Random;
				this.schoolYear = this.mock({
					'code': 0,
					'msg': '成功',
					'list|1-10': [{
						'id|+1': 1,
						'title': '2019-2020-1'
					}]
				}).list;
				this.broadHeading = this.mock({
					'code': 0,
					'msg': '成功',
					'list|1-10': [{
						'id|+1': 1,
						'title': random.ctitle(5, 10)
					}]
				}).list;
				this.courseCates = this.mock({
					'code': 0,
					'msg': '成功',
					'list|1-10': [{
						'id|+1': 1,
						'title': random.ctitle(5, 10)
					}]
				}).list;

				this.formatData();

				// let data = {
				// 	page: this.page,
				// 	limit: this.limit
				// }
				// this.$get('', data).then(res => {
				// 	console.log(res);
				// });
			},
			formatData() {
				//数据格式化
				this.$set(this.form, 'schoolYear', this.schoolYear[0]);
				this.$set(this.form, 'broadHeading', this.broadHeading[0]);
				this.$set(this.form, 'courseCates', this.courseCates[0]);
				console.log(this.form)
			},
			onChange(index, target) {
				this.$set(this.form, target, this[target][index]);
				console.log(this.form)
			},
			onSubmit() {
				console.log(this.form)
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../../common/scss/button.scss";
.f-36 {
	font-size: 32upx;
}
.p {
	.selector {
		width: 70%;
	}
}
.input-wrap {
	font-size: 32upx;
	overflow: hidden;
	align-items: center;
	display: flex;
	text {
		float: left;
	}
	.selector {
		float: left;
		width: 70%;
	}
}
.buttons {
	display: flex;
	justify-content: center;
	margin-top: 80upx;
}
</style>
