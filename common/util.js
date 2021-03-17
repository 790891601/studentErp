const FUNC_ERROR_TEXT = 'Expected a function';

function customShowModal(opts) {
	if (typeof opts === 'undefined') opts = {};
	return new Promise(function(resolve, reject) {
		uni.showModal({
			title: opts.title || '提示',
			content: opts.content || '确定进行该操作？',
			showCancel: opts.showCancel === false ? false : true,
			cancelText: '取消',
			cancelColor: '#909399',
			confirmText: '确定',
			confirmColor: '#13557C',
			success: function(res) {
				if (res.confirm) {
					resolve(true);
				}
				resolve(false);
			},
			fail: function() {
				reject(new Error('Modal调用失败'));
			}
		});
	});
};

function customShowToast(title, icon, marsker, duration) {
	let data = {
		title: title || '提示',
		icon: icon || 'none',
		mask: typeof marsker === 'boolean' ? marsker : true,
		duration: duration > 0 ? duration : 1500
	};

	return new Promise((resolve,reject) => {
		uni.showToast({
			...data,
			success: resolve,
			fail: reject
		});
	})
};

function getStorageSync(key) {
	let store = uni.getStorageSync(key) || '';
	if(/^\s*\[\]\s*$/.test(store) || /^\s*\{\}\s*$/.test(store)) {
		store = JSON.parse(store);
	}

	return store;
}
function setStorageSync(key, value) {
	if(value != null && typeof value === 'object') {
		value = JSON.stringify(value);
	}
	uni.setStorageSync(key, value);
}
function clearStorageSync(key) {
	uni.removeStorageSync(key)
}

function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function (n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

/*
   防止按钮重复点击
   @params {function} func 触发函数
   @params {boolean} manual true: 同步，false: 异步
*/
function ignoreMultiClick(func, manual = false) {
	if(typeof func != 'function') {
		throw new TypeError(FUNC_ERROR_TEXT);
	}
	
	let lock = false;
	return function(...args) {
		if(lock) return false; //禁止访问

		lock = true; //上锁
		let done = () => { lock = false; }; //解锁

		if(manual) return func.call(this, ...args, done); //不是异步，需要手动解锁

		let promise = func.call(this, ...args); //异步，自动解锁
		Promise.resolve(promise).finally(done);
		return promise;
	}
}

/*
	防抖
	@params {function} callback 触发函数
	@params {int} 触发时间
	@params {object} options {leading: boolean 指定调用在节流开始前, trailing: boolean 指定调用在节流结束后}
*/
function debounce(callback, time = 1000, options= {leading: false, trailing: true}) {
	if(typeof callback != 'function') {
		throw new TypeError(FUNC_ERROR_TEXT);
	}

	let timer = null;
	return function(...args) {
		clearTimeout(timer);

		if(options.leading) callback(...args);
		timer = setTimeout(() => {
			if(options.trailing) callback(...args);

			timer = null;
		}, time);
	}
}
/*
	节流
	@params {function} callback 触发函数
	@params {int} 触发时间
	@params {object} options {leading: boolean 指定调用在节流开始前, trailing: boolean 指定调用在节流结束后}
*/
function throttle(callback, time = 1000, options= {leading: false, trailing: true}) {
	if(typeof callback != 'function') {
		throw new TypeError(FUNC_ERROR_TEXT);
	}

	let timer = null;
	return function(...args) {
		if(timer) return false;

		if(options.leading) callback(...args);

		timer = setTimeout(() => {
			if(options.trailing) callback(...args);

			timer = null;
		}, time);
	}
}

/*
  格式化经纬度
  @params {string|int} 经度
  @params {string|int} 纬度
  @return {object} 经纬度对象 {longitude: [整数, 小数], latitude: [整数, 小数]}
*/
function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}
/*
	时间处理对象
*/
var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	/* 什么时候前 */
	humanize: function (milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	/* 年月日时分秒 */
	format: function (dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function (number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDate()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	/* 日期转Date对象 */
	parse: function (str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	},
	getTime: function(str) {

	}
};

module.exports = {
	formatTime: formatTime,
	formatLocation: formatLocation,
	dateUtils: dateUtils,
	customShowModal: customShowModal,
	customShowToast: customShowToast,
	getStorageSync: getStorageSync,
	setStorageSync: setStorageSync,
	clearStorageSync: clearStorageSync,
	debounce: debounce,
	throttle: throttle,
	ignoreMultiClick: ignoreMultiClick
}
