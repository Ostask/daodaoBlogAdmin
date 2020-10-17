<template>
  <div id="app">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
export default {
  components:{
    navBar: () => import("@/components/navbar")
  }
}
</script>

<style lang="scss" scoped>
#app{
  background: $background;
  height:100%;
}
</style>
