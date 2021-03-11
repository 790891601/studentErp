<template>
	<view>
		<!-- 空闲教室查询结果 -->
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
				headRow: ['教室','一', '二', '三', '四', '五', '六'],
				column: ['','01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14']
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.table {
	margin: 160upx auto 0;
	padding-bottom: 50upx;
	width: 91vw;
	.td {
		border: 1px solid #999;
		background-color: #fff;
		width: 13vw;
		height: 13vw;
		line-height: 13vw;
		text-align: center;
		box-sizing: border-box;
		float: left;
	}
}
</style>
