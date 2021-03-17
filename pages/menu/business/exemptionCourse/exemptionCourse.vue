<template>
	<view class="container">
		<!-- 免修申请 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 免修申请 -->
				<my-infomuation>
					<view class="p">
						<text class="field">学年学期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">免修类型：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">计划类型：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">免修课程：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">替代课程：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">申请说明：</text>
						<my-textarea class="selector"></my-textarea>
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
					<view class="p">免修类型：</view>
					<view class="p">学号：</view>
					<view class="p">姓名：</view>
					<view class="p">任务代码：</view>
					<view class="p">申请学期：</view>
					<view class="p">免修课程：</view>
					<view class="p">替代课程：</view>
					<view class="p">总学时：</view>
					<view class="p">学分：</view>
					<view class="p">修读方式：</view>
					<view class="p">申请时间：</view>
					<view class="p">审核状态：</view>
					<view class="p">审核结果：</view>
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
					title: '免修申请'
				},{
					title: '申请记录'
				}],
				active: 0
			}
		},
		methods: {
			onAddSubmit() {
				//免修申请

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
