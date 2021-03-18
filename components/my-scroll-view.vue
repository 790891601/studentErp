<template>
	<scroll-view class="my-scroll-view" scroll-y @scrolltolower="onScrolltolower" @scrolltoupper="onScrolltoupper">
		<!-- <view slot="empty" v-if="!list.length"></view> -->
		<empty-view :isshow="!list.length"></empty-view>
		<block v-if="list.length">
			<slot></slot>
			<uni-load-more :status="moreStatus"></uni-load-more>
		</block>
	</scroll-view>
</template>

<script>
	export default {
		name:"my-scroll-view",
		props: {
			list: {
				type: Array,
				default: () => [],
				observer: function(newVal, oldVal) {
					console.log(newVal)
					this.tableData = newVal;
				}
			},
			defaultPageNo: {
				type: [String,Number],
				default: function() {
					return 1;
				}
			},
			defaultPageSize: {
				type: [String, Number],
				default: function() {
					return 10;
				}
			},
			height: { //高度
				type: Number,
				default: function() {
					return uni.getSystemInfoSync().screenHeight
				}
			}
		},
		mounted() {
			this.init();
		},
		data() {
			return {
				tableData: [], //内部维护的列表数据
				page: 1, //当前页
				pageSize: 10, //每页的数量
				moreStatus: 'more', //more loading noMore
				isMore: true, //是否有更多数据
			};
		},
		methods: {
			addData(data) {
				//暴露一个内部方法添加数据
				this._setMoreStatus(data);

				this.tableData = this.tableData.concat(data);
				this.$emit('update:list', this.tableData);
			},
			_setMoreStatus(data) {
				//设置获取更多的状态
				console.log(data.length, this.pageSize)
				if(data.length < this.pageSize) {
					this.isMore = false;
					this.moreStatus = 'noMore'
				}else {
					this.moreStatus = 'more'
				}
			},
			init() {
				//初始化数据
				this.page = this.defaultPageNo;
				let pageSize = this.pageSize = this.defaultPageSize;

				this._setMoreStatus(this.list);
				this.tableData = this.list;
			},
			onScrolltolower() {
				//上拉加载
				if(this.isMore) {
					//有数据，继续加载数据
					this.moreStatus = 'loading'
					this.$emit('query', this.page, this.pageSize);
				}
			},
			onScrolltoupper() {
				//下拉刷新 - 暂时不做

			}
		}
	}
</script>

<style lang="scss" scoped>
.my-scroll-view {
	height: 100%;
}
</style>
