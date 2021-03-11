<template>
	<view class="class-score">
		<!-- 体测成绩 -->
		<my-infomuation>
			<view class="p">
				<text>学年学期：</text>
				<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
			</view>
			<view class="p">身高：</view>
			<view class="p">体重：</view>
			<view class="p">体重评分：</view>
			<view class="p">体重等级：</view>
			<view class="p">肺活量：</view>
			<view class="p">肺活量评分：</view>
			<view class="p">肺活量等级：</view>
			<view class="p">50米跑：</view>
			<view class="p">50米跑评分：</view>
			<view class="p">800/1000米跑：</view>
			<view class="p">800/1000米跑评分：</view>
			<view class="p">800/1000米跑等级：</view>
			<view class="p">800/1000米跑加分：</view>
			<view class="p">坐位体前屈：</view>
			<view class="p">坐位体前屈评分：</view>
			<view class="p">坐位体前屈等级：</view>
			<view class="p">立定跳远：</view>
			<view class="p">立定跳远评分：</view>
			<view class="p">立定跳远等级：</view>
			<view class="p">引体向上/仰卧起坐：</view>
			<view class="p">引体向上/仰卧起坐评分：</view>
			<view class="p">引体向上/仰卧起坐等级：</view>
			<view class="p">引体向上/仰卧起坐加分：</view>
			<view class="p">左眼裸眼视力：</view>
			<view class="p">右眼裸眼视力：</view>
			<view class="p">左眼屈光不正：</view>
			<view class="p">右眼屈光不正：</view>
			<view class="p">左眼串镜：</view>
			<view class="p">右眼串镜：</view>
			<view class="p">附加分：</view>
			<view class="p">标准总分：</view>
			<view class="p">等级：</view>
		</my-infomuation>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
@import "../../../common/scss/button.scss";
.class-score {
	margin-top: 160upx;
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
