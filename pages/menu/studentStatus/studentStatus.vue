<template>
	<view class="student-card-container">
		<!-- 学籍卡片 -->
		<!-- Tab页 -->
		<my-tab :head="head" :active.sync="active">
			<my-tab-pane :active="active" :index="0">
				<!-- Tab1 -->
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
			<!-- 未写 -->
			<my-tab-pane :active="active" :index="2">
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
			<my-tab-pane :active="active" :index="3">
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
			<my-tab-pane :active="active" :index="4">
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
			<my-tab-pane :active="active" :index="5">
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
