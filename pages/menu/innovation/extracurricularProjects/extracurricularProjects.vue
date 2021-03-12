<template>
	<view>
		<!-- 课外课题申报 -->
		<my-tab :head="head" :active.sync="active" :column="3">
			<my-tab-pane :active="active" :index="0">
				<!-- 课题总库 -->
				<my-infomuation>
					<view class="p">课题编号：</view>
					<view class="p">课题名称：</view>
					<view class="p">批次名称：</view>
					<view class="p">指导教师一：</view>
					<view class="p">指导教师二：</view>
				</my-infomuation>
			</my-tab-pane>
			<my-tab-pane :active="active" :index="1">
				<!-- 增加申请 -->
				<my-infomuation>
					<view class="p">
						<text>课题编号：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>课题名称：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>批次名称：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>指导教师一：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>指导教师二：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>管理院系：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>拟结题时间：</text>
					</view>
					<view class="p">
						<text>申报级别：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>项目类别：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text>指导老师一电话：</text>
					</view>
					<view class="p">
						<text>指导老师二电话：</text>
					</view>
					<view class="p">
						<text>申报金额：</text>
					</view>

					<view class="p">
						<text>课题简介（学生要求）：</text>
					</view>
					<my-textarea class="selector" v-model="form.comment"></my-textarea>

					<view class="buttons">
						<view class="button-view" @tap="onAddSubmit">提交</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 申请记录 -->
			<my-tab-pane :active="active" :index="2">
				<my-infomuation>
					<view class="p">管理院系：</view>
					<view class="p">课题名称：</view>
					<view class="p">项目类别：</view>
					<view class="p">指导教师一：</view>
					<view class="p">指导教师一联系方式：</view>
					<view class="p">指导教师二：</view>
					<view class="p">指导教师二联系方式：</view>
					<view class="p">选课开始时间：</view>
					<view class="p">选课结束时间：</view>
					<view class="p">申报级别：</view>
					<view class="p">申报资金：</view>
					<view class="p">是否被选用：</view>
					<view class="p">是否负责人：</view>
					<view class="p">审核状态：</view>
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
					title: '课题总库'
				},{
					title: '增加申请'
				},{
					title: '已选记录'
				}],
				active: 0,
				limitType: ['.zip'],
				form: {
					comment: '', //备注
				}
			}
		},
		methods: {
			onAddSubmit() {
				//增加申请
				console.log(this.form);
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
