<template>
	<view>
		<!-- 学籍变更申请 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 增加申请 -->
				<my-infomuation>
					<view class="info-title">
						<text class="text">当前信息</text>
					</view>
					<view class="p">
						<text>学号：</text>
					</view>
					<view class="p">
						<text>姓名：</text>
					</view>
					<view class="p">
						<text>性别：</text>
					</view>
					<view class="p">
						<text>院系名称：</text>
					</view>
					<view class="p">
						<text>所在年级：</text>
					</view>
					<view class="p">
						<text>专业名称：</text>
					</view>
					<view class="p">
						<text>班级名称：</text>
					</view>
					<view class="p">
						<text>培养层次：</text>
					</view>
					<view class="p">
						<text>学制：</text>
					</view>
					<view class="p">
						<text>当前状态：</text>
					</view>
					<view class="p">
						<text>学籍状态：</text>
					</view>
					<view class="p">
						<text>学生类别：</text>
					</view>
					<view class="p">
						<text>当前模块方向：</text>
					</view>
					<view class="p">
						<text>平时绩点：</text>
					</view>
				</my-infomuation>
				<my-infomuation>
					<view class="info-title">
						<text class="text">异动申请</text>
					</view>
					<view class="p">
						<text>异动类别：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>异动原因：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>院系名称：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>所在年级：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>专业名称：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>班级名称：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>生效学期：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>异动说明：</text>
						<my-textarea class="selector"></my-textarea>
					</view>
					<view class="p p2">
						<text>附件：</text>
						<my-upload :tipsHidden="true" :limitType="limitType"></my-upload>
					</view>
					<view>(上传格式为jpg,gif,png,bmp,jpeg,pdf,zip,rar)</view>
					<view class="buttons">
						<view class="button-view">提交</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 申请记录 -->
			<my-tab-pane :active="active" :index="1">
				<my-infomuation>
					<view class="p">异动类型：</view>
					<view class="p">异动明细：</view>
					<view class="p">异动日期：</view>
					<view class="p">申请时间：</view>
					<view class="p">审核状态：</view>
					<view class="p">审核结果说明：</view>
					<view class="p">附件：</view>
					<view class="hr"></view>
					<view class="p">处理上课任务：</view>
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
				active: 0,
				limitType: ['.jpg', '.gif', '.bmp', '.jpeg', '.pdf', '.zip', '.rar']
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
.selector {
	width: 60%;
}
.p {
	justify-content: space-between;
	align-items: flex-start;
}
.p2 {
	justify-content: flex-start;
	align-items: flex-start;
	margin-bottom: 26upx;
	display: flex;
}
.info-title {
	padding-bottom: 16upx;;
	font-size: 42upx;
	text-align: center;
	text-shadow: #3291f8 0px 2px 6px;
	.text {
		color: rgba(0, 0, 0, 0.62);
	}
}
.buttons {
	margin-top: 60upx;
	display: flex;
	justify-content: space-between;
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
	margin: auto;
}
.hr {
	margin-top: 120upx;
}
</style>
