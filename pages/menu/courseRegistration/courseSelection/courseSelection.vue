<template>
	<view class="container">
		<!-- 选课-任选 -->
		<my-tab :head="head" :active.sync="active" :column="2">
			<my-tab-pane :active="active" :index="0">
				<!-- 选课报名 -->
			</my-tab-pane>
			<my-tab-pane :active="active" :index="1">
				<!-- 选课记录 -->
				<my-infomuation>
					<view class="p">说明：</view>
					<view class="p">开课：</view>
					<view class="p">学号：</view>
					<view class="p">姓名：</view>
					<view class="p">课程名称：</view>
					<view class="p">总课时：</view>
					<view class="p">学分：</view>
					<view class="p">修读方式：</view>
					<view class="p">课程大类：</view>
					<view class="p">教学班：</view>
					<view class="p">选中方式：</view>
					<view class="p">是否选中：</view>
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
					title: '选课报名'
				},{
					title: '选课记录'
				}],
				active: 0,
				limitType: ['.zip'],
				form: {
					comment: '', //备注
				}
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
.p2 {
	justify-content: flex-start;
	align-items: flex-start;
	margin-bottom: 26upx;
	display: flex;
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
