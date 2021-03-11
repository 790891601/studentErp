<template>
	<view class="class-timetable-all">
		<!-- 班级课表 -->
		<my-infomuation>
			<view class="p">
				<text>学年学期：</text>
				<my-picker class="selector" :ranges="moduleRanges" :defaultKey="0" :defaultValue.sync="defaultValue"></my-picker>
			</view>
			<view class="p">
				<text>院系：</text>
				<my-picker class="selector" :ranges="moduleRanges" :defaultKey="0" :defaultValue.sync="defaultValue"></my-picker>
			</view>
			<view class="p">
				<text>周次：</text>
				<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
			</view>
			<view class="p">
				<text>专业：</text>
				<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
			</view>
			<view class="p">
				<text>年级：</text>
				<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
			</view>
			<view class="p">
				<text>班级：</text>
				<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
			</view>
			<view class="buttons">
				<view class="button-view" @tap="onNavigateToMixin" data-url="menu/classTimetableAll/classTimetableAllDetail/classTimetableAllDetail">查询</view>
			</view>
		</my-infomuation>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
@import "../../../common/scss/button.scss";
.class-timetable-all {
	margin-top: 160upx;
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
