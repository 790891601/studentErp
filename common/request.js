import config from './config.js'
/**
 * 批量上传文件 - 依赖上传函数 - 提示函数
 */
function customUploadFiles(imagesLength, formData, callBack) {
	let j = 0, rst = [];
	for(let i = 0; i < imagesLength; i++) {
		customUploadFile('upload/image', formData[i].path, 'iFile').then(res => {
			// rst.push(JSON.parse(JSON.stringify(res.data)).data);
			// if(j++ === imagesLength-1) {
			// 	typeof callBack === 'function' && callBack(rst)
			// }else if(i === imagesLength-1) {
			// 	customShowToast({title: '图片上传失败,请稍后再试'})
			// }
		})
	}
}

/**
 * 上传文件
 */
function customUploadFile(url, filePath, fileKey) {
	return new Promise((resolve,reject) => {
		uni.uploadFile({
			url: config.requestDomain + url,
			filePath: filePath,
			name: fileKey,
			formData: {wxapp_id: config.wxapp_id, token: uni.getStorageSync(config.varNames.USER_TOKEN)},
			success: resolve,
			fail: reject
		})
	})
}

export default {
	customUploadFiles,
	customUploadFile
}
