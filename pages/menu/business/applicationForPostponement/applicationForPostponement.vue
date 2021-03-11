<template>
	<view>
		<!-- 缓考申请 -->
		<my-tab :head="head" :active.sync="active">
			<my-tab-pane :active="active" :index="0">
				<!-- 缓考申请 -->
				<my-infomuation>
					<view class="p">
						<text>学年学期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>认定教师：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>课程名称：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>申请原因：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>附件：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="buttons">
						<view class="button-view" @tap="onAddSubmit">增加</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 申请记录 -->
			<my-tab-pane :active="active" :index="1">
				<my-infomuation>
					<view class="p">开课学期：</view>
					<view class="p">学号：</view>
					<view class="p">姓名：</view>
					<view class="p">课程名称：</view>
					<view class="p">总学时：</view>
					<view class="p">开课院系：</view>
					<view class="p">认定教师：</view>
					<view class="p">申请时间：</view>
					<view class="p">申请原因：</view>
					<view class="p">审核状态：</view>
					<view class="p">审核结果：</view>
				</my-infomuation>
			</my-tab-pane>
		</my-tab>
		<my-infomuation>

		</my-infomuation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				head: [{
					title: '缓考申请'
				},{
					title: '申请记录'
				}],
				active: 0
			}
		},
		methods: {
			onAddSubmit() {
				//增加缓考申请

			}
		}
	}
</script>

<style>

</style>
