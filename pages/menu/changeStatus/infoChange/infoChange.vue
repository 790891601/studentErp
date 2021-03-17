<template>
	<view class="container">
		<!-- 信息变动申请 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 增加申请 -->
				<my-infomuation>
					<view class="pic" @tap="onUploadPic">
						<image class="pic-image" src="/static/defaultPic.png"></image>
					</view>
					<view class="p">
						<text class="field">姓名：</text>
					</view>
					<view class="p">
						<text class="field">姓名拼音：</text>
					</view>
					<view class="p">
						<text class="field">英文姓名：</text>
					</view>
					<view class="p">
						<text class="field">出生日期：</text>
					</view>
					<view class="p">
						<text class="field">籍贯：</text>
					</view>
					<view class="p">
						<text class="field">身份证号：</text>
					</view>
					<view class="p">
						<text class="field">银行账号：</text>
					</view>

					<view class="p">
						<text class="field">政治面貌：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">民族：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>

					<view class="p">
						<text class="field">专业方向：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p p2">
						<text class="field">附件：</text>
						<my-upload :tipsHidden="true" :limitType="limitType"></my-upload>
					</view>
					<view class="tips-color">(上传格式为jpg,gif,png,bmp,jpeg,pdf,zip,rar)</view>
					<view class="buttons">
						<view class="button-view button-max">提交</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 申请记录 -->
			<my-tab-pane :active="active" :index="1">
				<my-infomuation>
					<view class="p">变动信息名称：</view>
					<view class="p">变动信息内容：</view>
					<view class="p">原信息内容：</view>
					<view class="p">审核状态：</view>
					<view class="p">审核结果：</view>
					<view class="p">申请日期：</view>
					<view class="p">附件：</view>
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

			},
			onUploadPic() {
				//上传图片 - 2M以内
				uni.chooseMedia({
					count: 1,
					mediaType: 'image',
					sourceType: ['album', 'camera'],
					success(res) {
						 console.log(res);
					}
				})
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
.pic-image {
	width: 238upx;
	height: 290upx;
}
.pic {
	padding-bottom: 20upx;
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
