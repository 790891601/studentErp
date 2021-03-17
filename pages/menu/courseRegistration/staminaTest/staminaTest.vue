<template>
	<view class="container">
		<!-- 体测报名 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 体测报名 -->
				<my-infomuation>
					<view class="p">
						<text class="field">学年学期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">测试教师：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">体测开始时间：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">体测结束时间：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">考试性质：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">限选：</text>
					</view>
					<view class="p">
						<text class="field">已选：</text>
					</view>
					<view class="buttons">
						<view class="button-view button-max" @tap="onSubmit">报名</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 报名记录 -->
			<my-tab-pane :active="active" :index="1">
				<my-infomuation>
					<view class="p">学年学期：</view>
					<view class="p">教师：</view>
					<view class="p">体测开始时间：</view>
					<view class="p">体测结束时间：</view>
					<view class="p">考试性质：</view>
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
					title: '体测报名'
				},{
					title: '报名记录'
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
