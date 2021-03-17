import Vue from 'vue'
import Vuex from 'vuex'
import config from '@/common/config.js';
import utils from '@/common/util.js';
import thirdParty from '@/common/thirdParty.js'

Vue.use(Vuex)

//获取缓存信息
let user_token = utils.getStorageSync(config.varNames.USER_TOKEN),
	user_info = utils.getStorageSync(config.varNames.USER_INFO),
	menu = utils.getStorageSync(config.varNames.MENU);

const store = new Vuex.Store({
	state: {
		hasLogin: user_token ? true : false, //是否登录
		token: user_token, //用户凭证
		userinfo: user_info ? user_info : {}, //用户信息
		systemInfo: {}, //系统信息
		selectedMenu: menu || [], //选中的常用菜单
	},
	mutations: {
		login(state, token, userinfo) {
			//登录
			state.hasLogin = true;
			state.token = token;
			state.userinfo = userinfo;
		},
		logout(state) {
			//退出登录
			state.hasLogin = false;
			state.token = null;
			state.userinfo = {};
		},
		setToken(state, token) {
			state.token = token;
		},
		setSystemInfo(state, info) {
			//修改系统信息
			state.systemInfo = info;
		},
		setselectedMenu(state, menu) {
			//选中菜单
			state.selectedMenu = menu;
		},
		setUserinfo(state, userinfo) {
			//单独修改用户信息
			state.userinfo = userinfo;
		}
	},
	getters: {
		currentColor(state) {
			return state.colorList[state.colorIndex]
		}
	},
	actions: {
		// lazy loading token
		getUserToken: async function({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				if (state.token) {
					resolve(state.openid);
					return true;
				} 
				
				thirdParty.login().then(res => {
					commit('login')
					setTimeout(function() { //模拟异步请求服务器获取 token
						const token = '123456789'
						console.log('uni.request mock openid[' + token + ']');
						commit('setToken', token)
						resolve(token)
					}, 1000)
				}).catch(err => {
					console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
					reject(err)
				})
			})
		}
	}
})

export default store
