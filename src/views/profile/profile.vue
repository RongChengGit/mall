<template>
  <div class="profile">
    <profile-user-info></profile-user-info>
    <profile-page-list></profile-page-list>
  </div>
</template>

<script>

import ProfileUserInfo from './childcompts/ProfileUserInfo'
import ProfilePageList from './childcompts/ProfilePageList'

export default {

  name : "profile",

  data () {
    return {
    };
  },

  components: {
    ProfileUserInfo,
    ProfilePageList
  },

  computed: {},

  methods: {}
}

</script>
<style scoped>
.profile{
  width: 100vw;
  height: 100vh;
  background-color: #FAFAFA;
  padding-top: 15px;
}
</style>