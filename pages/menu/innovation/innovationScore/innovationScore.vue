<template>
	<view class="container">
		<!-- 创新学分申请 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 增加申请 -->
				<my-infomuation>
					<view class="p">
						<text class="field">项目类型：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">奖励级别：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>

					<view class="p">
						<text class="field">奖励等级：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>

					<view class="p">
						<text class="field">申请学分：</text>
						<my-input class="selector"></my-input>
					</view>

					<view class="p">
						<text class="field">学期学年：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>

					<view class="p">
						<text class="field">备注：</text>
						<my-textarea class="selector" v-model="form.comment"></my-textarea>
					</view>

					<view class="p p2">
						<text class="field">申请材料：</text>
						<my-upload :tipsHidden="true" :limitType="limitType"></my-upload>
					</view>
					<view class="tips-color">(上传格式为zip，文件名字数不多于15个)</view>
					<view class="buttons">
						<view class="button-view button-max" @tap="onAddSubmit">提交</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 申请记录 -->
			<my-tab-pane :active="active" :index="1">
				<my-infomuation>
					<view class="p">学号：</view>
					<view class="p">姓名：</view>
					<view class="p">院系名称：</view>
					<view class="p">班级名称：</view>
					<view class="p">学年学期：</view>
					<view class="p">项目类型：</view>
					<view class="p">项目分类：</view>
					<view class="p">奖励级别：</view>
					<view class="p">奖励等级：</view>
					<view class="p">申请学分：</view>
					<view class="p">认定学分：</view>
					<view class="p">总成绩：</view>
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
					title: '增加申请'
				},{
					title: '申请记录'
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
@import "../../../../common/scss/button.scss";
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
.tips-color {
	color: #999;
	font-size: 28upx;
}
.hr {
	margin-top: 120upx;
}
</style>
