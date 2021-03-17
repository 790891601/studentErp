<template>
	<view class="container">
		<!-- 培养计划查询 -->
		<my-infomuation>
			<view class="p">
				<text class="field">年级：</text>
				<my-picker class="selector" :ranges="grade" rangeKey="title" :defaultValue="form.grade.title" @change="onChange($event, 'grade')"></my-picker>
			</view>
			<view class="p">
				<text class="field">院系名称：</text>
				<my-picker class="selector" :ranges="department" rangeKey="title" :defaultValue="form.department.title" @change="onChange($event, 'department')"></my-picker>
			</view>
			<view class="p">
				<text class="field">专业名称：</text>
				<my-picker class="selector" :ranges="major" rangeKey="title" :defaultValue="form.major.title" @change="onChange($event, 'major')"></my-picker>
			</view>
			<view class="p">
				<text class="field">计划类型：</text>
				<my-picker class="selector" :ranges="planType" rangeKey="title" :defaultValue="form.planType.title" @change="onChange($event, 'planType')"></my-picker>
			</view>
			<view class="p">
				<text class="field">版本名称：</text>
				<my-picker class="selector" :ranges="versionName" rangeKey="title" :defaultValue="form.versionName.title" @change="onChange($event, 'versionName')"></my-picker>
			</view>
			<view class="buttons">
				<view class="button-view button-max" @tap="onNavigateToMixin" data-url="menu/trainingProgram/detail/detail">查询</view>
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
				grade: [], //年级
				department: [], //院系
				major: [], //专业
				planType: [], //计划类型
				versionName: [], //版本名称
			}
		},
		onLoad(options) {
			this.options = options;
			this.loadData();
		},
		methods: {
			async loadData() {
				let random = this.$Mock.Random;
				this.department = this.major = this.planType = this.versionName = this.grade = this.mock({
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
