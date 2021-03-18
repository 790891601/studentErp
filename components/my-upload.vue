<template>
	<view class="my-upload">
		<view class="select-button" @tap="onShowUpload">选择</view>
		<view v-if="!tipsHidden" class="tips-color">（上传格式为{{tips}}）</view>
	</view>
</template>

<script>
	export default {
		name:"my-upload",
		props: {
			limitType: { //限制类型
				type: Array,
				default: () => ['.zip']
			},
			tips: {
				type: String,
				default: 'zip'
			},
			tipsHidden: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {

			};
		},
		methods: {
			onShowUpload() {
				// #ifdef MP-WEIXIN
				wx.chooseMessageFile({
					type: 'file',
					extension: this.limitType,
					success:(res)=> {
						const tempFilePaths = res.tempFiles;
						console.log(tempFilePaths)
						this.$request.customUploadFile('upload/image', tempFilePaths[0].path, 'iFile')
					},
					fail(err) {
						console.log(err)
					}
				});
				// #endif
			}
		}
	}
</script>

<style lang="scss">
.my-upload {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.tips-color {
	color: #999999;
	font-size: 28upx;
}
.select-button {
	box-shadow: #F5F5F5 0px 2px 6px 0px;
	border-radius: 10upx;
	width: 230upx;
	height: 70upx;
	color: white;
	line-height: 70upx;
	text-align: center;
	font-size: 32upx;
	background-color: #01a1eb;
}
</style>
