<template>
	<view class="container">
		<!-- 学籍卡片 -->
		<my-tab :head="head" :active.sync="active">
			<my-tab-pane :active="active" :index="0">
				<!-- 校内信息 -->
				<my-infomuation>
					<view class="p">学号：</view>
					<view class="p">姓名：</view>
					<view class="p">性别：</view>
					<view class="p">入学年份：</view>
					<view class="p">培养层次：</view>
					<view class="p">院系名称：</view>
					<view class="p">学制：</view>
					<view class="p">专业：</view>
					<view class="p">班级：</view>
					<view class="p">所在校区：</view>
					<view class="p">学籍状态：</view>
					<view class="p">学生状态：</view>
					<view class="p">外语语种：</view>
					<view class="p">辅修专业：</view>
					<view class="p">民族：</view>
					<view class="p">姓名拼音：</view>
					<view class="p">英文姓名：</view>
					<view class="p">联系电话：</view>
					<view class="p">微信：</view>
					<view class="p">QQ：</view>
					<view class="p">Email：</view>
					<view class="p">银行账号：</view>
					<view class="p">证件号码：</view>
					<view class="p">证件类型：</view>
					<view class="p">找回密码凭证：</view>
					<view class="p">加分项：</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 生源信息 -->
			<my-tab-pane :active="active" :index="1">
				<my-infomuation>
					<view class="p">考生号：</view>
					<view class="p">民族：</view>
					<view class="p">曾用名：</view>
					<view class="p">来源省份：</view>
					<view class="p">家庭电话：</view>
					<view class="p">政治面貌：</view>
					<view class="p">出生日期：</view>
					<view class="p">入学日期：</view>
					<view class="p">籍贯：</view>
					<view class="p">籍贯市区：</view>
					<view class="p">籍贯省份：</view>
					<view class="p">乘车区间起始站：</view>
					<view class="p">乘车区间终点站：</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 家庭信息 -->
			<my-tab-pane :active="active" :index="2">
				<my-infomuation>
					<view class="p">父亲姓名：</view>
					<view class="p">母亲姓名：</view>
					<view class="p">父亲证件类型：</view>
					<view class="p">母亲证件类型：</view>
					<view class="p">父亲单位名称：</view>
					<view class="p">母亲单位名称：</view>
					<view class="p">父亲证件号码：</view>
					<view class="p">母亲证件号码：</view>
					<view class="p">父亲政治面貌：</view>
					<view class="p">母亲政治面貌：</view>
					<view class="p">父亲单位邮编：</view>
					<view class="p">母亲单位邮编：</view>
					<view class="p">父亲出生日期：</view>
					<view class="p">母亲出生日期：</view>
					<view class="p">父亲单位电话：</view>
					<view class="p">母亲单位电话：</view>
					<view class="p">父亲邮箱：</view>
					<view class="p">母亲邮箱：</view>
					<view class="p">监护人姓名1：</view>
					<view class="p">监护人姓名2：</view>
					<view class="p">监护人1证件类型：</view>
					<view class="p">监护人2证件类型：</view>
					<view class="p">家长职业：</view>
					<view class="p">家庭地址：</view>
					<view class="p">备注：</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 高考信息 -->
			<my-tab-pane :active="active" :index="3">
				<my-infomuation>
					<view class="p">入学总分：</view>
					<view class="p">科目1成绩：</view>
					<view class="p">科目2成绩：</view>
					<view class="p">科目3成绩：</view>
					<view class="p">科目4成绩：</view>
					<view class="p">科目5成绩：</view>
					<view class="p">考生类别：</view>
					<view class="p">外语成绩：</view>
					<view class="p">投档成绩：</view>
					<view class="p">艺术专业成绩：</view>
					<view class="p">特长成绩：</view>
					<view class="p">报考志愿1：</view>
					<view class="p">报考志愿2：</view>
					<view class="p">报考志愿3：</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 毕业信息 -->
			<my-tab-pane :active="active" :index="4">
				<my-infomuation>
					<view class="p">毕业证书邮寄地址：</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 简历信息 -->
			<my-tab-pane :active="active" :index="5">
				<my-infomuation>
					<view class="p">起始时间：</view>
					<view class="p">结束时间：</view>
					<view class="p">政务：</view>
					<view class="p">证明人：</view>
					<view class="p">所在学校：</view>
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
					title: '校内信息'
				},{
					title: '生源信息'
				},{
					title: '家庭信息'
				},{
					title: '高考信息'
				},{
					title: '毕业信息'
				},{
					title: '简历信息'
				}],
				active: 0
			};
		}
	}
</script>

<style lang="scss">

</style>
