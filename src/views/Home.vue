<template>
  <div>
    <carouselslider />
    <picksandarrivals />
    <threecomponent />
    <dealsofday />
  </div>
</template>

<script>
  import carouselslider from "../components/carouselslider.vue"
  import picksandarrivals from "../components/picksandarrivals.vue"
  import threecomponent from "../components/threecomponent.vue"
  import dealsofday from "../components/dealsofday.vue"

  export default {
    name: 'App',
    components:{
      carouselslider,
      picksandarrivals,
      threecomponent,
      dealsofday
    }
  }
</script>

