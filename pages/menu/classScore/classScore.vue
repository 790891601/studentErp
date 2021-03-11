<template>
	<view class="class-score">
		<!-- 课程成绩 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<my-infomuation>
					<view class="p">
						<text>学年学期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="0" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>计划类型：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="0" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="buttons">
						<view class="button-view" @tap="onNavigateToMixin" data-url="menu/classScore/classScore/classScore">查询</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 成绩加分申请 -->
			<my-tab-pane :active="active" :index="1" class="pane2">
				<my-infomuation>
					<view class="p">
						<text>学年学期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="0" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="buttons">
						<view class="button-view" @tap="onNavigateToMixin" data-url="menu/classScore/classPlusScore/classPlusScore">查询</view>
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
					title: '课程成绩'
				},{
					title: '成绩加分申请'
				}],
				active: 0,
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
@import "../../../common/scss/button.scss";
.class-score {
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
</style>
