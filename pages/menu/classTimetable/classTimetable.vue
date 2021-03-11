<template>
	<view class="class-timetable">
		<!-- 课表查询 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 我的课表 -->
				<my-infomuation>
					<view class="p">
						<text>学期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="1" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>周次：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="buttons">
						<view class="button-view" @tap="onNavigateToMixin" data-url="menu/classTimetable/myClassTimetable/myClassTimetable">查询</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 全校课表 -->
			<my-tab-pane :active="active" :index="1" class="pane2">
				<my-infomuation>
					<view class="p">
						<text>学年学期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="1" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>校区：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>教学楼：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>功能区：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>日期：</text>
						<my-picker class="selector" mode="date" :defaultValue.sync="form.date"></my-picker>
					</view>
					<view class="p">
						<text>计划类型：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>周次：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>星期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>节次：</text>
						<my-input class="selector"></my-input>
					</view>
					<view class="p">
						<text>开课编号：</text>
						<my-input class="selector"></my-input>
					</view>
					<view class="p">
						<text>开课单位：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>系（教研室）：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>课程：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>教师：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="buttons">
						<view class="button-view" @tap="onNavigateToMixin" data-url="menu/classTimetable/schoolClassTimetable/schoolClassTimetable">查询</view>
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
					date: '0000-00-00', //日期
				}
			}
		},
		methods: {

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
