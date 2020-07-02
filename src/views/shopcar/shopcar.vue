<template>
  <div id="shop-car">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物车({{productListLength}})</div>
      </template>
    </nav-bar>
    <shopcar-content></shopcar-content>
    <shopcar-bottom-bar></shopcar-bottom-bar>
  </div>
</template>

<script>
 
import NavBar from 'components/common/navbar/Navbar'

import ShopcarContent from './childcompts/ShopcarContent'
import ShopcarBottomBar from './childcompts/ShopcarBottomBar'

import {mapGetters} from 'vuex'
// 使用vuex中的辅助函数 将vuex中的getter导入到局部组件的计算属性中
// ...mapGetter([]) 数组写法名字不变
// ...mapGetter({}) 对象写法 key为在组件中的新名字 value为对应的getter
export default {

  name : "Shopcar",

  data () {
    return {
    };
  },

  components: {
    NavBar,
    ShopcarContent,
    ShopcarBottomBar
  },

  computed: {
    ...mapGetters(['productListLength']),
  },

  methods: {}
}

</script>
<style scoped>
#shop-car{
  height: 100vh;
  width: 100vw;
}
.nav-bar{
  background-color: var(--color-tint);
  color: #FFFFFF;
}
</style>