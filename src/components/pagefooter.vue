<template>
  <div>
    <div class="mdiv card">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 col-sm-12 p-3">
            <div class="row">
              <div align="right" class="col-12 col-sm-3">
                <i class="fas fa-truck faicon"></i>
              </div>
              <div  align="left" class="col-12 col-sm-9 ">
                <h3 class="h3header">FREE SHIPPING &amp; RETURN</h3>
                <p class="para">Free Shipping over $300</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 col-sm-12 p-3">
            <div class="row">
              <div align="right" class="col-12 col-sm-3">
                <i class="fas fa-hand-holding-usd faicon"></i>
              </div>
              <div align="left" class="col-12 col-sm-9 ">
                <h3 class="h3header">MONEY BACK GUARANTEE</h3>
                <p class="para">30 Days Money Back Guarantee</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 col-sm-12 p-3">
            <div class="row">
              <div align="right" class="col-12 col-sm-3">
                <i class="fas fa-headset faicon"></i>
              </div>
              <div align="left" class="col-12 col-sm-9 ">
                <h3 class="h3header">020-800-456-747</h3>
                <p class="para">24/7 Available Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lastfooter">
      <div class="icons p-3 ">
        <button class="btn-icon mar"> <i class="fas fa-home  iconscss"></i></button>
        <button class="btn-icon mar"> <i class="fas fa-envelope iconscss"></i></button>
        <button class="btn-icon mar"> <i class="fas fa-calendar-day iconscss"></i></button>
        <button class="btn-icon mar"> <i class="fas fa-trash-alt iconscss"></i></button>
      </div>
      <div class="text">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. 
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. 
        Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. 
        Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, 
        cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. 
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </div>
      <hr role="separator" aria-orientation="horizontal" class="mydivider">
      <div class="cpyrights">
        2021 — <strong>ShipIT</strong>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .mdiv {
    background-color: #3ae3d6 !important;
    border-color: #3ae3d6 !important;
  }
  .h3header{
    font-weight: 300!important;
    font-size: 15px;
  }
  .para{
    font-weight: 100!important;
    font-size: 10px;
  }
  .faicon {
    font-weight: 900;
    font-size: 40px;
  }
  .lastfooter {
    background-color: #2d3753 !important;
    border-color: #2d3753 !important;
  }
  .icons{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  .btn-icon{
    background-color: #2d3753;
    height: 36px;
    width: 36px;
    border: none;
  }
  .btn-icon:hover{
    background-color: rgba(172, 172, 172, 0.308);
    border-radius: 50%;
  }
  .iconscss{
    font-size: 18px;
    color: white;
  }
  .mar{
    margin-left: 10px;
    margin-right: 10px;
  }
  .text{
    color: white;
    font-size: 12px;
    padding: 15px;
    padding-top: 0!important;
  }
  .mydivider{
    color: rgba(0, 0, 0, 0.61);
  }
  .cpyrights{
    color: white;
    font-size: 13px;
    padding-bottom: 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
</style>