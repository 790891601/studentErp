<template>
	<view class="container">
		<!-- 请假申请 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 增加申请 -->
				<my-infomuation>
					<view class="p">
						<text class="field">请假起始日期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">请假结束日期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">请假天数：</text>
						<my-input class="selector"></my-input>
					</view>
					<view class="p">
						<text class="field">申请原因：</text>
						<my-textarea class="selector"></my-textarea>
					</view>
					<view class="p2">
						<text class="field">附件：</text>
						<my-upload :tipsHidden="true" :limitType="limitType"></my-upload>
					</view>
					<view class="tips-color">(上传格式为jpg,gif,png,bmp,jpeg,pdf,zip,rar)</view>
					<view class="buttons">
						<view class="button-view button-max">提交</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 申请记录 -->
			<my-tab-pane :active="active" :index="1">
				<my-infomuation>
					<view class="p">学号：</view>
					<view class="p">姓名：</view>
					<view class="p">请假类型：</view>
					<view class="p">请假起始时间：</view>
					<view class="p">请假结束时间：</view>
					<view class="p">结束时间：</view>
					<view class="p">天数：</view>
					<view class="p">备注：</view>
					<view class="p">附件：</view>
					<view class="p">申请时间：</view>
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
					title: '增加申请'
				},{
					title: '申请记录'
				}],
				active: 0,
				limitType: ['.jpg', '.gif', '.bmp', '.jpeg', '.pdf', '.zip', '.rar']
			}
		},
		methods: {
			onAddSubmit() {
				//增加申请

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
.p2 {
	justify-content: flex-start;
	align-items: flex-start;
	margin-bottom: 26upx;
	display: flex;
}
.buttons {
	margin-top: 60upx;
	display: flex;
	justify-content: space-between;
	padding-bottom: 70upx;
}
.tips-color {
	color: #999;
	font-size: 28upx;
}
.hr {
	margin-top: 120upx;
}
</style>
