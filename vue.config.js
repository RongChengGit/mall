// 额外的vue配置可以在这里进行添加
module.exports = {
  productionSourceMap:false,
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
        'store':'@/store'
      }
    }
  }
}