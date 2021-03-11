<template>
	<view>
		<!-- 班级课表查询结果 -->
		<view class="table">
			<view class="tr" v-for="item in column">
				<view class="td" v-for="item in headRow">{{item}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				headRow: ['','一', '二', '三', '四', '五', '六', '日'],
				column: ['','01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14']
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.table {
	margin-top: 160upx;
	.td {
		border: 1px solid #007AFF;
		background-color: #fff;
		width: 12.5vw;
		height: 12.5vw;
		line-height: 12.5vw;
		text-align: center;
		box-sizing: border-box;
		float: left;
	}
}
</style>
