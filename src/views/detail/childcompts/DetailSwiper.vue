<template>
  <div >
    <swiper class="detail-swiper">
      <template v-slot:default>
        <swiper-item v-for="(item,index) in topImages"  :key="index">
          <template v-slot:default>
            <img :src="item">
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

  name : "DetailSwiper",

  props:{
    topImages:{
      type:Array,
      default(){
        return[];
      }
    }
  },

  data () {
    return {
    };
  },

  components: {
    swiper,
    swiperItem
  },

  computed: {},

  methods: {}
}

</script>
<style scoped>
.detail-swiper{
  height: 300px;
  overflow: hidden;
}
</style>