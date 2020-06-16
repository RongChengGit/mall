module.exports={
  plugins:{
    autoprefixer:{},
    'postcss-px-to-viewport':{
      // 视窗宽度 设计稿为标准
      viewportWidth:320,
      // 视窗高度
      viewportHeight:667,
      // 指定转化为vw
      viewportUnit:'vw',
      // 最小的转化单位  小于20px不转化
      minPixelValue:20,
      // 媒体查询内部单位是否需要转化
      mediaQuery:false,
      // 转化单位后保留的精度 部分计算后可能不能整除
      unitPrecision:5,
      // 转化黑名单  名单内的class不会进行转化
      // selectorBlackList:['tabbar']
    }
  }
}