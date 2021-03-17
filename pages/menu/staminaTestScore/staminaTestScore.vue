<template>
	<view class="container">
		<!-- 体测成绩 -->
		<view>
			<my-infomuation>
				<view class="p">
					<text>学年学期：</text>
					<my-picker class="selector" :ranges="year" rangeKey="title" :defaultValue="form.year.title" @change="onChange"></my-picker>
				</view>
				<view class="p">身高：{{detail.title}}</view>
				<view class="p">体重：{{detail.title}}</view>
				<view class="p">体重评分：{{detail.title}}</view>
				<view class="p">体重等级：{{detail.title}}</view>
				<view class="p">肺活量：{{detail.title}}</view>
				<view class="p">肺活量评分：{{detail.title}}</view>
				<view class="p">肺活量等级：{{detail.title}}</view>
				<view class="p">50米跑：{{detail.title}}</view>
				<view class="p">50米跑评分：{{detail.title}}</view>
				<view class="p">800/1000米跑：{{detail.title}}</view>
				<view class="p">800/1000米跑评分：{{detail.title}}</view>
				<view class="p">800/1000米跑等级：{{detail.title}}</view>
				<view class="p">800/1000米跑加分：{{detail.title}}</view>
				<view class="p">坐位体前屈：{{detail.title}}</view>
				<view class="p">坐位体前屈评分：{{detail.title}}</view>
				<view class="p">坐位体前屈等级：{{detail.title}}</view>
				<view class="p">立定跳远：{{detail.title}}</view>
				<view class="p">立定跳远评分：{{detail.title}}</view>
				<view class="p">立定跳远等级：{{detail.title}}</view>
				<view class="p">引体向上/仰卧起坐：{{detail.title}}</view>
				<view class="p">引体向上/仰卧起坐评分：{{detail.title}}</view>
				<view class="p">引体向上/仰卧起坐等级：{{detail.title}}</view>
				<view class="p">引体向上/仰卧起坐加分：{{detail.title}}</view>
				<view class="p">左眼裸眼视力：{{detail.title}}</view>
				<view class="p">右眼裸眼视力：{{detail.title}}</view>
				<view class="p">左眼屈光不正：{{detail.title}}</view>
				<view class="p">右眼屈光不正：{{detail.title}}</view>
				<view class="p">左眼串镜：{{detail.title}}</view>
				<view class="p">右眼串镜：{{detail.title}}</view>
				<view class="p">附加分：{{detail.title}}</view>
				<view class="p">标准总分：{{detail.title}}</view>
				<view class="p">等级：{{detail.title}}</view>
			</my-infomuation>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: {}, //详细信息
				year: [],
				form: {
					year: {}
				}
			}
		},
		onLoad(options) {
			this.loadData();
		},
		methods: {
			async loadData() {
				let random = this.$Mock.Random;
				this.detail = this.mock({
					'id|+1': 1,
					'title': random.date()
				});
				this.year = this.mock({
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
				// 	console.log(e)
				// }
			},
			onChange(e) {
				this.form.year = this.year[e];
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../../common/scss/button.scss";
.container {
	padding-top: 30upx;
}
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
