<template>
	<view class="add-options">
		<!-- 添加常用选项 -->
		<checkbox-group value="" @change="">
			<view class="module" v-for="(item, index) in module" :key="index">
				<view class="module-title">{{item.title}}</view>
				<view class="card-list">
					<view class="card-item" v-for="(card, index2) in item.children" :key="index2" @tap="onNavigateToMixin" :data-url="card.url">
						<view class="fa fa-2x card-icon" :class="[card.icon]"></view>
						<text class="card-text">{{card.title}}</text>
					</view>
				</view>
			</view>
		</checkbox-group>
	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				module: [{
					title: '信息查询',
					children: [{
						icon: 'fa-vcard',
						title: '学籍卡片',
						url: 'menu/studentStatus/studentStatus',
						checked: false
					},{
						icon: 'fa-calendar-check-o',
						title: '学习计划',
						url: 'menu/studyPlan/studyPlan',
						checked: false
					},{
						icon: 'fa-book',
						title: '上课任务',
						url: 'menu/classTasks/classTasks',
						checked: false
					},{
						icon: 'fa-calendar-o',
						title: '课表查询',
						url: 'menu/classTimetable/classTimetable',
						checked: false
					},{
						icon: 'fa-calendar-o',
						title: '班级课表',
						url: 'menu/classTimetableAll/classTimetableAll',
						checked: false
					},{
						icon: 'fa-mortar-board',
						title: '考级成绩',
						url: 'menu/levelExaminationScore/levelExaminationScore',
						checked: false
					},{
						icon: 'fa-mortar-board',
						title: '课程成绩',
						url: 'menu/classScore/classScore',
						checked: false
					},{
						icon: 'fa-bell',
						title: '学籍预警',
						url: 'menu/earlyWarningOfStudentStatus/earlyWarningOfStudentStatus',
						checked: false
					},{
						icon: 'fa-mortar-board',
						title: '体测成绩',
						url: 'menu/staminaTestScore/staminaTestScore',
						checked: false
					},{
						icon: 'fa-calendar',
						title: '培养方案查询',
						url: 'menu/trainingProgram/trainingProgram',
						checked: false
					},{
						icon: 'fa-calendar-o',
						title: '考试安排',
						url: 'menu/examinationArrangement/examinationArrangement',
						checked: false
					},{
						icon: 'fa-refresh',
						title: '操作日志',
						url: 'menu/operationLog/operationLog',
						checked: false
					},{
						icon: 'fa-mortar-board',
						title: '测验成绩',
						url: 'menu/testScore/testScore',
						checked: false
					},{
						icon: 'fa-sign-in',
						title: '缴费记录',
						url: 'menu/paymentRecord/paymentRecord',
						checked: false
					}]
				}, {
					title: '业务办理',
					children: [{
						icon: 'fa-vcard',
						title: '缓考申请',
						url: '',
						checked: false
					},{
						icon: 'fa-bookmark',
						title: '免听申请',
						url: '',
						checked: false
					},{
						icon: 'fa-bookmark-o',
						title: '免修申请',
						url: '',
						checked: false
					},{
						icon: 'fa-file',
						title: '休退学申请',
						url: '',
						checked: false
					},{
						icon: 'fa-file-text-o',
						title: '选订教材',
						url: '',
						checked: false
					},{
						icon: 'fa-bank',
						title: '教室借用申请',
						url: '',
						checked: false
					},{
						icon: 'fa-refresh',
						title: '成绩复核申请',
						url: '',
						checked: false
					},{
						icon: 'fa-male',
						title: '体测缓测申请',
						url: '',
						checked: false
					},{
						icon: 'fa-hand-stop-o',
						title: '体测免测申请',
						url: '',
						checked: false
					},{
						icon: 'fa-refresh',
						title: '成绩转换申请',
						url: '',
						checked: false
					},{
						icon: 'fa-address-card',
						title: '学生证补办申请',
						url: '',
						checked: false
					},{
						icon: 'fa-info-circle',
						title: '请假申请',
						url: '',
						checked: false
					}]
				}, {
					title: '学籍变动',
					children: [{
						icon: 'fa-calendar-plus-o',
						title: '信息变动申请',
						url: '',
						checked: false
					},{
						icon: 'fa-address-book',
						title: '学籍变动申请',
						url: '',
						checked: false
					}]
				}, {
					title: '创新项目',
					children: [{
						icon: 'fa-cloud',
						title: '创新学分申请',
						url: '',
						checked: false
					},{
						icon: 'fa-hand-stop-o',
						title: '课外课题申请',
						url: '',
						checked: false
					},{
						icon: 'fa-rmb',
						title: '个人报销申请',
						url: '',
						checked: false
					},{
						icon: 'fa-newspaper-o',
						title: '课题成果申报',
						url: '',
						checked: false
					},{
						icon: 'fa-newspaper-o',
						title: '课题结题申报',
						url: '',
						checked: false
					}]
				}, {
					title: '选课报名',
					children: [{
						icon: 'fa-book',
						title: '选课-任选',
						url: '',
						checked: false
					},{
						icon: 'fa-book',
						title: '选课-限选',
						url: '',
						checked: false
					},{
						icon: 'fa-book',
						title: '毕业选题',
						url: '',
						checked: false
					},{
						icon: 'fa-caret-square-o-up',
						title: '考级报名',
						url: '',
						checked: false
					},{
						icon: 'fa-pencil',
						title: '考试报名',
						url: '',
						checked: false
					},{
						icon: 'fa-male',
						title: '体测报名',
						url: '',
						checked: false
					},{
						icon: 'fa-mail-reply',
						title: '退课申请',
						url: '',
						checked: false
					}]
				}, {
					title: '评价信息',
					children: [{
						icon: 'fa-address-card',
						title: '教师评价',
						url: '',
						checked: false
					},{
						icon: 'fa-commenting',
						title: '课程评价',
						url: '',
						checked: false
					},{
						icon: 'fa-bank',
						title: '课堂评价',
						url: '',
						checked: false
					}, {
						icon: 'fa-tags',
						title: '问卷调查',
						url: '',
						checked: false
					}]
				}, {
					title: '评选信息',
					children: [{
						icon: 'fa-child',
						title: '优秀教师评选',
						url: '',
						checked: false
					}]
				}]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.card-icon {
	display: block;
}

.module-title {
	text-shadow: rgb(50, 145, 248) 0px 2px 6px;
	font-size: 36upx;
	padding: 30upx 0 30upx 6%;
}
.card-list {
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	align-items: center;
}
.card-item {
	width: 33.333333333%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 50upx;
	position: relative;
	.card-icon {
		margin-bottom: 12upx;
	}
}
</style>
