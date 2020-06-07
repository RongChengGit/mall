<template>
  <div>
    <swiper>
      <template v-slot:default>
        <swiper-item v-for="(item , index) in banner" :key="index">
          <template v-slot:default>
            <a :href="item.link">
              <img :src="item.image" @load="swiperImageLoad">
            </a>
          </template>
        </swiper-item>
      </template>
    </swiper>
  </div>
</template>

<script>
import swiper from 'components/common/swiper/Swiper';
import swiperItem from 'components/common/swiper/SwiperItem'
export default {

  name : "HomeSwiper",

  props:{
    banner:{
      type:Array,
      required:true
    }
  },
  data () {
    return {
    };
  },
  mounted(){
  },
  components: {
    swiper,
    swiperItem
  },

  computed: {},

  methods: {
    swiperImageLoad(){
      this.$bus.$emit('swiperImageLoad');
    }
  }
}

</script>
<style scoped>
</style>