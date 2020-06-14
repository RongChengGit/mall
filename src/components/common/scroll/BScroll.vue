<template>
  <div  ref="wrapper">
    <div >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
import PullUp from '@better-scroll/pull-up';
import PullDown from '@better-scroll/pull-down'; 
export default {

  name : "BScroll",

  data () {
    return {
      scroll:null
    };
  },

  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },

  mounted(){
    // 通过$refs.refsname获得的对象是唯一对象不会被classname干扰 特别是使用querySelector会被干扰
    // 如果ref绑定在组件上  获取的是组件对象
    // 如果ref绑定在普通html标签上  获取的是元素对象
    let wrapperEl = this.$refs.wrapper;
    
    BScroll.use(PullUp);
    BScroll.use(PullDown);

    setTimeout(
      ()=>{
        this.scroll = new BScroll(wrapperEl , {
          // 实时监听滚动
          probeType:this.probeType,
          // 开启内部组件的点击事件  默认会阻止
          click:true,
          // 下拉刷新
          // pullDownRefresh:{
          //   threshold:30,
          //   stop:0
          // },
          // // 上拉刷新
          pullUpLoad:this.pullUpLoad
        });
        
        if(this.probeType == 2||this.probeType == 3){
          this.scroll.on('scroll' , 
            (position)=>{
              // console.log(position);
              this.$emit('scroll' , position);
            }
          );
        };
        if(this.pullUpLoad){
          this.scroll.on('pullingUp',
            ()=>{
              this.$emit('scrollPullUp');
            }
          );
        }
        // this.scroll.on('pullingDown',
        //   ()=>{
        //     console.log('下拉刷新');
        //     this.scroll.finishPullDown();
        //     this.scroll.refresh();
        //   }
        // )
      },300
    )
    
  },

  components: {},

  computed: {},

  methods: {
    // 自己封装scrollTo方法  方便调用  time=500是给time这个变量一个默认值
    scrollTo(x ,y , time=500){
      this.scroll.scrollTo( x , y ,time);
    }
  }
}

</script>
<style scoped>
</style>