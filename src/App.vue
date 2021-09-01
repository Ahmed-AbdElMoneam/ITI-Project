<template>
  <div>
    <pageheader />
    <headermenu />
    <router-view />
    <pagefooter />
  </div>
</template>

<script>
  import pageheader from "@/components/pageheader.vue"
  import headermenu from "@/components/headermenu.vue"
  import pagefooter from "@/components/pagefooter.vue"

  export default {
    name: 'App',
    components:{
      pageheader,
      headermenu,
      pagefooter
    }
  }
</script>


<style>
  * {
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
