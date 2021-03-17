<template>
	<view class="container">
		<!-- 退课申请 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 退课申请 -->
				<my-infomuation>
					<view class="p">
						<text class="field">学生报名：</text>
					</view>
					<view class="p">
						<text class="field">课程名称：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">申请原因：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">备注：</text>
						<my-textarea class="selector"></my-textarea>
					</view>
					<view class="buttons">
						<view class="button-view button-max" @tap="onSubmit">提交</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 申请记录 -->
			<my-tab-pane :active="active" :index="1">
				<my-infomuation>
					<view class="p">申请代码：</view>
					<view class="p">课程编号：</view>
					<view class="p">课程名称：</view>
					<view class="p">教学班名称：</view>
					<view class="p">授课教师：</view>
					<view class="p">计划学时：</view>
					<view class="p">开课学时：</view>
					<view class="p">学分：</view>
					<view class="p">修读方式：</view>
					<view class="p">课程大类：</view>
					<view class="p">开课编号：</view>
					<view class="p">申请人：</view>
					<view class="p">申请时间：</view>
					<view class="p">申请原因：</view>
					<view class="p">备注：</view>
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
				head: [{
					title: '退课申请'
				},{
					title: '申请记录'
				}],
				active: 0
			}
		},
		methods: {
			onSubmit() {
				//报名
				console.log(this.form);
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../../../common/scss/button.scss";
.selector {
	width: 60%;
}
.p {
	justify-content: space-between;
	align-items: flex-start;
}
.buttons {
	margin-top: 60upx;
	display: flex;
	justify-content: space-between;
	padding-bottom: 70upx;
}
.hr {
	margin-top: 120upx;
}
</style>
