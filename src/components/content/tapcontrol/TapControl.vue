<template>
  <div class="tab-control">
    <div class="tab-control-item" 
        :class="{'active':index==currentIndex}"
        @click="itemClick(index)" 
        v-for="(item , index) in title" 
        :key="index">
      <span >{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {

  name : "TapControl",
  props:{
    title:{
      type:Array,
      default(){
        return [ '' , '' , '' ];
      }
    }
  },
  data () {
    return {
      currentIndex:0
    };
  },

  components: {},

  computed: {},

  methods: {
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tapcontrolClick', index);
    }
  }
}

</script>
<style scoped>
.tab-control{
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 14px;
  background-color: #fff;
  position: relative;
  z-index: 998;
}
.tab-control-item{
  flex:1;
  height: 40px;
}
.tab-control-item span{
  line-height: 40px;
  padding: 5px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 2px solid var(--color-high-text);
}
</style>