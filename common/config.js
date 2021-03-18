export default {
	appName: '广东工业大学教务系统',
	requestDomain:'https://www.aa.cn/index.php?s=/api/',
	wxapp_id:10001, //测试环境10001,正式环境10002
	varNames: {
		USER_TOKEN: 'user_token', //用户token
		MENU: 'menu', //菜单
		USER_INFO: 'userinfo', //用户信息
		
		//uni-load-more 加载状态
		MORE: 'more', //loading前
		LOADING: 'loading',  //loading中
		MOMORE: 'moMore',  //没有更多数据
	}
}
