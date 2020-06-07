<template>
  <div id="detail-view">
    <detail-nav-bar ></detail-nav-bar>
    <scroll class="scroll-content" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods-base-info="goodsBaseInfo"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info 
        :goods-detail-images="goodsDetailImages"
        @imgLoad="imgLoad"></detail-goods-info>
      <detail-goods-params :goods-params="goodsParams"></detail-goods-params>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/BScroll'

import DetailNavBar from './childcompts/DetailNavBar'
import DetailSwiper from './childcompts/DetailSwiper'
import DetailBaseInfo from './childcompts/DetailBaseInfo'
import DetailShopInfo from './childcompts/DetailShopInfo'
import DetailGoodsInfo from './childcompts/DetailGoodsInfo'
import DetailGoodsParams from './childcompts/DetailGoodsParams'

import {
  getDetail
} from 'network/detail_request'
import{
  GoodsBaseInfo,
  Shop,
  GoodsParams
} from 'network/detail_beans/detail_beans'
export default {

  name : "Detail",

  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParams
  },

  data () {
    return {
      detailId:null,
      topImages:[],
      goodsBaseInfo:{},
      shop:{},
      goodsDetailImages:{},
      goodsParams:{}
    };
  },

  created(){
    this.detailId = this.$route.query.id;
    this.getCommodityDetail();
  },

  methods: {
    imgLoad(){
      this.$refs.scroll.scroll.refresh();
    },
    getCommodityDetail(){
      getDetail(this.detailId).then(
        (res)=>{
          console.log(res);
          let data = res.result;
          // 轮播图数据
          this.topImages = data.itemInfo.topImages;
          // 商品基础信息 标题价格相关服务等
          this.goodsBaseInfo = new GoodsBaseInfo(data.columns , data.itemInfo ,data.shopInfo);
          // 商家信息
          this.shop = new Shop(data.shopInfo);
          // 商品详细图片
          this.goodsDetailImages = data.detailInfo;
          // 商品参数
          this.goodsParams = new GoodsParams(data.itemParams.info , data.itemParams.rule);
        }
      )
    }
  }
}

</script>
<style scoped>
#detail-view{
  position: relative;
  z-index: 10;
  height: 100vh;
  background-color: #FFFFFF;
}
.scroll-content{
  height: calc(100% - 44px);
}
</style>