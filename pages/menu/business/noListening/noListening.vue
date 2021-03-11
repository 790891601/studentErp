<template>
	<view>
		<!-- 免听申请 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 免听申请 -->
				<my-infomuation>
					<view class="p">
						<text>学年学期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>课程名称：</text>
						<my-input class="selector"></my-input>
					</view>
					<view class="p">
						<text>免听原因：</text>
						<my-textarea class="selector"></my-textarea>
					</view>
					<view class="p">
						<text>附件：</text>
						<my-upload></my-upload>
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
					<view class="p">免听课程：</view>
					<view class="p">总学时：</view>
					<view class="p">教学班：</view>
					<view class="p">申请时间：</view>
					<view class="p">申请原因：</view>
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
					title: '免听申请'
				},{
					title: '申请记录'
				}],
				active: 0
			}
		},
		methods: {
			onAddSubmit() {
				//免听申请

			}
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
