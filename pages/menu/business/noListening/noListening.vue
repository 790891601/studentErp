<template>
	<view class="container">
		<!-- 免听申请 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 免听申请 -->
				<my-infomuation>
					<view class="p">
						<text class="field">学年学期：</text>
						<my-picker class="selector" :ranges="year" rangeKey="title" :defaultValue="form.year.title" @change="onChange($event, 'year')"></my-picker>
					</view>
					<view class="p">
						<text class="field">课程名称：</text>
						<my-input class="selector" v-model="form.className"></my-input>
					</view>
					<view class="p">
						<text class="field">免听原因：</text>
						<my-textarea class="selector" v-model="form.reason"></my-textarea>
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
				<view v-for="(item,index) in list" :key="index" @tap="onNavigateToMixin" data-url="menu/business/noListening/detail/detail" :data-id="item.id">
					<my-infomuation>
						<view class="p">开课学期：{{item.xueqi}}</view>
						<!-- <view class="p">学号：{{item.xueqi}}</view> -->
						<view class="p">姓名：{{item.xueqi}}</view>
						<view class="p">免听课程：{{item.xueqi}}</view>
						<!-- <view class="p">总学时：{{item.xueqi}}</view> -->
						<!-- <view class="p">教学班：{{item.xueqi}}</view> -->
						<view class="p">申请时间：{{item.xueqi}}</view>
						<!-- <view class="p">申请原因：{{item.xueqi}}</view> -->
						<view class="p">审核状态：{{item.xueqi}}</view>
						<view class="p">审核结果：{{item.xueqi}}</view>
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
				head: [{
					title: '免听申请'
				},{
					title: '申请记录'
				}],
				active: 0,
				year: [], //学期学年
				form: {
					className: '', //课程名称
					reason: '' //免听原因
				},
				list: []
			}
		},
		onLoad(options) {
			this.options = options;
			this.loadData();
		},
		methods: {
			async loadData() {
				let random = this.$Mock.Random;
				this.year = this.mock({
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
			onAddSubmit() {
				//免听申请

			},
			onChange(e, name) {
				this.$set(this.form, name, this[name][e]);
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
