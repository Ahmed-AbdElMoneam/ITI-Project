<template>
  <div class="row m-2">
    <div class="col-md-5 col-sm-5 col-xs-12">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1">
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2">
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3">
          </button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://loving-leavitt-9cb65b.netlify.app/static/img/deal3.e9d6c61.jpg"
              class="d-block w-100"
              alt="..." />
          </div>
          <div class="carousel-item">
            <img
              src="https://loving-leavitt-9cb65b.netlify.app/static/img/deal3.e9d6c61.jpg"
              class="d-block w-100"
              alt="..." />
          </div>
          <div class="carousel-item">
            <img
              src="https://loving-leavitt-9cb65b.netlify.app/static/img/deal3.e9d6c61.jpg"
              class="d-block w-100"
              alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="col-md-7 col-sm-7 col-xs-12">
      <ul class="ulcss">
        <li><a href="/" class="licss">Home</a></li>
        <li class="lidivider">/</li>
        <li><a href="/shop" class="licss">Clothing</a></li>
        <li class="lidivider">/</li>
        <li><a href="#" class="licss lidivider">T-Shirts</a></li>
      </ul>
      <div class="divtwo">
        <p class="text1">Modern Black T-Shirt</p>
        <div>
          <p class="text2">$65.00 <del class="dele">$80.00</del></p>
        </div>
        <p class="dele">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
          tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut
          etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique
          senectus et netus et malesuada.
        </p>
        <p class="title">SIZE</p>
        <div class="divthree">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              XS
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              S
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              M
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              L
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              XL
            </label>
          </div>
        </div>
        <p class="title">ITEMS</p>
        <div>
          <input type="text" class="form-control" >
        </div>
        <div>
          <button class="btn btn-sm addbtn bdiv">
            <span class="t-span"><i class="fas fa-shopping-cart t-span"></i>ADD TO CART</span>
          </button>
          <button class="btn btn-outline-secondary btn-sm bdiv">
            <span class="t-span">ADD TO WISHLIST</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .licss {
    -ms-flex-align: center;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 12px;
    text-decoration: none;
    color: #2d3753;
    margin-left: 5px;
    margin-right: 5px;
  }
  .ulcss {
    padding-bottom: 0 !important;
    padding-left: 24px;
    -webkit-box-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    list-style-type: none;
    margin: 0;
    padding: 18px 12px;
  }
  .acss {
    text-decoration: none;
  }
  .lidivider {
    color: #7a79799a;
  }
  .text1 {
    margin-bottom: 0 !important;
    font-size: 1.6rem !important;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em !important;
    font-weight: 400;
    font-family: Roboto, sans-serif !important;
  }
  .dele {
    font-weight: 300 !important;
    font-size: 0.8rem !important;
    text-align: left;
    letter-spacing: 0.009375em !important;
    line-height: 1.75rem;
    font-family: Roboto, sans-serif !important;
  }
  .text2 {
    padding-top: 12px !important;
    font-weight: 300 !important;
    line-height: 2rem;
    font-family: Roboto, sans-serif !important;
    font-size: 1.2rem !important;
    margin-bottom: 16px;
    letter-spacing: normal !important;
  }
  .title {
    font-size: 1.0rem !important;
    font-weight: 500;
    letter-spacing: 0.0125em !important;
    line-height: 2rem;
    font-family: Roboto, sans-serif !important;
    margin-bottom: 10px;
  }
  .divtwo {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .divthree{
    display: flex;
  }
  .form-check{
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;
  }
  .form-check-input:checked {
    background-color: #2d3753;
    border-color: #cbcdd3;
  }
  .form-control{
    width: 80px;
    height: 30px;
    margin-bottom: 10px;
  }
  .addbtn{
    background-color: #2d3753;
    color: white;
  }
  .t-span{
    margin:2px ;
  }
  .bdiv{
    margin-right: 10px;
  }
  img {
    height: 432px;
  }
  .carousel-inner {
    height: 100%;
  }
</style>
