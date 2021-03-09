
export default {
	methods: {
		onNavigateToMixin(e) {
			let dataset = e.currentTarget.dataset || {},
				url = dataset.url,
				params = '?';

			//获取参数
			for(let key in dataset) {
				if(key == 'url') continue;

				params = `${params}${key}=${dataset[key]}&`;
			}
			//截取最后的&
			params = params.substr(0, params.length-1);

			uni.navigateTo({
				url: '/pages/' + url + params,
				fail(err) {
					console.log(err); 
				}
			})
		}
	}
}
