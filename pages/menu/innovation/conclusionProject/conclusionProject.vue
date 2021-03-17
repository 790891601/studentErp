<template>
	<view class="container">
		<!-- 课题结题申报 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 增加申请 -->
				<my-infomuation>
					<view class="p">
						<text class="field">课题编号：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="p">
						<text class="field">课题名称：</text>
						<my-picker class="selector" :ranges="moduleRanges" :defaultKey="2" :defaultValue.sync="defaultValue"></my-picker>
					</view>
					<view class="buttons">
						<view class="button-view button-max" @tap="onAddSubmit">提交</view>
					</view>
				</my-infomuation>
			</my-tab-pane>
			<!-- 申请记录 -->
			<my-tab-pane :active="active" :index="1">
				<my-infomuation>
					<view class="p">课题编号：</view>
					<view class="p">课题名称：</view>
					<view class="p">申请结题时间：</view>
					<view class="p">结题说明：</view>
					<view class="p">材料说明：</view>
					<view class="p">申请时间：</view>
					<view class="p">认定教师：</view>
					<view class="p">审核状态：</view>
					<view class="p">审核结果：</view>
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
					title: '增加申请'
				},{
					title: '申请记录'
				}],
				active: 0
			}
		},
		methods: {
			onAddSubmit() {
				//增加申请
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
