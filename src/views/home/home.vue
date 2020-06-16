<template>
  <div id="home">
    <home-nav-bar></home-nav-bar>
    <tap-control 
      :title="['流行','新款','精选']" 
      class="tap-control" 
      @tapcontrolClick="tapcontrolClick"
      v-show="!showTrueTap"
      ref="tapcontrolHide"
      >
    </tap-control>
    <scroll id="scroll" ref="scroll" 
      @scroll="contentScroll" 
      @scrollPullUp="scrollPullUpLoad"
      :probe-type="probeType"
      :pull-up-load="true"
      >
      <template v-slot:default>
        <home-swiper :banner="banner"></home-swiper>
        <home-recommend-view :recommend="recommend"></home-recommend-view>
        <home-week-recommend></home-week-recommend>
        <tap-control 
          :title="['流行','新款','精选']" 
          class="tap-control" 
          @tapcontrolClick="tapcontrolClick"
          v-show="showTrueTap"          
          ref="tapcontrol"
          >
        </tap-control>
        <goods-list :goodsList="goodsList"></goods-list>
      </template>
    </scroll>
    <!-- 如果需要直接监听组件的事件  需要加上.native修饰符 -->
    <go-top @click.native="goTopClick" v-show="showBackToTop"></go-top>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/BScroll'

import TapControl from 'components/content/tapcontrol/TapControl'
import GoodsList from 'components/content/goodslist/GoodsList'

import HomeNavBar from './childcompts/HomeNavBar'
import HomeSwiper from './childcompts/HomeSwiper'
import HomeRecommendView from './childcompts/HomeRecommendView'
import HomeWeekRecommend from './childcompts/HomeWeekRecommend'

import {
  getHomeMultiData,
  getHomeGoodsData
} from 'network/home_request'
import {
  debounce
} from 'common/utils'
import {backToTopTemplate} from 'common/mixin'
export default {

  name : "home",

  mixins:[backToTopTemplate],

  components: {
    Scroll,
    TapControl,
    GoodsList,
    HomeNavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeWeekRecommend,
  },

  data () {
    return {
      banner:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      probeType:3,
      tapControlOffset:0,
      showTrueTap:true,
      saveY:0
    };
  },

  created(){
    
  },
  mounted(){
    
    this.getHomeMultiData();
    this.getHomeGoodsData('pop');
    this.getHomeGoodsData('new');
    this.getHomeGoodsData('sell');
    this.$bus.$on('goodsImgLoad' , this.newRefresh());
    this.$bus.$on('swiperImageLoad' , debounce(this.getTapControlOffset),300);

    // 普通元素可以直接拿到元素对象this.$refs.el 
    // 组件标签拿到的是组件对象 如果使用内部元素的属性需要使用$el
    // 拿到的元素位置由于图片未加载完导致不准确
    // 监听swiper中的图片加载 这里的图片加载影响很大
    // console.log(this.$refs.tapcontrol.$el.offsetTop);
    
  },
  computed: {
    goodsList:function(){
      return this.goods[this.currentType].list;
    }
  },

  methods: {
    // 监听事件总线 返回防抖函数
    newRefresh(){
      return debounce(this.scrollRefresh , 500);
    },

    tapcontrolClick(index){
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tapcontrol.currentIndex = index;
      this.$refs.tapcontrolHide.currentIndex = index;
      
    },
    // 监听swiper中的图片加载 加载完毕后获取tapcontrol的offset
    getTapControlOffset(){
      this.tapControlOffset = this.$refs.tapcontrol.$el.offsetTop - this.$refs.tapcontrol.$el.offsetHeight;
    },
    // 监听当前dom的更新 更新完成后刷新scroll
    scrollRefresh(){
      this.$refs.scroll.scroll.refresh();
    },
    scrollFinishPullUp(){
      this.$refs.scroll.scroll.finishPullUp()
    },

    contentScroll(position){
      this.showBackToTop = position.y < -1000;
      this.showTrueTap = -position.y < this.tapControlOffset;
    },

    scrollPullUpLoad(){
      this.getHomeGoodsData(this.currentType);
    },

    getHomeMultiData(){
      getHomeMultiData().then(
        res=>{
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        }
      )
    },

    getHomeGoodsData(type){
      let page = this.goods[type].page+1;
      getHomeGoodsData(type , page).then(
        res=>{
          // 这里使用...运算符更合理  循环的方法也行不过比较笨
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page++;

          // 设置规定时间后完成上拉加载的动作 完成后才能进行下次的上拉
          // 也是避免短时间的多次上拉动作
          setTimeout(
            ()=>{
              this.scrollFinishPullUp();
            },1000
          );
        }
      )
    }
  },
  activated(){
    if(!this.$refs.scroll.scroll) return;
    this.$bus.$on('goodsImgLoad',this.newRefresh());
    this.scrollRefresh();
    this.$refs.scroll.scrollTo( 0 , this.saveY , 0);
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y;
    this.$bus.$off('goodsImgLoad');
    
  }
}

</script>
<style scoped>
#home{
  height: 100vh;
  position: relative;
}
/* .tap-control{ */
  /* 粘性定位  
     用法类似其他的定位属性  
     实际效果  在到达给定的位置时将粘滞在当前位置 类似fixed定位  
     此定位是动态的
     手机端适用性更好  但是pc端有一些浏览器不支持所以用的也少
     推荐使用监听scroll事件更改样式的方式完成效果
  */

  /* position: sticky ;
  top:44px */
/* } */
/* 使用betterscroll一定要给上定位否则会出现不滚动的现象 */
#scroll{
  width: 100%;
  height: calc( 100% - 44px - 49px);
  /* height: 500px; */
   overflow: hidden;
  /*position: absolute;
    bottom: 0px; */
}
</style>