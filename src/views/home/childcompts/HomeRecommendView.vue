<template>
  <div id="recommend">
    <div v-for="(item , index) in recommend" :key="index" class="recommendcontent">
      <a :href="item.link">
        <img :src="item.image">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {

  name : "HomeRecommendView",

  props:{
    recommend:{
      type:Array,
      required:true
    }
  },

  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
#recommend{
  width: 100%;
  display: flex;
  padding: 10px 0px 25px;
  border-bottom: 10px solid #EEEEEE;
}
.recommendcontent{
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.recommendcontent img{
  width: 70px;
  height: 70px;
  margin-bottom: 8px;
}
</style>