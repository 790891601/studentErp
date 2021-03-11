import Vue from 'vue'
import App from './App'
import store from './store'
import Mixins from '@/common/mixins/index';
import myInfoMuation from '@/components/my-infomuation.vue'
import myTab from '@/components/my-tab/my-tab.vue'
import myTabPane from '@/components/my-tab/my-tab-pane.vue'
import myPicker from '@/components/my-picker.vue'
import myInput from '@/components/my-input.vue'

Vue.config.productionTip = false

Vue.component('my-tab', myTab)
Vue.component('my-tab-pane', myTabPane)
Vue.component('my-infomuation', myInfoMuation)
Vue.component('my-picker', myPicker);
Vue.component('my-input', myInput);

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
