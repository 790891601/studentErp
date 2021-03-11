<template>
	<view>
		<!-- 教室借用申请 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<my-infomuation>
					<view class="p">
						<text>学年学期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">学生编号：</view>
					<view class="p">学生姓名：</view>
					<view class="p">借用单号：</view>
					<view class="p">教学场地名称：</view>
					<view class="p">借用日期：</view>
					<view class="p">借用时间：</view>
					<view class="p">使用原因：</view>
					<view class="p">备注：</view>
					<view class="p">申请材料：</view>
					<view class="p">院系名称：</view>
					<view class="p">申请时间：</view>
					<view class="p">审核日期：</view>
					<view class="p">审核状态：</view>
					<view class="p">审核结果说明：</view>
				</my-infomuation>
			</my-tab-pane>
			<my-tab-pane :active="active" :index="1">
				<!-- 空闲教室查询 -->
				<my-infomuation>
					<view class="p">
						<text>学年学期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>周次：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>星期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>日期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>校区：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>功能区：</text>
						<my-input class="selector"></my-input>
					</view>
					<view class="p">
						<text>教学楼：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>教室：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="buttons">
						<view class="button-view" @tap="onNavigateToMixin" data-url="menu/business/classroomBorrowing/detail/detail">查询</view>
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
					title: '我的申请'
				},{
					title: '空闲教室查询'
				}],
				active: 0
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
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
.button-view {
	background-color: #F48D3A;
	width: 388upx;
	height: 92upx;
	line-height: 92upx;
	text-align: center;
	border-radius: 15upx;
	font-size: 36upx;
	opacity: .8;
}
</style>
