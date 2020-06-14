<template>
  <div class="check-button" 
      :class="{'active':checked}"></div>
</template>

<script>
export default {

  name : "CheckButton",

  props:{
    checked:{
      type:Boolean,
      default(){
        return false
      }
    }
  },

  data () {
    return {

    };
  },

}

</script>
<style scoped>
.check-button{
  height: 20px;
  width: 20px;
  border: 1px solid #CCCCCC;
  border-radius: 10px;
  background: #FAFAFA;
}
.active{
  border: 1px solid var(--color-tint);
  background: url(~assets/img/shopcar/tick.svg) no-repeat ;
  background-color: var(--color-tint);
  background-size: 10px 10px;
  background-position: 4px 5px;
}
</style>