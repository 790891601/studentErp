<template>
	<view class="container">
		<!-- 体测免测申请 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 增加申请 -->
				<my-infomuation>
					<view class="p">
						<text class="field">学年学期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">考试性质：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">测试教师：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">申请时间：</text>
						<my-picker class="selector" mode="date" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">免测类型：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">申请原因：</text>
						<my-textarea class="selector"></my-textarea>
					</view>
					<view class="p">
						<text class="field">申请材料：</text>
						<my-upload></my-upload>
					</view>
					<view class="p">
						<text class="field">审核状态：</text>
						<my-input class="selector"></my-input>
					</view>
					<view class="p">
						<text class="field">结果说明：</text>
						<my-input class="selector"></my-input>
					</view>
					<view class="buttons">
						<view class="button-view button-max" @tap="onAddSubmit">提交</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 申请记录 -->
			<my-tab-pane :active="active" :index="1">
				<my-infomuation>
					<view class="p">学年学期：</view>
					<view class="p">考试性质：</view>
					<view class="p">测试教师：</view>
					<view class="p">免测类型：</view>
					<view class="p">申请时间：</view>
					<view class="p">申请原因：</view>
					<view class="p">申请材料：</view>
					<view class="p">审核状态：</view>
					<view class="p">结果说明：</view>
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
				active: 0
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
.hr {
	margin-top: 120upx;
}
</style>
