<template>
	<view class="class-tasks">
		<!-- 上课任务 -->
		<my-infomuation>
			<view class="p">
				<text>学年学期：</text>
				<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
			</view>
			<view class="p">
				<text>课程大类：</text>
				<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
			</view>
			<view class="p">
				<text>课程分类：</text>
				<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
			</view>
			<view class="input-wrap">
				<text>课程名称：</text>
				<my-input class="selector" v-model="form.className"></my-input>
			</view>
			<view class="buttons">
				<view class="button-view" @tap="onNavigateToMixin" data-url="menu/classTasks/detail/detail">查询</view>
			</view>
		</my-infomuation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					className: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log(this.form)
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../../common/scss/button.scss";
.f-36 {
	font-size: 32upx;
}
.p {
	.selector {
		width: 70%;
	}
}
.input-wrap {
	font-size: 32upx;
	overflow: hidden;
	text {
		float: left;
	}
	.selector {
		float: left;
		width: 70%;
	}
}
.buttons {
	display: flex;
	justify-content: center;
	margin-top: 80upx;
}
</style>
