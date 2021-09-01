<template>
  <div tabindex="0" role="listitem" aria-selected="false" class="listitem">
    <div class="avater">
      <div class="imgavater"></div>
      <img class="imgav"
       src="https://images.unsplash.com/photo-1606628703404-cded8e7aa98f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGNoYXJhY3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
    </div>
    <div class="text">
      <div class="title">Lorem ipsum dolor</div>
      <div class="rating">
        <div class="rate">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="text">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="text">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="text">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="text">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="text">1 star</label>
        </div>
      </div>
      <div class="descr"> Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque 
        sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique 
        senectus et netus et malesuada.
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .listitem{
    min-height: 88px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    letter-spacing: normal;
    min-height: 48px;
    outline: none;
    padding: 0 16px;
    position: relative;
    text-decoration: none;
  }
  .rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
  }
  .rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:18px;
    color:#ccc;
  }
  .rate:not(:checked) > label:before {
    content: '★ ';
  }
  .rate > input:checked ~ label {
    color: #ffc700;    
  }
  .rate:not(:checked) > label:hover,
  .rate:not(:checked) > label:hover ~ label {
    color: #deb217;  
  }
  .rate > input:checked + label:hover,
  .rate > input:checked + label:hover ~ label,
  .rate > input:checked ~ label:hover,
  .rate > input:checked ~ label:hover ~ label,
  .rate > label:hover ~ input:checked ~ label {
    color: #c59b08;
  }
  .text {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: flex-start;
    margin-left: 20px;
  }
  .listitem:active{
    background-color: #2d375334 ;
  }
  .title{
    font-size: 11px;
    font-weight: bold;
  }
  .descr{
    font-size: 9px;
    font-weight: 300;
    color: #555555c9;
  }
</style>