module.exports = [{
	title: '信息查询',
	children: [{
		name: 'studentStatus',
		icon: 'fa-vcard',
		title: '学籍卡片',
		url: 'menu/studentStatus/studentStatus',
		checked: false
	},{
		name: 'studyPlan',
		icon: 'fa-calendar-check-o',
		title: '学习计划',
		url: 'menu/studyPlan/studyPlan',
		checked: false
	},{
		name: 'classTasks',
		icon: 'fa-book',
		title: '上课任务',
		url: 'menu/classTasks/classTasks',
		checked: false
	},{
		name: 'classTimetable',
		icon: 'fa-calendar-o',
		title: '课表查询',
		url: 'menu/classTimetable/classTimetable',
		checked: false
	},{
		name: 'classTimetableAll',
		icon: 'fa-calendar-o',
		title: '班级课表',
		url: 'menu/classTimetableAll/classTimetableAll',
		checked: false
	},{
		name: 'levelExaminationScore',
		icon: 'fa-mortar-board',
		title: '考级成绩',
		url: 'menu/levelExaminationScore/levelExaminationScore',
		checked: false
	},{
		name: 'classScore',
		icon: 'fa-mortar-board',
		title: '课程成绩',
		url: 'menu/classScore/classScore',
		checked: false
	},{
		name: 'earlyWarningOfStudentStatus',
		icon: 'fa-bell',
		title: '学籍预警',
		url: 'menu/earlyWarningOfStudentStatus/earlyWarningOfStudentStatus',
		checked: false
	},{
		name: 'staminaTestScore',
		icon: 'fa-mortar-board',
		title: '体测成绩',
		url: 'menu/staminaTestScore/staminaTestScore',
		checked: false
	},{
		name: 'trainingProgram',
		icon: 'fa-calendar',
		title: '培养方案查询',
		url: 'menu/trainingProgram/trainingProgram',
		checked: false
	},{
		name: 'examinationArrangement',
		icon: 'fa-calendar-o',
		title: '考试安排',
		url: 'menu/examinationArrangement/examinationArrangement',
		checked: false
	},{
		name: 'operationLog',
		icon: 'fa-refresh',
		title: '操作日志',
		url: 'menu/operationLog/operationLog',
		checked: false
	},{
		name: 'testScore',
		icon: 'fa-mortar-board',
		title: '测验成绩',
		url: 'menu/testScore/testScore',
		checked: false
	},{
		name: 'paymentRecord',
		icon: 'fa-sign-in',
		title: '缴费记录',
		url: 'menu/paymentRecord/paymentRecord',
		checked: false
	}]
}, {
	title: '业务办理',
	children: [{
		name: 'applicationForPostponement',
		icon: 'fa-vcard',
		title: '缓考申请',
		url: 'menu/business/applicationForPostponement/applicationForPostponement',
		checked: false
	},{
		name: 'noListening',
		icon: 'fa-bookmark',
		title: '免听申请',
		url: 'menu/business/noListening/noListening',
		checked: false
	},{
		name: 'exemptionCourse',
		icon: 'fa-bookmark-o',
		title: '免修申请',
		url: 'menu/business/exemptionCourse/exemptionCourse',
		checked: false
	},{
		name: 'leavingSchool',
		icon: 'fa-file',
		title: '休退学申请',
		url: 'menu/business/leavingSchool/leavingSchool',
		checked: false
	},{
		name: 'selectedTextbooks',
		icon: 'fa-file-text-o',
		title: '选订教材',
		url: 'menu/business/selectedTextbooks/selectedTextbooks',
		checked: false
	},{
		name: 'classroomBorrowing',
		icon: 'fa-bank',
		title: '教室借用申请',
		url: 'menu/business/classroomBorrowing/classroomBorrowing',
		checked: false
	},{
		name: 'score',
		icon: 'fa-refresh',
		title: '成绩复核申请',
		url: 'menu/business/score/score',
		checked: false
	},{
		name: 'staminaTestDelay',
		icon: 'fa-male',
		title: '体测缓测申请',
		url: 'menu/business/staminaTestDelay/staminaTestDelay',
		checked: false
	},{
		name: 'staminaTestFree',
		icon: 'fa-hand-stop-o',
		title: '体测免测申请',
		url: 'menu/business/staminaTestFree/staminaTestFree',
		checked: false
	},{
		name: 'scoreConversion',
		icon: 'fa-refresh',
		title: '成绩转换申请',
		url: 'menu/business/scoreConversion/scoreConversion',
		checked: false
	},{
		name: 'studentCardReplace',
		icon: 'fa-address-card',
		title: '学生证补办申请',
		url: 'menu/business/studentCardReplace/studentCardReplace',
		checked: false
	},{
		name: 'leave',
		icon: 'fa-info-circle',
		title: '请假申请',
		url: 'menu/business/leave/leave',
		checked: false
	}]
}, {
	title: '学籍变动',
	children: [{
		name: 'infoChange',
		icon: 'fa-calendar-plus-o',
		title: '信息变动申请',
		url: 'menu/changeStatus/infoChange/infoChange',
		checked: false
	},{
		name: 'studentStatusChange',
		icon: 'fa-address-book',
		title: '学籍变动申请',
		url: 'menu/changeStatus/studentStatusChange/studentStatusChange',
		checked: false
	}]
}, {
	title: '创新项目',
	children: [{
		name: 'innovationScore',
		icon: 'fa-cloud',
		title: '创新学分申请',
		url: 'menu/innovation/innovationScore/innovationScore',
		checked: false
	},{
		name: 'extracurricularProjects',
		icon: 'fa-hand-stop-o',
		title: '课外课题申请',
		url: 'menu/innovation/extracurricularProjects/extracurricularProjects',
		checked: false
	},{
		name: 'reimbursement',
		icon: 'fa-rmb',
		title: '个人报销申请',
		url: 'menu/innovation/reimbursement/reimbursement',
		checked: false
	},{
		name: 'researchAchievements',
		icon: 'fa-newspaper-o',
		title: '课题成果申报',
		url: 'menu/innovation/researchAchievements/researchAchievements',
		checked: false
	},{
		name: 'conclusionProject',
		icon: 'fa-newspaper-o',
		title: '课题结题申报',
		url: 'menu/innovation/conclusionProject/conclusionProject',
		checked: false
	}]
}, {
	title: '选课报名',
	children: [{
		name: 'courseSelection',
		icon: 'fa-book',
		title: '选课-任选',
		url: 'menu/courseRegistration/courseSelection/courseSelection',
		checked: false
	},{
		name: 'courseSelectionRestriction',
		icon: 'fa-book',
		title: '选课-限选',
		url: 'menu/courseRegistration/courseSelectionRestriction/courseSelectionRestriction',
		checked: false
	},{
		name: 'graduationTopicSelection',
		icon: 'fa-book',
		title: '毕业选题',
		url: 'menu/courseRegistration/graduationTopicSelection/graduationTopicSelection',
		checked: false
	},{
		name: 'levelExamination',
		icon: 'fa-caret-square-o-up',
		title: '考级报名',
		url: 'menu/courseRegistration/levelExamination/levelExamination',
		checked: false
	},{
		name: 'examination',
		icon: 'fa-pencil',
		title: '考试报名',
		url: 'menu/courseRegistration/examination/examination',
		checked: false
	},{
		name: 'staminaTest',
		icon: 'fa-male',
		title: '体测报名',
		url: 'menu/courseRegistration/staminaTest/staminaTest',
		checked: false
	},{
		name: 'dropOut',
		icon: 'fa-mail-reply',
		title: '退课申请',
		url: 'menu/courseRegistration/dropOut/dropOut',
		checked: false
	}]
}, {
	title: '评价信息',
	children: [{
		name: 'teacher',
		icon: 'fa-address-card',
		title: '教师评价',
		url: 'menu/evaluate/teacher/teacher',
		checked: false
	},{
		name: 'course',
		icon: 'fa-commenting',
		title: '课程评价',
		url: 'menu/evaluate/course/course',
		checked: false
	},{
		name: 'classroom',
		icon: 'fa-bank',
		title: '课堂评价',
		url: 'menu/evaluate/classroom/classroom',
		checked: false
	}, {
		name: 'questionnaireInvestigation',
		icon: 'fa-tags',
		title: '问卷调查',
		url: 'menu/evaluate/questionnaireInvestigation/questionnaireInvestigation',
		checked: false
	}]
}, {
	title: '评选信息',
	children: [{
		name: 'teacherComment',
		icon: 'fa-child',
		title: '优秀教师评选',
		url: 'menu/selection/teacher/teacher',
		checked: false
	}]
}]