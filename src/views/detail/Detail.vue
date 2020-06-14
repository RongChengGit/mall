<template>
  <div id="detail-view">
    <detail-nav-bar 
      @titleClick="navbarClick" ref="detailNavbar"></detail-nav-bar>
    <scroll 
      class="scroll-content" 
      ref="scroll"
      :probe-type="probeType"
      @scroll="contentScroll"
      >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods-base-info="goodsBaseInfo"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info 
        :goods-detail-images="goodsDetailImages"
        @imgLoad="imgLoad"></detail-goods-info>
      <detail-goods-params ref="detailParams" :goods-params="goodsParams"></detail-goods-params>
      <detail-comment ref="detailComment" :comment-info="commentInfo"></detail-comment>
      <detail-recommend ref="detailRecommend" :goods-list="goodsList"></detail-recommend>
    </scroll>
    <detail-bottom-bar @addShopCar="addShopCar"></detail-bottom-bar>
    <go-top @click.native="goTopClick" v-show="showBackToTop"></go-top>
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
import DetailComment from './childcompts/DetailComment'
import DetailRecommend from './childcompts/DetailRecommend'
import DetailBottomBar from './childcompts/DetailBottomBar'

import { debounce } from 'common/utils'
import { backToTopTemplate } from 'common/mixin'

// import { ACT_ADD_PRODUCT } from 'store/mutation_types'
// 将acitons合并进组件的methods中用法与mapGetters一样
import {mapActions} from 'vuex'

import {
  getDetail,
  getDetailRecommend
} from 'network/detail_request'
import{
  GoodsBaseInfo,
  Shop,
  GoodsParams
} from 'network/detail_beans/detail_beans'

export default {

  name : "Detail",

  mixins:[backToTopTemplate],

  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailComment,
    DetailRecommend,
    DetailBottomBar
  },

  data () {
    return {
      probeType:3,
      detailId:null,
      topImages:[],
      goodsBaseInfo:{},
      shop:{},
      goodsDetailImages:{},
      goodsParams:{},
      commentInfo:{},
      goodsList:[],
      templateOffsets:[],
      currentIndex:0,
      isScrollTo:false,
      detailDebounce:null,
    };
  },

  created(){
    this.detailId = this.$route.query.id;
    this.getCommodityDetail();
    this.detailDebounce = debounce(this.changeScrollStatu , 500);
  },

  methods: {
    ...mapActions(['addProduct']),
    imgLoad(){
      // 监听图片加载  加载完毕刷新scroll的可滚动区域
      this.$refs.scroll.scroll.refresh();
      // 监听这一系列大图的加载 大图对各组件的位置有很大的影响
      // 加载完毕后获取标题中对应组件的坐标
      // 获取的组件坐标有一个navbar的高度误差 需要加一个navbar高度  这个误差与scroll的高度有关
      let navbarHeight = this.$refs.detailNavbar.$el.offsetHeight;
      let tempArray = [];
      
      tempArray.push(0);
      tempArray.push(-this.$refs.detailParams.$el.offsetTop+navbarHeight);
      tempArray.push(-this.$refs.detailComment.$el.offsetTop+navbarHeight);
      tempArray.push(-this.$refs.detailRecommend.$el.offsetTop+navbarHeight);

      tempArray.push(-Number.MAX_VALUE);
      
      this.templateOffsets = tempArray;

    },
    // 监听滚动
    contentScroll(position){
      
      this.showBackToTop = position.y < -1000;
      // 通过点击标题滚动时不进行监听
      if(this.isScrollTo) return;
      // for in 多用来遍历对象 i代表key默认为字符串  数组的key相当于是下标
      let length = this.templateOffsets.length;
      for(let i in this.templateOffsets){
        
        let index =  parseInt(i);
        // curentIndex!=index  即在相同的时候不做操作避免多次运行
        // 在当前所在区域发生改变时再进行相应的更新
        // if(this.currentIndex!=index &&(
        //   // 除开最后一个组件的坐标位置  前面的其他坐标判断时要判断是否在两个组件之间的区域
        //     ( index < length-1 
        //       && position.y <= this.templateOffsets[index] 
        //       && position.y > this.templateOffsets[index+1])
        //     ||
        //     // 针对最后一个区域只需要判断是否小于就行  再向后判断会出现数组越界
        //     ( index === length-1 && position.y <= this.templateOffsets[index])
        //   )
        // ){
        //       this.currentIndex = index;
        //       this.$refs.detailNavbar.currentIndex = index;
        // };

        // 另一种写法 可能会占用更多空间 但是会提升这段代码的性能
        // 在存组件坐标的数组中的最后push一个数字的最大值 Number.MAX_VALUE
        // 每次都判断是否在当前组件坐标和下一个坐标的区间中 循环次数减一
        // 空间换时间 优化性能的一种方法
        if(index == this.templateOffsets.length-1)break;
        if(this.currentIndex!=index&&(
          // 由于在数组最后一位加上了数字最大值不用担心数组越界
          position.y <= this.templateOffsets[index] && position.y > this.templateOffsets[index+1]
        )){
              this.currentIndex = index;
              this.$refs.detailNavbar.currentIndex = index;
        }
      }
      
    },
    navbarClick(index){
      this.isScrollTo = true;
      this.$refs.scroll.scrollTo( 0 , this.templateOffsets[index] );
      this.detailDebounce();
      
    },
    addShopCar(){
      let product = {};
      product.id = this.goodsBaseInfo.iid;
      product.img = this.topImages[0];
      product.title = this.goodsBaseInfo.title;
      product.desc = this.goodsBaseInfo.desc;
      product.price = this.goodsBaseInfo.realPrice;
      product.count = 1;
      // 直接使用合并的actions
      this.addProduct(product).then(
        res=>{
          this.$toast.show(res);
        }
      ).catch(
        err=>{
          this.$toast.show(err);
        }
      )
      
    },
    changeScrollStatu(){
      this.isScrollTo = false;
    },
    getCommodityDetail(){
      getDetail(this.detailId).then(
        (res)=>{
          let data = res.result;
          // console.log(data);
          
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
          // 评论数据
          this.commentInfo = data.rate;
        }
      ),
      getDetailRecommend().then(
        res=>{
          this.goodsList = res.data.list;
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
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}

</style>