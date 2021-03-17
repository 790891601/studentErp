<template>
	<view class="container">
		<!-- 毕业选题 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 全部题目 -->
				<my-infomuation>
					<view class="p">题目名称：</view>
					<view class="p">英文名称：</view>
					<view class="p">简介：</view>
					<view class="p">知识要求：</view>
					<view class="p">考核指标：</view>
					<view class="p">指导老师：</view>
					<view class="p">联系电话：</view>
					<view class="p">院系：</view>
					<view class="p">题目类型：</view>
					<view class="p">题目性质：</view>
					<view class="p">毕设场所：</view>
					<view class="p">题目来源：</view>
					<view class="p">选题时间起：</view>
					<view class="p">选题时间止：</view>
					<view class="p">限选：</view>
					<view class="p">认定人数：</view>
					<view class="buttons">
						<view class="button-view button-max" @tap="onSubmit">报名</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 已选题目 -->
			<my-tab-pane :active="active" :index="1">
				<my-infomuation>
					<view class="p">题目名称：</view>
					<view class="p">英文名称：</view>
					<view class="p">简介：</view>
					<view class="p">知识要求：</view>
					<view class="p">考核指标：</view>
					<view class="p">指导老师：</view>
					<view class="p">院系：</view>
					<view class="p">题目来源：</view>
					<view class="p">题目类型：</view>
					<view class="p">题目性质：</view>
					<view class="p">毕设场所：</view>
					<view class="p">选题时间起：</view>
					<view class="p">选题时间止：</view>
					<view class="p">限选：</view>
					<view class="p">认定人数：</view>
					<view class="p">附件：</view>
				</my-infomuation>
			</my-tab-pane>
		</my-tab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				head: [{
					title: '全部题目'
				},{
					title: '已选题目'
				}],
				active: 0
			}
		},
		methods: {
			onSubmit() {
				//报名
				console.log(this.form);
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../../../common/scss/button.scss";
.selector {
	width: 60%;
}
.p {
	justify-content: space-between;
	align-items: flex-start;
}
.buttons {
	margin-top: 60upx;
	display: flex;
	justify-content: space-between;
	padding-bottom: 70upx;
}
.hr {
	margin-top: 120upx;
}
</style>
