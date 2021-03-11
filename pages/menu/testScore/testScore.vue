<template>
	<view class="class-score">
		<!-- 测验成绩查询 -->
		<my-infomuation>
			<view class="p">
				<text>学年学期：</text>
				<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
			</view>
			<view class="buttons">
				<view class="button-view" @tap="onNavigateToMixin" data-url="menu/testScore/detail/detail">查询</view>
			</view>
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
.p {
	justify-content: space-between;
}
.buttons {
	margin-top: 60upx;
	display: flex;
	justify-content: center;
	padding-bottom: 70upx;
}
</style>
