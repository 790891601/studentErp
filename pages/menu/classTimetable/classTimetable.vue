<template>
	<view class="container">
		<!-- 课表查询 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 我的课表 -->
				<my-infomuation>
					<view class="p">
						<text class="field">学期：</text>
						<my-picker class="selector" :ranges="semester" :defaultValue="form.semester.title" rangeKey="title" @change="onChange($event, 'semester')"></my-picker>
					</view>
					<view class="p">
						<text class="field">周次：</text>
						<my-picker class="selector" :ranges="week" :defaultValue="form.week.title" rangeKey="title" @change="onChange($event, 'week')"></my-picker>
					</view>
					<view class="buttons">
						<view class="button-view button-max" @tap="onNavigateToMixin" data-url="menu/classTimetable/myClassTimetable/myClassTimetable">查询</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 全校课表 -->
			<my-tab-pane :active="active" :index="1" class="pane2">
				<my-infomuation>
					<view class="p">
						<text class="field">学年学期：</text>
						<my-picker class="selector" :ranges="yearSemester" :defaultValue="form2.yearSemester.title" rangeKey="title" @change="onChange2($event, 'yearSemester')"></my-picker>
					</view>
					<view class="p">
						<text class="field">校区：</text>
						<my-picker class="selector" :ranges="campus" :defaultValue="form2.campus.title" rangeKey="title" @change="onChange2($event, 'campus')"></my-picker>
					</view>
					<view class="p">
						<text class="field">教学楼：</text>
						<my-picker class="selector" :ranges="teachingBuilding" :defaultValue="form2.teachingBuilding.title" rangeKey="title" @change="onChange2($event, 'teachingBuilding')"></my-picker>
					</view>
					<view class="p">
						<text class="field">功能区：</text>
						<my-picker class="selector" :ranges="functionArea" :defaultValue="form2.functionArea.title" rangeKey="title" @change="onChange2($event, 'functionArea')"></my-picker>
					</view>
					<view class="p">
						<text class="field">日期：</text>
						<my-picker class="selector" mode="date" :defaultValue="form2.date" @change="onChange2Value($event, 'date')"></my-picker>
					</view>
					<view class="p">
						<text class="field">计划类型：</text>
						<my-picker class="selector" :ranges="planType" :defaultValue="form2.planType.title" rangeKey="title" @change="onChange2($event, 'planType')"></my-picker>
					</view>
					<view class="p">
						<text class="field">周次：</text>
						<my-picker class="selector" :ranges="timesWeek" :defaultValue="form2.timesWeek.title" rangeKey="title" @change="onChange2($event, 'timesWeek')"></my-picker>
					</view>
					<view class="p">
						<text class="field">星期：</text>
						<my-picker class="selector" :ranges="week2" :defaultValue="form2.week2.title" rangeKey="title" @change="onChange2($event, 'week2')"></my-picker>
					</view>
					<view class="p">
						<text class="field">节次：</text>
						<my-input class="selector" v-model="form2.section"></my-input>
					</view>
					<view class="p">
						<text class="field">开课编号：</text>
						<my-input class="selector" v-model="form2.classNo"></my-input>
					</view>
					<view class="p">
						<text class="field">开课单位：</text>
						<my-picker class="selector" :ranges="courseUnit" :defaultValue="form2.courseUnit.title" rangeKey="title" @change="onChange2($event, 'courseUnit')"></my-picker>
					</view>
					<view class="p">
						<text class="field">系（教研室）：</text>
						<my-picker class="selector" :ranges="teachingSection" :defaultValue="form2.teachingSection.title" rangeKey="title" @change="onChange2($event, 'teachingSection')"></my-picker>
					</view>
					<view class="p">
						<text class="field">课程：</text>
						<my-picker class="selector" :ranges="course" :defaultValue="form2.course.title" rangeKey="title" @change="onChange2($event, 'course')"></my-picker>
					</view>
					<view class="p">
						<text class="field">教师：</text>
						<my-picker class="selector" :ranges="teacher" :defaultValue="form2.teacher.title" rangeKey="title" @change="onChange2($event, 'teacher')"></my-picker>
					</view>
					<view class="buttons">
						<view class="button-view button-max" @tap="onNavigateToMixin" data-url="menu/classTimetable/schoolClassTimetable/schoolClassTimetable">查询</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
		</my-tab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				head: [{
					title: '我的课表'
				},{
					title: '全校课表'
				}],
				active: 0,
				form: {
					semester: '',
					week: '',
				},
				form2: {
					date: '', //日期
					section: '', //节次
					classNo: '', //开课编号
				},
				semester: [],  //学期
				week: [],   //周次

				yearSemester: [], //学年学期
				campus: [], //校区
				teachingBuilding: [], //教学楼
				functionArea: [], //功能区
				planType: [], //计划类型
				timesWeek: [], //周次
				week2: [], //星期
				courseUnit: [], //开课单位
				teachingSection: [], //系(教研室)
				course: [], //课程
				teacher: [], //教师
			}
		},
		onLoad() {
			this.loadData();
		},
		methods: {
			loadData() {
				let random = this.$Mock.Random;
				this.semester = this.mock({
					'code': 0,
					'msg': '成功',
					'list|1-10': [{
						'id|+1': 1,
						'title': '学期' + random.cword('123456789'),
					}]
				}).list;
				this.week = this.mock({
					'code': 0,
					'msg': '成功',
					'list|1-10': [{
						'id|+1': 1,
						'title|+1': 1,
					}]
				}).list;

				this.yearSemester = this.mock({
					'code': 0,
					'msg': '成功',
					'list|1-10': [{
						'id|+1': 1,
						'title|+1': '第' + 1 + '周',
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
				//格式化数据

			},
			onChange(index, name) {
				this.$set(this.form, name, this[name][index]);
			},
			onChange2(index, name) {
				this.$set(this.form2, name, this[name][index]);
			},
			onChange2Value(value, name) {
				this.$set(this.form2, name, value);
			}
		}
	}
</script>

<style lang="scss">
@import "../../../common/scss/button.scss";
.selector {
	width: 80%;
}
.buttons {
	margin-top: 60upx;
	display: flex;
	justify-content: center;
	padding-bottom: 70upx;
}

.pane2 {
	.p {
		text {
			width: 60%;
		}
		.selector {
			width: 100%;
		}
	}
}
</style>
