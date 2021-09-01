<template>
  <div id="headWrapper" class="container-fluid d-flex justify-content-between align-items-center">
    <div id="logo" class="col container d-flex justify-content-start align-items-center">
      <i class="fas fa-truck fa-lg col-1"></i>
      <p class="title h5 col-1">ShipIT</p>
    </div>
    <div id="basic-addon1" class="col container input-group">
        <i id="searchIcon" class="col-1 input-group-text"><i class="fas fa-search text-light"></i></i>
        <input id="inputSearch" class="form-control col-11" type="text" aria-describedby="basic-addon1" placeholder="Search">
    </div>
    <div class="col d-flex justify-content-end m-3 pt-3">
      <button type="button" class="h5 btn-icon col-1 position-relative ico">
        <i class="far fa-user-circle circleHover"></i>
      </button>
      <button type="button" class="h5 btn-icon col-1 position-relative ico">
        <i class="fas fa-bell circleHover"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
          6<span class="visually-hidden">unread messages</span>
        </span>
      </button>
      <a type="button" class="h5 btn-icon col-1 position-relative ico" href="/cart">
        <i class="fas fa-shopping-cart circleHover"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
          2<span class="visually-hidden">unread messages</span>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  #headWrapper {
    background-color: #2d3753;
    flex-wrap: nowrap;
    height: 10vh;
  }
  #logo{
    color: white;
  }
  #basic-addon1{
    height: 80%;
  }
  #inputSearch, #searchIcon{
    background-color: #576383;
    border: none;
    font-weight: bold;
  }
  #inputSearch:focus{
    background: rgb(255, 255, 255);
  }
  #inputSearch::placeholder{
    color: white;
  }
  .btn-icon{
    background-color: transparent;
    border: none;
    color: white;
    margin: 0.4em;
  }
  .btn-icon:hover{
    color: white;
  }
  .circleHover:hover{
    border-radius: 50%;
    border: none;
    box-shadow: 0 0 0 10px #7f88a0b7;
    background-color: #7f88a0b7;
  }
</style>