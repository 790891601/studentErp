<template>
	<view class="container">
		<!-- 休退学申请 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 休退学申请 -->
				<my-infomuation>
					<view class="p">
						<text class="field">学年学期：</text>
						<my-picker class="selector" :ranges="year" rangeKey="title" :defaultValue="form.year.title" @change="onChange($event, 'year')"></my-picker>
					</view>
					<view class="p">
						<text class="field">上课学期：</text>
						<my-picker class="selector" :ranges="schoolTerm" rangeKey="title" :defaultValue="form.schoolTerm.title" @change="onChange($event, 'schoolTerm')"></my-picker>
					</view>
					<view class="p">
						<text class="field">课程编号：</text>
						<my-picker class="selector" :ranges="courseNo" rangeKey="title" :defaultValue="form.courseNo.title" @change="onChange($event, 'courseNo')"></my-picker>
					</view>
					<view class="p">
						<text class="field">课程名称：</text>
						<my-picker class="selector" :ranges="courseName" rangeKey="title" :defaultValue="form.courseName.title" @change="onChange($event, 'courseName')"></my-picker>
					</view>
					<view class="p">
						<text class="field">总学时：</text>
						<my-input class="selector" v-model="form.totalClassHours"></my-input>
					</view>
					<view class="p">
						<text class="field">学分：</text>
						<my-input class="selector" v-model="form.credit"></my-input>
					</view>
					<view class="p">
						<text class="field">修读方式：</text>
						<my-picker class="selector" :ranges="studyMethod" rangeKey="title" :defaultValue="form.studyMethod.title" @change="onChange($event, 'studyMethod')"></my-picker>
					</view>
					<view class="p">
						<text class="field">异动类型：</text>
						<my-picker class="selector" :ranges="changeType" rangeKey="title" :defaultValue="form.changeType.title" @change="onChange($event, 'changeType')"></my-picker>
					</view>
					<view class="p">
						<text class="field">异动原因：</text>
						<my-picker class="selector" :ranges="reasonsForChange" rangeKey="title" :defaultValue="form.reasonsForChange.title" @change="onChange($event, 'reasonsForChange')"></my-picker>
					</view>
					<view class="p">
						<text class="field">生效学期：</text>
						<my-picker class="selector" :ranges="effectiveSemester" rangeKey="title" :defaultValue="form.effectiveSemester.title" @change="onChange($event, 'effectiveSemester')"></my-picker>
					</view>
					<view class="p">
						<text class="field">异动说明：</text>
						<my-textarea class="selector" v-model="form.description"></my-textarea>
					</view>
					<view class="p">
						<text class="field">附件：</text>
						<my-upload></my-upload>
					</view>
					<view class="buttons">
						<view class="button-view button-max" @tap="onAddSubmit">增加</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 申请记录 -->
			<my-tab-pane :active="active" :index="1">
				<my-infomuation>
					<view class="p">申请时间：</view>
					<view class="p">异动类型：</view>
					<view class="p">异动明细：</view>
					<view class="p">异动说明：</view>
					<view class="p">审核状态：</view>
				</my-infomuation>
			</my-tab-pane>
		</my-tab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {},
				head: [{
					title: '休退学申请'
				},{
					title: '申请记录'
				}],
				form: {
					totalClassHours: '', //总学时
 					credit: '', //学分
					description: '', //异动说明
				},
				active: 0,
				year: [], //学年学期
				schoolTerm: [], //上课学期
				courseNo: [], //课程编号
				courseName: [], //课程名称
				studyMethod: [], //修读方式
				changeType: [], //异动类型
				reasonsForChange: [],//异动原因
				effectiveSemester: [], //生效学期
			}
		},
		onLoad(options) {
			this.options = options;
			this.loadData();
		},
		methods: {
			async loadData() {
				let random = this.$Mock.Random;
				this.year = this.schoolTerm = this.courseNo = this.courseName = this.studyMethod = this.changeType = this.reasonsForChange = this.effectiveSemester = this.mock({
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
			onAddSubmit() {
				//休退学申请

			},
			onChange(index, name) {
				this.$set(this.form, name, this[name][index]);
				console.log(this[name][index], this.form);
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../../../common/scss/button.scss";
.selector {
	width: 70%;
}
.p {
	justify-content: space-between;
	align-items: flex-start;
}
.buttons {
	margin-top: 60upx;
	display: flex;
	justify-content: center;
	padding-bottom: 70upx;
}
</style>
