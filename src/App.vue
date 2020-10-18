<template>
  <div id="app">
    <div class="nav" :class="{'close':!navOpen}">
      <nav-bar></nav-bar>
    </div>
    <div class="main">
      <router-view></router-view> 
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  components:{
    navBar: () => import("@/components/navbar")
  },
  computed:{
        ...mapGetters([
            'navOpen'
        ])
    },
  data(){
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
#app{
  background: $background;
  height:100%;
  width:100%;
  display: flex;
  .nav{
    width:200px;
    transition:all .5s;
    &.close{
      width:50px;
    }
  }
  .main{
    flex:1;
  }
}
</style>
