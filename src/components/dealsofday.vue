<template>
  <div class="container">
    <div class="row">
      <div class="v-card__title subheading">Deals of the Day</div>
      <hr
        role="separator"
        aria-orientation="horizontal"
        class="hr" />
      <div class="row ">
        <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
          <div class="v-card v-sheet theme--light  card">
            <div class="photo1"><p class="p-text">T-Shirt</p></div>
            <div class="textforphoto">Upto 60% + Extra 10%</div>
            <div class="textforphoto">Baggit, Zara, Fossil</div>
            <div class="text-center">
              <a href="/shop" class="btn btn-outline-secondary btn-sm">
                Explore
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
          <div class="v-card v-sheet theme--light card">
            <div class="photo2"><p class="p-text">jeans</p></div>
            <div class="textforphoto">Upto 60% + Extra 10%</div>
            <div class="textforphoto">Baggit, Zara, Fossil</div>
            <div class="text-center">
              <a href="/shop" class="btn btn-outline-secondary btn-sm">
                Explore
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
          <div class="v-card v-sheet theme--light  card">
            <div class="photo3"><p class="p-text">Dress</p></div>
            <div class="textforphoto">Upto 60% + Extra 10%</div>
            <div class="textforphoto">Baggit, Zara, Fossil</div>
            <div class="text-center">
              <a href="/shop" class="btn btn-outline-secondary btn-sm">
                Explore
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
          <div class="v-card v-sheet theme--light  card">
            <div class="photo4"><p class="p-text">shoes</p></div>
            <div class="textforphoto">Upto 60% + Extra 10%</div>
            <div class="textforphoto">Baggit, Zara, Fossil</div>
            <div class="text-center">
              <a href="/shop" class="btn btn-outline-secondary btn-sm">
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .v-card__title {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    line-height: 2rem;
    word-break: break-all;
    padding: 16px;
  }
  .v-application .elevation-2 {
    -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
  }
  .photo1 {
    background-image: url(https://picsum.photos/200/250);
    height: 250px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 5px;
    background-size: cover;
    width: 100%;
  }
  .photo2 {
    background-image: url(https://picsum.photos/210/260);
    height: 250px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 5px;
    background-size: cover;
    width: 100%;
  }
  .photo3 {
    background-image: url(https://picsum.photos/200/260);
    height: 250px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 5px;
    background-size: cover;
    width: 100%;
  }
  .photo4 {
    background-image: url(https://picsum.photos/210/250);
    height: 250px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 5px;
    background-size: cover;
    width: 100%;
  }
  .textforphoto {
    color: rgb(119, 118, 118);
    font-size: 11px;
    margin-bottom: 5px;
  }
  .btn {
    margin-bottom: 5px;
  }
  .p-text {
    color: white;
    font-size: 19px;
    font-weight: bold;
    margin-left: 10px;
  }
  .card{
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important;
    margin-bottom: calc(var(--bs-gutter-x) * .5);
  }
  .card:hover{
    box-shadow:  10px 10px 15px rgba(0, 0, 0, 0.356),-5px -5px 10px rgba(0, 0, 0, 0.356)!important;
  }
</style>