<template>
	<view class="container">
		<!-- 休退学申请 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 休退学申请 -->
				<my-infomuation>
					<view class="p">
						<text class="field">学年学期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">上课学期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">课程编号：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">课程名称：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">总学时：</text>
						<my-input class="selector"></my-input>
					</view>
					<view class="p">
						<text class="field">学分：</text>
						<my-input class="selector"></my-input>
					</view>
					<view class="p">
						<text class="field">修读方式：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">异动类型：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">异动原因：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">生效学期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">异动说明：</text>
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
				head: [{
					title: '休退学申请'
				},{
					title: '申请记录'
				}],
				active: 0
			}
		},
		methods: {
			onAddSubmit() {
				//休退学申请

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
