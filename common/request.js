import config from './config.js'

/**
 * Promise并行请求
 * @param {Object} arr
 */
// export function $requestAll(...arr) {
// 	let handle = function(params) {
// 		return request(params)
// 	}
// 	let allPromise = arr.reduce((rst,opt) => rst.concat(handle(opt)), [])
// 	return Promise.all(allPromise).then(res => {
// 		//进行一些前端后台的约定判断
// 		// if(res.code === 1) return res;
// 		return res;
// 	}).catch(err => {
// 		//错误捕获,发起错误接口记录日志
// 		console.error('Promise并行请求失败', err)
// 		customShowToast({
// 			title: err
// 		})
// 	})
// }

function request(url, data, method) {
	let methodUpper = method ? method.toUpperCase() : 'GET',
		requestMethods = ['GET', 'POST'];

	//请求方式格式校验
	if(url === null || requestMethods.indexOf(methodUpper) === -1) {
		console.log(`request请求方法使用错误,url:${url}, data:${data}, method: ${method}`);
		return false;
	}

	uni.showLoading({
		title: '数据正在加载中...',
		mask: true
	});
	let header = {};

	if(methodUpper == 'POST') {
		header = {
			'Content-type': 'application/x-www-form-urlencoded'
		}
	}

	return new Promise((resolve, reject) => {
		let requestTask = uni.request({
			url: config.requestDomain + url,
			method: methodUpper,
			header: header,
			data: data || {},
			dataType: 'json',
			success: function(res) {
				resolve(res);
			},
			fail: reject,
			complete: function() {
				uni.hideLoading();
			}
		});
	});
};

function get(url, data) {
	return request(url, data, 'GET');
}
function post(url, data) {
	return request(url, data, 'POST');
}


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
	customUploadFile,
	request,
	get,
	post
}
