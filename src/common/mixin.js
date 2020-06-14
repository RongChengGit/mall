// 使用混入 mixin
// 此处导出一个对象
export const imgLoadListener = {

  // 1.混入对象中可以使用vue的生命周期函数  生命周期函数会和组件中的生命周期函数合并
  //  注意  混入的生命周期函数执行顺序在组件的之前
  // 2.混入对象中可以使用data声明变量  
  //  注意  当混入中的变量与组件中的变量重名时  组件中的变量优先级更高 遵循就近原则 使用组件的变量
  // 3.混入对象中的methods中可以声明函数
  //  注意  当混入中的函数与组件中的函数重名时  组件中的函数优先级更高 调用的是组件中的同名函数

  // 这里将home和detail中的mounted监听imgload的重复代码进行抽离 使用混入的方式在组件中使用
  // 使用方式  在组件中与生命周期函数同级 声明mixins:[混入对象名] 

  mounted(){
    
    this.$bus.$on('goodsImgLoad' , this.scrollRefresh );
  }
}

import GoTop from 'components/content/gotop/GoTop'
export const backToTopTemplate = {
  data(){
    return{
      showBackToTop:false,
    }
  },
  components:{
    GoTop
  },
  methods:{
    goTopClick(){
      this.$refs.scroll.scrollTo( 0 , 0 );
    },
  }
}