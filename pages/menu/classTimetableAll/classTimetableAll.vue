<template>
	<view class="container">
		<!-- 班级课表 -->
		<my-infomuation>
			<view class="p">
				<text class="field">学年学期：</text>
				<my-picker class="selector" :ranges="yearSemester" rangeKey="title" :defaultValue="form.yearSemester.title" @change="onChange($event, 'yearSemester')"></my-picker>
			</view>
			<view class="p">
				<text class="field">院系：</text>
				<my-picker class="selector" :ranges="department" rangeKey="title" :defaultValue="form.department.title" @change="onChange($event, 'department')"></my-picker>
			</view>
			<view class="p">
				<text class="field">周次：</text>
				<my-picker class="selector" :ranges="timesWeek" rangeKey="title" :defaultValue="form.timesWeek.title" @change="onChange($event, 'timesWeek')"></my-picker>
			</view>
			<view class="p">
				<text class="field">专业：</text>
				<my-picker class="selector" :ranges="major" rangeKey="title" :defaultValue="form.major.title" @change="onChange($event, 'major')"></my-picker>
			</view>
			<view class="p">
				<text class="field">年级：</text>
				<my-picker class="selector" :ranges="year" rangeKey="title" :defaultValue="form.year.title" @change="onChange($event, 'year')"></my-picker>
			</view>
			<view class="p">
				<text class="field">班级：</text>
				<my-picker class="selector" :ranges="className" rangeKey="title" :defaultValue="form.className.title" @change="onChange($event, 'className')"></my-picker>
			</view>
			<view class="buttons">
				<view class="button-view button-max" @tap="onNavigateToMixin" data-url="menu/classTimetableAll/classTimetableAllDetail/classTimetableAllDetail">查询</view>
			</view>
		</my-infomuation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {}, //参数对象
				form: {},
				yearSemester: [], //学年学期
				department: [], //院系
				timesWeek: [], //周次
				major: [], //专业
				year: [], //年级
				className: [], //班级
			}
		},
		onLoad(options) {
			this.options = options;
			this.loadData();
		},
		methods: {
			async loadData() {
				let data = {

				}
				try {
					let res = await this.$get('', data);
				}catch(e) {
					console.log(e);
				}
			},
			onChange(e, name) {
				this.$set(this.form, name, this[name][e]);
			},
			onSubmit() {

			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../../common/scss/button.scss";
.container {
	padding-top: 30upx;
	box-sizing: border-box;
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
.p {
	justify-content: space-between;
}
</style>
