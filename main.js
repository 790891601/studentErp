import Vue from 'vue'
import App from './App'
import store from './store'
import config from '@/common/config.js'
import Mixins from '@/common/mixins/index';
import request from '@/common/request.js'
import utils from '@/common/util.js';
import thirdParty from '@/common/thirdParty.js'
import myInfoMuation from '@/components/my-infomuation.vue'
import myTab from '@/components/my-tab/my-tab.vue'
import myTabPane from '@/components/my-tab/my-tab-pane.vue'
import myPicker from '@/components/my-picker.vue'
import myInput from '@/components/my-input.vue'
import myTextarea from '@/components/my-textarea.vue'
import myUpload from '@/components/my-upload.vue'
import Mock from 'mockjs'

if(process.env.NODE_ENV === 'development') {
	//开发环境
	Vue.prototype.mock = function(mockOption, count = 10) {
		let data = Mock.mock(mockOption);

		return data;
	}
	Vue.prototype.$Mock = Mock;
}

Vue.config.productionTip = false

Vue.component('my-tab', myTab);
Vue.component('my-tab-pane', myTabPane);
Vue.component('my-infomuation', myInfoMuation);
Vue.component('my-picker', myPicker);
Vue.component('my-input', myInput);
Vue.component('my-textarea', myTextarea);
Vue.component('my-upload', myUpload);

Vue.prototype.$thirdParty = thirdParty;
Vue.prototype.$config = config;
Vue.prototype.$utils = utils;
Vue.prototype.$request = request.request;
Vue.prototype.$get = request.get;
Vue.prototype.$post = request.post;


Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
Vue.prototype.$adpid = "1111111111"

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
