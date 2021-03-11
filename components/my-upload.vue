<template>
	<view class="my-upload">
		<view class="select-button" @tap="onShowUpload">选择</view>
		<view v-if="!tipsHidden">（上传格式为{{tips}}）</view>
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
						this.$request.customUploadFiles(tempFilePaths.length, tempFilePaths, (res) => {
							console.log(res)
						})
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
.select-button {
	box-shadow: #666 0px 2px 6px 0px;
	border-radius: 10upx;
	width: 180upx;
	height: 60upx;
	line-height: 60upx;
	text-align: center;
	font-size: 36upx;
}
</style>
