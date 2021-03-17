<template>
	<view>
		<!-- 考级报名 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 考级报名 -->
				<my-infomuation>
					<view class="p">
						<text class="field">考级课程：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">考级类别：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">学年学期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">考试时间：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">报名金额：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">限报人数：</text>
					</view>
					<view class="p">
						<text class="field">报名人数：</text>
					</view>
					<view class="buttons">
						<view class="button-view button-max" @tap="onSubmit">报名</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 报名记录 -->
			<my-tab-pane :active="active" :index="1">
				<my-infomuation>
					<view class="pic">
						<image class="pic-image" src="/static/defaultPic.png"></image>
					</view>
					<view class="p">考级类别：</view>
					<view class="p">考级课程：</view>
					<view class="p">学年学期：</view>
					<view class="p">报名时间：</view>
					<view class="p">考试时间：</view>
					<view class="p">报名金额：</view>
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
					title: '全部题目'
				},{
					title: '已选题目'
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
.pic-image {
	width: 238upx;
	height: 290upx;
}
.pic {
	padding-bottom: 20upx;
}
</style>
