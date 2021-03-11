<template>
	<view>
		<!-- 查看学习计划 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 培养计划 -->
				<my-infomuation>
					<view class="p">开设学期：</view>
					<view class="p">课程编号：</view>
					<view class="p">课程名称：</view>
					<view class="p">课程英文名称：</view>
					<view class="p">课程平台：</view>
					<view class="p">课程大类：</view>
					<view class="p">课程分类：</view>
					<view class="p">学分：</view>
					<view class="p">总学时/类型：</view>
					<view class="p">成绩方式：</view>
					<view class="p">考核方式：</view>
					<view class="p">修读方式：</view>
					<view class="p">模块方向：</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 培养要求 -->
			<my-tab-pane :active="active" :index="1">

			</my-tab-pane>
		</my-tab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				head: [{
					title: '培养任务'
				},{
					title: '培养要求'
				}],
				active: 0
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
