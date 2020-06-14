<template>
  <div id="detail-navbar">
    <nav-bar class="navbar">
      <template v-slot:left >
        <img src="~assets/img/common/back.svg" @click="goBackClick" alt="">
      </template>
      <template v-slot:center>
        <div class="title">
          <div v-for="(item,index) in title" 
              :key="index"
              @click="titleItemClick(index)"
              :class="{'active':index==currentIndex}"
              class="title-item">
            {{item}}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/Navbar'

export default {

  name : "DetailNavBar",

  data () {
    return {
      title:['商品','参数','评论','推荐'],
      currentIndex:0
    };
  },

  components: {
    NavBar
  },

  computed: {},

  methods: {
    goBackClick(){
      this.$router.go(-1)
    },
    titleItemClick(index){
      this.currentIndex = index;
      this.$emit('titleClick',index);
    }
  }
}

</script>
<style scoped>
#detail-navbar{
  width: 100%;
}
#detail-navbar img{
  margin-top:16px;
}
.navbar{
  background-color: #FFFFFF;
}
.title{
  display: flex;
  font-size: var(--font-size);
}
.title-item{
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
</style>