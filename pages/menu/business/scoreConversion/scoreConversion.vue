<template>
	<view class="container">
		<!-- 成绩转换申请 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 增加申请 -->
				<my-infomuation>
					<!-- <view class="p">
						<text>学年学期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view> -->
				</my-infomuation>
			</my-tab-pane>
			<!-- 申请记录 -->
			<my-tab-pane :active="active" :index="1">
				<my-infomuation>
					<view class="p">申请学期：</view>
					<view class="p">原课程名称：</view>
					<view class="p">原课程大类：</view>
					<view class="p">原课程分类：</view>
					<view class="p">原总学时：</view>
					<view class="p">原学分：</view>
					<view class="p">总成绩：</view>
					<view class="p">转换课程：</view>
					<view class="p">转换课程平台：</view>
					<view class="p">转换课程大类：</view>
					<view class="p">转换课程分类：</view>
					<view class="p">转换总学时：</view>
					<view class="p">转换学分：</view>
					<view class="p">现修读方式：</view>
					<view class="p">现考试性质：</view>
					<view class="p">现成绩方式：</view>
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
