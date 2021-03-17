<template>
	<view class="container">
		<!-- 课程成绩 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<my-infomuation>
					<view class="p">
						<text class="field">学年学期：</text>
						<my-picker class="selector" :ranges="yearSemester" rangeKey="title" :defaultValue="form.yearSemester.title" @change="onChange($event, 'yearSemester')"></my-picker>
					</view>
					<view class="p">
						<text class="field">计划类型：</text>
						<my-picker class="selector" :ranges="planType" rangeKey="title" :defaultValue="form.planType.title" @change="onChange($event, 'planType')"></my-picker>
					</view>
					<view class="buttons">
						<view class="button-view button-max" @tap="onNavigateToMixin" data-url="menu/classScore/classScore/classScore">查询</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 成绩加分申请 -->
			<my-tab-pane :active="active" :index="1" class="pane2">
				<my-infomuation>
					<view class="p">
						<text class="field">学年学期：</text>
						<my-picker class="selector" :ranges="yearSemester" rangeKey="title" :defaultValue="form2.yearSemester.title" @change="onChange2($event, 'yearSemester')"></my-picker>
					</view>
					<view class="buttons">
						<view class="button-view button-max" @tap="onNavigateToMixin" data-url="menu/classScore/classPlusScore/classPlusScore">查询</view>
					</view>
				</my-infomuation>
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
					title: '课程成绩'
				},{
					title: '成绩加分申请'
				}],
				active: 0,
				form: {
					yearSemester: '',
					planType: ''
				},
				form2: {
					yearSemester: ''
				},
				yearSemester: [], //学年学期
				planType: [], //计划类型
			}
		},
		onLoad(options) {
			this.options = options;
			this.loadData();
		},
		methods: {
			async loadData() {
				let random = this.$Mock.Random;
				this.yearSemester = this.mock({
					'code': 0,
					'msg': '成功',
					'list|1-10': [{
						'id|+1': 1,
						'title': random.date()
					}]
				}).list;
				this.planType = this.mock({
					'code': 0,
					'msg': '成功',
					'list|1-10': [{
						'id|+1': 1,
						'title': random.date()
					}]
				}).list;

				// let data = {

				// }
				// try {
				// 	let res = await this.$get('', data);
				// }catch(e) {
				// 	console.log(e);
				// }
			},
			onChange(e, name) {
				this.$set(this.form, name, this[name][e]);
			},
			onChange2(e, name) {
				this.$set(this.form2, name, this[name][e]);
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../../common/scss/button.scss";
.selector {
	width: 70%;
}
.buttons {
	margin-top: 60upx;
	display: flex;
	justify-content: center;
	padding-bottom: 70upx;
}
</style>
