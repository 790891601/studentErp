<template>
	<view class="container">
		<!-- 免修申请 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 免修申请 -->
				<my-infomuation>
					<view class="p">
						<text class="field">学年学期：</text>
						<my-picker class="selector" :ranges="year" rangeKey="title" :defaultValue="form.year" @change="onChange($event, 'year')"></my-picker>
					</view>
					<view class="p">
						<text class="field">免修类型：</text>
						<my-picker class="selector" :ranges="exemptionTypes" rangeKey="title" :defaultValue="form.exemptionTypes" @change="onChange($event, 'exemptionTypes')"></my-picker>
					</view>
					<view class="p">
						<text class="field">计划类型：</text>
						<my-picker class="selector" :ranges="planType" rangeKey="title" :defaultValue="form.planType" @change="onChange($event, 'planType')"></my-picker>
					</view>
					<view class="p">
						<text class="field">免修课程：</text>
						<my-picker class="selector" :ranges="exemptionCourse" rangeKey="title" :defaultValue="form.exemptionCourse" @change="onChange($event, 'exemptionCourse')"></my-picker>
					</view>
					<view class="p">
						<text class="field">替代课程：</text>
						<my-picker class="selector" :ranges="alternativeCourse" rangeKey="title" :defaultValue="form.alternativeCourse" @change="onChange($event, 'alternativeCourse')"></my-picker>
					</view>
					<view class="p">
						<text class="field">申请说明：</text>
						<my-textarea class="selector" v-model="form.descript"></my-textarea>
					</view>
					<view class="p">
						<text class="field">附件：</text>
						<my-upload></my-upload>
					</view>
					<view class="buttons">
						<view class="button-view button-max" @tap="onAddSubmit">增加</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 申请记录 -->
			<my-tab-pane :active="active" :index="1">
				<view v-for="(item,index) in list" :key="index" @tap="onNavigateToMixin" data-url="menu/business/exemptionCourse/detail/detail" :data-id="item.id">
					<my-infomuation>
						<view class="p">免修类型：{{item.xueqi}}</view>
						<!-- <view class="p">学号：{{item.xueqi}}</view> -->
						<view class="p">姓名：{{item.xueqi}}</view>
						<!-- <view class="p">任务代码：{{item.xueqi}}</view> -->
						<view class="p">申请学期：{{item.xueqi}}</view>
						<view class="p">免修课程：{{item.xueqi}}</view>
						<!-- <view class="p">替代课程：{{item.xueqi}}</view> -->
						<view class="p">总学时：{{item.xueqi}}</view>
						<view class="p">学分：{{item.xueqi}}</view>
						<!-- <view class="p">修读方式：{{item.xueqi}}</view> -->
						<!-- <view class="p">申请时间：{{item.xueqi}}</view> -->
						<view class="p">审核状态：{{item.xueqi}}</view>
						<!-- <view class="p">审核结果：{{item.xueqi}}</view> -->
					</my-infomuation>
				</view>
			</my-tab-pane>
		</my-tab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {},
				head: [{
					title: '免修申请'
				},{
					title: '申请记录'
				}],
				active: 0,
				list: [], //列表
				form: {
					descript: '', //申请说明
				},
				year: [], //学年学期
				exemptionTypes: [], //免修类型
				planType: [], //计划类型
				exemptionCourse: [], //免修课程
				alternativeCourse: [], //替代课程
			}
		},
		onLoad(options) {
			this.options = options;
			this.loadData();
		},
		methods: {
			async loadData() {
				let random = this.$Mock.Random;
				this.alternativeCourse = this.exemptionCourse = this.planType = this.exemptionTypes = this.year = this.mock({
					'code': 0,
					'msg': '成功',
					'list|1-10': [{
						'id|+1': 1,
						'title': random.date()
					}]
				}).list;
				this.list = this.mock({
					'code': 0,
					'msg': '成功',
					'list|1-10': [{
						'id|+1': 1,
						'xueqi': random.date()
					}]
				}).list;

				// let data = {
				// }
				// try {
				// 	let res = await this.$get('', data);
				// }catch(e) {
				// 	console.log(e)
				// }
			},
			onChange(e, name) {
				this.$set(this.form, name, this[name][e]);
			},
			async onAddSubmit() {
				//免修申请
				try {
					let res = await this.$post('', data);
				}catch(e) {
					console.log(e);
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../../../common/scss/button.scss";
.selector {
	width: 70%;
}
.p {
	justify-content: space-between;
	align-items: flex-start;
}
.buttons {
	margin-top: 60upx;
	display: flex;
	justify-content: center;
	padding-bottom: 70upx;
}
</style>
