//获取供应商函数
let getProvider = (service = 'oauth') => {
	return new Promise((resolve, reject) => {
		uni.getProvider({
			service: service,
			success: resolve,
			fail: reject
		})
	})
}

//获取用户设置
let getSetting = () => {
	return new Promise((resolve, reject) => {
		//#ifdef MP
		uni.getSetting({
			success: resolve,
			fail: reject
		});
		//#endif
	});
}
//打开用户设置
let openSetting = () => {
	return new Promise((resolve, reject) => {
		uni.openSetting({
			success: resolve,
			fail: reject
		});
	})
}

//统一登录函数
let login = () => {
	return new Promise(async (resolve, reject) => {
		let providerList = await getProvider('oauth'),
			setting = await getSetting();

		let callback = (provider) => {
			//#ifdef MP
			//用户允许授权
			if(setting.authSetting['scope.userInfo']) {
				uni.login({
					provider: provider,
					success(res) {
						resolve(res);
					},
					fail(err) {
						reject(err);
					}
				});
			}
			//#endif
		}

		for(let i = 0; i < providerList.provider.length; i++) {
			//暂时先支持微信登录
			if(providerList.provider[i] == 'weixin') {
				callback(providerList.provider[i]);
			}
		}
	});
}



export default {
	getProvider,
	login,
	getSetting,
	openSetting
};
