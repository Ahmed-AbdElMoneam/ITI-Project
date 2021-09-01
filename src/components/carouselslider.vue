<template >
  <div>
    <MDBCarousel
      v-model="carousel6"
      :items="items6"
      :indicators="false"
      fade />
  </div>
</template>

<script>
  import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";

  export default {
    components: {
      MDBCarousel
    },
    setup() {
      const items6 = [
        {
          src: "https://picsum.photos/950/350",
          alt: "...",
          label: "Upto 60% + Extra 10%",
          caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
          src: "https://picsum.photos/925/350",
          alt: "...",
          label: "Upto 60% + Extra 10%",
          caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          src: "https://picsum.photos/925/370",
          alt: "...",
          label: "Upto 60% + Extra 10%",
          caption:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        },
        {
          src: "https://picsum.photos/950/320",
          alt: "...",
          label: "Upto 60% + Extra 10%",
          caption:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        }
      ];
      const carousel6 = ref(0);

      return {
        items6,
        carousel6
      };
    }
  };
</script>
<style >
  .carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 90%;
    background-size: contain;
  }
  img{
    height: 500px;
  }
</style>