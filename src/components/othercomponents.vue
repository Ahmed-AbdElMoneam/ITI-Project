<template>
  <div class="row">
    <div class="col-sm-12 col-xs-12 col-md-12">
      <div class="tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button 
              class="nav-link active"  
              id="home-tab" 
              data-bs-toggle="tab" 
              data-bs-target="#home" 
              type="button" 
              role="tab" 
              aria-controls="home" 
              aria-selected="true">Description</button>
          </li>
          <li class="nav-item" role="presentation">
            <button 
              class="nav-link" 
              id="profile-tab" 
              data-bs-toggle="tab" 
              data-bs-target="#profile" 
              type="button" 
              role="tab" 
              aria-controls="profile" 
              aria-selected="false">Materials</button>
          </li>
          <li class="nav-item" role="presentation">
            <button 
              class="nav-link" 
              id="contact-tab" 
              data-bs-toggle="tab" 
              data-bs-target="#contact" 
              type="button" 
              role="tab" 
              aria-controls="contact" 
              aria-selected="false">REVIEWS</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et. Vel pretium lectus 
            quam id leo in vitae turpis massa. Orci dapibus ultrices in iaculis nunc. At auctor urna 
            nunc id cursus metus. Integer feugiat scelerisque varius morbi enim nunc. Aliquam sem et 
            tortor consequat id porta nibh venenatis cras. Pellentesque pulvinar pellentesque habitant 
            morbi tristique senectus et netus. Malesuada nunc vel risus commodo viverra maecenas. Neque 
            volutpat ac tincidunt vitae semper quis.</div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et. Vel pretium lectus 
            quam id leo in vitae turpis massa. Orci dapibus ultrices in iaculis nunc. At auctor urna 
            nunc id cursus metus. Integer feugiat scelerisque varius morbi enim nunc. Aliquam sem et 
            tortor consequat id porta nibh venenatis cras. Pellentesque pulvinar pellentesque habitant 
            morbi tristique senectus et netus. Malesuada nunc vel risus commodo viverra maecenas. Neque 
            volutpat ac tincidunt vitae semper quis.</div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <div role="list" avater="true" class="revlist">
              <div role="listbox" class="revlistbox">
                <div tabindex="0" role="listitem" aria-selected="false" class="listitem">
                  <div class="avater">
                    <div class="imgavater"></div>
                    <img class="imgav" src="https://loving-leavitt-9cb65b.netlify.app/static/img/deal3.e9d6c61.jpg" />
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
                    <div class="descr"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl 
                      tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. 
                      Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus 
                      et malesuada.</div>
                  </div>
                </div>
                <div tabindex="0" role="listitem" aria-selected="false" class="listitem">
                  <div class="avater">
                    <div class="imgavater"></div>
                    <img class="imgav" src="https://loving-leavitt-9cb65b.netlify.app/static/img/deal3.e9d6c61.jpg" />
                  </div>
                  <div class="text">
                    <div class="title">Lorem ipsum dolor</div>
                    <div class="rating">
                      <div class="rate2">
                        <input type="radio" id="star55" name="rate2" value="5" />
                        <label for="star55" title="text">5 stars</label>
                        <input type="radio" id="star44" name="rate2" value="4" />
                        <label for="star44" title="text">4 stars</label>
                        <input type="radio" id="star33" name="rate2" value="3" />
                        <label for="star33" title="text">3 stars</label>
                        <input type="radio" id="star22" name="rate2" value="2" />
                        <label for="star22" title="text">2 stars</label>
                        <input type="radio" id="star11" name="rate2" value="1" />
                        <label for="star11" title="text">1 star</label>
                      </div>
                    </div>
                    <div class="descr"> Lorem ipsum dolor sit amet, consectetur adipiscing 
                      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales 
                      ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus 
                      et netus et malesuada.</div>
                  </div>
                </div>
                <div tabindex="0" role="listitem" aria-selected="false" class="listitem">
                  <div class="avater">
                    <div class="imgavater"></div>
                    <img class="imgav" src="https://loving-leavitt-9cb65b.netlify.app/static/img/deal3.e9d6c61.jpg" />
                  </div>
                  <div class="text">
                    <div class="title">Lorem ipsum dolor</div>
                    <div class="rating">
                      <div class="rate3">
                        <input type="radio" id="ss5" name="rate3" value="5" />
                        <label for="ss5" title="text">5 stars</label>
                        <input type="radio" id="ss4" name="rate3" value="4" />
                        <label for="ss4" title="text">4 stars</label>
                        <input type="radio" id="ss3" name="rate3" value="3" />
                        <label for="ss3" title="text">3 stars</label>
                        <input type="radio" id="ss2" name="rate3" value="2" />
                        <label for="ss2" title="text">2 stars</label>
                        <input type="radio" id="ss1" name="rate3" value="1" />
                        <label for="ss1" title="text">1 star</label>
                      </div>
                    </div>
                    <div class="descr"> Lorem ipsum dolor sit amet, consectetur adipiscing 
                      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales 
                      ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique 
                      senectus et netus et malesuada.</div>
                  </div>
                </div>
                <div tabindex="0" role="listitem" aria-selected="false" class="listitem">
                  <div class="avater">
                    <div class="imgavater"></div>
                    <img class="imgav" src="https://loving-leavitt-9cb65b.netlify.app/static/img/deal3.e9d6c61.jpg" />
                  </div>
                  <div class="text">
                    <div class="title">Lorem ipsum dolor</div>
                    <div class="rating">
                      <div class="rate4">
                        <input type="radio" id="s5" name="rate4" value="5" />
                        <label for="s5" title="text">5 stars</label>
                        <input type="radio" id="s4" name="rate4" value="4" />
                        <label for="s4" title="text">4 stars</label>
                        <input type="radio" id="s3" name="rate4" value="3" />
                        <label for="s3" title="text">3 stars</label>
                        <input type="radio" id="s2" name="rate4" value="2" />
                        <label for="s2" title="text">2 stars</label>
                        <input type="radio" id="s1" name="rate4" value="1" />
                        <label for="s1" title="text">1 star</label>
                      </div>
                    </div>
                    <div class="descr"> Lorem ipsum dolor sit amet, consectetur adipiscing 
                      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales 
                      ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus 
                      et netus et malesuada.</div>
                  </div>
                </div>
                <rating/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="others">
        <p class="p2css">YOU MIGHT ALSO LIKE</p>
        <hr class="hrcss">
        <div class="row ">
          <div class="col-md-2 col-sm-4 col-xs-12">
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
          <div class="col-md-2 col-sm-4 col-xs-12">
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
          <div class="col-md-2 col-sm-4 col-xs-12">
            <div class="v-card v-sheet theme--light  card">
              <div class="photo3"><p class="p-text">Dress</p></div>
              <div class="textforphoto">Upto 50% </div>
              <div class="textforphoto">Baggit, Zara, Fossil</div>
              <div class="text-center">
                <a href="/shop" class="btn btn-outline-secondary btn-sm">
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-2 col-sm-4 col-xs-12">
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
          <div class="col-md-2 col-sm-4 col-xs-12">
            <div class="v-card v-sheet theme--light  card">
              <div class="photo5"><p class="p-text">Make Up</p></div>
              <div class="textforphoto">Upto 60% + Extra 10%</div>
              <div class="textforphoto">Baggit, Zara, Fossil</div>
              <div class="text-center">
                <a href="/shop" class="btn btn-outline-secondary btn-sm">
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-2 col-sm-4 col-xs-12">
            <div class="v-card v-sheet theme--light  card">
              <div class="photo6"><p class="p-text">Bags</p></div>
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
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .tab-content>.active {
    display: block;
    font-size: 13px;
    font-weight: 200;
    text-align: left;
    padding: 13px;
  }
  .nav-link:focus, .nav-link:hover {
    color: #2d3753;
  }
  .nav-tabs:focus, .nav-tabs:hover {
    color: #2d3753;
  }
  .nav-tabs .nav-link {
    font-size: 12px;
    font-weight: bold;
    color: #3a3a3ab6;
  }
  .revlist{
    background: #fff;
    color: rgba(0,0,0,.87);
    border-color: #fff;
    border-radius: 4px;
    display: block;
    padding: 8px 0;
    position: static;
    -webkit-transition: -webkit-box-shadow .28s cubic-bezier(.4,0,.2,1);
    transition: -webkit-box-shadow .28s cubic-bezier(.4,0,.2,1);
    transition: box-shadow .28s cubic-bezier(.4,0,.2,1);
    transition: box-shadow .28s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .28s cubic-bezier(.4,0,.2,1);
    will-change: box-shadow;
  }
  .revlistbox{
    color: #2d3753 !important;
    caret-color: #2d3753 !important;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    position: relative;
    max-width: 100%;
    -webkit-transition: .3s cubic-bezier(.25,.8,.5,1);
    transition: .3s cubic-bezier(.25,.8,.5,1);
  }
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
    padding: 5px 16px;
    position: relative;
    text-decoration: none;
  }
  .imgav{
    width: 40px;
    height: 40px;
    border-radius: 50%;
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
  .rate4:not(:checked) > input {
    position:absolute;
    top:-9999px;
  }
  .rate4:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:18px;
    color:#ccc;
  }
  .rate4:not(:checked) > label:before {
    content: '★ ';
  }
  .rate4 > input:checked ~ label {
    color: #ffc700;    
  }
  .rate4:not(:checked) > label:hover,
  .rate4:not(:checked) > label:hover ~ label {
    color: #deb217;  
  }
  .rate4 > input:checked + label:hover,
  .rate4 > input:checked + label:hover ~ label,
  .rate4 > input:checked ~ label:hover,
  .rate4 > input:checked ~ label:hover ~ label,
  .rate4 > label:hover ~ input:checked ~ label {
    color: #c59b08;
  }
  .rate3:not(:checked) > input {
    position:absolute;
    top:-9999px;
  }
  .rate3:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:18px;
    color:#ccc;
  }
  .rate3:not(:checked) > label:before {
    content: '★ ';
  }
  .rate3 > input:checked ~ label {
    color: #ffc700;    
  }
  .rate3:not(:checked) > label:hover,
  .rate3:not(:checked) > label:hover ~ label {
    color: #deb217;  
  }
  .rate3 > input:checked + label:hover,
  .rate3 > input:checked + label:hover ~ label,
  .rate3 > input:checked ~ label:hover,
  .rate3 > input:checked ~ label:hover ~ label,
  .rate3 > label:hover ~ input:checked ~ label {
    color: #c59b08;
  }
  .rate2:not(:checked) > input {
    position:absolute;
    top:-9999px;
  }
  .rate2:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:18px;
    color:#ccc;
  }
  .rate2:not(:checked) > label:before {
    content: '★ ';
  }
  .rate2 > input:checked ~ label {
    color: #ffc700;    
  }
  .rate2:not(:checked) > label:hover,
  .rate2:not(:checked) > label:hover ~ label {
    color: #deb217;  
  }
  .rate2 > input:checked + label:hover,
  .rate2 > input:checked + label:hover ~ label,
  .rate2 > input:checked ~ label:hover,
  .rate2 > input:checked ~ label:hover ~ label,
  .rate2 > label:hover ~ input:checked ~ label {
    color: #c59b08;
  }
  .p2css{
    text-align: center!important;
    padding-top: 12px!important;
    font-weight: 300!important;
    font-size: 1rem!important;
    letter-spacing: .009375em!important;
    line-height: 1.75rem;
    font-family: Roboto,sans-serif!important;
  }
  .hrcss{
    border-color: rgba(0,0,0,.12);
    border-width: thin 0 0;
  }
  .card{
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important;
    margin-bottom: calc(var(--bs-gutter-x) * .5);
  }
  .card:hover{
    box-shadow:  10px 10px 15px rgba(0, 0, 0, 0.356),-5px -5px 10px rgba(0, 0, 0, 0.356)!important;
  }
  .photo1 {
    background-image: url(https://loving-leavitt-9cb65b.netlify.app/static/img/deal3.e9d6c61.jpg);
    height: 170px;
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
    background-image: url(https://loving-leavitt-9cb65b.netlify.app/static/img/deal3.e9d6c61.jpg);
    height: 170px;
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
    background-image: url(https://loving-leavitt-9cb65b.netlify.app/static/img/deal3.e9d6c61.jpg);
    height: 170px;
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
    background-image: url(https://loving-leavitt-9cb65b.netlify.app/static/img/deal3.e9d6c61.jpg);
    height: 170px;
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
  .photo5 {
    background-image: url(https://loving-leavitt-9cb65b.netlify.app/static/img/deal3.e9d6c61.jpg);
    height: 170px;
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
  .photo6 {
    background-image: url(https://loving-leavitt-9cb65b.netlify.app/static/img/deal3.e9d6c61.jpg);
    height: 170px;
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
  .others{
    margin-bottom: 15px;
  }
</style>