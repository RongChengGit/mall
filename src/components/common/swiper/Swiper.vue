<template>
  <div id="swiper">
    <div id="swiperContent" :style="swiperMoveStyle" 
        @touchstart="touchStart" 
        @touchmove="touchMove" 
        @touchend="touchEnd"
        ref="swiperContent">
      <slot></slot>
    </div>
    <div id="indicator" v-if="useIndicator">
      <div :class="indicatorClass(index)"
           @click="indicatorClick(index)" 
            v-for="index in slideCount" 
           :key="index"></div>
    </div>
    
  </div>
</template>

<script>
export default {

  name : "Swiper",

  props:{
    animeDuration:{
      type:Number,
      default:300
    },
    intervalTime:{
      type:Number,
      default:3000
    },
    useIndicator:{
      type:Boolean,
      default:true
    },
    moveRatio:{
      type:Number,
      default:0.25
    }
  },
  data () {
    return {
      currentIndex:1,
      slideCount:0,
      swiperWidth:0,
      interval:null,
      touchIndex:0,
      isScorlling:false,
      swiperMoveStyle:{}
    };
  },

  mounted(){
    setTimeout(
      ()=>{
        
        this.handleDom();
        this.startInterval();
      },this.animeDuration
    )

  },
  components: {},

  computed: {
    indicatorClass:function(){
      return function(index){
        return index==this.currentIndex||
              (index==1&&this.currentIndex==this.slideCount+1)||
              index - this.currentIndex == this.slideCount?
              {'indicator-item-active':true}:{'indicator-item':true};
          
      }
    }
  },

  methods: {
    handleDom(){
      // let swiperEl = document.getElementById('swiperContent');
      let swiperEl = this.$refs.swiperContent;
      let swiperSlides = swiperEl.getElementsByClassName('slide');
      this.slideCount = swiperSlides.length;
      this.swiperWidth = swiperEl.offsetWidth;

      let swiperCloneFirst = swiperSlides[0].cloneNode(true);
      let swiperCloneLast = swiperSlides[swiperSlides.length-1].cloneNode(true);
      
        // 前后插入两个slide方便在第一张图片和最后一张图片时无缝衔接
      swiperEl.append(swiperCloneFirst);
      swiperEl.insertBefore(swiperCloneLast,swiperSlides[0]);
      //如果数量大于1 第一次进来显示第一张图片  非第一个slide
        this.changeMoveSwiperStyle(-this.currentIndex*this.swiperWidth,false);
    },
    startInterval(){
      // 图片数量为1或没有时不开启定时器
      
      if(this.slideCount<=1){
        return;
      }
      if(this.interval) clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex*this.swiperWidth);
      }, this.intervalTime);
    },
    
    stopInterval(){
      clearInterval(this.interval);
    },
    scrollContent( distance ){
      this.isScorlling = true;
      this.changeMoveSwiperStyle(distance , true);
      this.checkPosition();
      this.isScorlling = false;
    },
    changeMoveSwiperStyle(distance ,useTransition){
      let style = {};
      // transform:translate3d(x,y,z)
      style.transition = useTransition?'all '+this.animeDuration+'ms ease .1s':'';
      style['-webkit-transition'] = useTransition?'all '+this.animeDuration+'ms ease .1s':'';
      // style.transition = 'all .5s ease 0s ';
      style.transform = 'translate3d('+distance+'px,0,0)';
      style['-webkit-transform'] = 'translate3d('+distance+'px,0,0)';
      style['-ms-transform'] = 'translate3d('+distance+'px,0,0)';
      
      this.swiperMoveStyle = style;
    },
    checkPosition(){
      setTimeout(
        ()=>{
          if(this.currentIndex >= this.slideCount+1){
            this.currentIndex = 1;
            this.changeMoveSwiperStyle(-this.currentIndex*this.swiperWidth,false);
          }else if(this.currentIndex == 0){
            this.currentIndex = this.slideCount;
            this.changeMoveSwiperStyle(-this.currentIndex*this.swiperWidth,false);
          }
        },this.animeDuration
      )
    },

    touchStart(e){
      if(this.isScorlling){
        return;
      }
      this.touchIndex = e.changedTouches['0'].pageX;
      this.stopInterval();
    },
    touchMove(e){
      if(this.isScorlling){
        return;
      }
      let curerntPosition = e.changedTouches['0'].pageX;
      let distance = curerntPosition - this.touchIndex;
      let moveDistance = distance + -this.currentIndex*this.swiperWidth;
      this.changeMoveSwiperStyle(moveDistance ,false);

    },
    touchEnd(e){
      if(this.isScorlling){
        return;
      }
      let curerntPosition = e.changedTouches['0'].pageX;
      let distance = curerntPosition - this.touchIndex;
      let movePercentage = Math.abs(distance)/this.swiperWidth;

      if(movePercentage<this.moveRatio){
        this.scrollContent(-this.currentIndex*this.swiperWidth);
        this.startInterval();

      }else if(distance>0){
        this.currentIndex--;
        this.scrollContent(-this.currentIndex*this.swiperWidth);

      }else{
        this.currentIndex++;
        this.scrollContent(-this.currentIndex*this.swiperWidth)
      }
      
      this.startInterval();
    },
    indicatorClick(index){
      this.currentIndex = index;
      this.scrollContent(-this.currentIndex*this.swiperWidth)
    }
  }
}

</script>
<style scoped>
#swiper{
  width: 100%;
  overflow: hidden;
  position: relative; 
}
#swiperContent{
  
  display: flex;
}
#indicator{
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;

}
#indicator div{
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin: 0 10px;
  /* background-color: rgba(255, 255, 255, .8); */
}
.indicator-item{
  background-color: rgba(255, 255, 255, .8);
}
.indicator-item-active{
  background-color: rgba(255, 255, 255, 1);
}
</style>