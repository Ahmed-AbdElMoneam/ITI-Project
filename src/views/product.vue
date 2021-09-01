<template>
  <div class="product">
    <div class="container">
       <carouselproduct />
       <othercomponents />
    </div>
  </div>
</template>

<script>
  import carouselproduct from '../components/carouselproduct.vue'
  import othercomponents from '../components/othercomponents.vue'
  export default {
    components: { carouselproduct, othercomponents },
    name: "product"
  }
</script>

<style>

</style>