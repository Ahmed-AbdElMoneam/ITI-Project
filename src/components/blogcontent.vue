<template>
  <div>
    <div class="container">
      <p class="pblogcss p-4">Read About Fashion</p>
      <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-12">
          <a class="card" tabindex="0" href="/post">
            <div class="photo1">
              <p class="p-text">Top 10 Fashion of the Week</p>
            </div>
            <div class="textforphoto">Lorem ipsum</div>
            <div class="textforphoto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              venenatis cras sed felis eget velit aliquet sagittis id. Enim
              praesent elementum facilisis leo vel fringilla est ullamcorper.
            </div>
            <div>
              <button href="/post" class="btn btn-outline-warning btn-sm">
                Read More
              </button>
            </div>
          </a>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12">
          <a class="card" tabindex="0" href="/post">
            <div class="photo2">
              <p class="p-text">Best brands for fashion</p>
            </div>
            <div class="textforphoto">Lorem ipsum</div>
            <div class="textforphoto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              venenatis cras sed felis eget velit aliquet sagittis id. Enim
              praesent elementum facilisis leo vel fringilla est ullamcorper.
            </div>
            <div>
              <button href="/post" class="btn btn-outline-warning btn-sm">
                Read More
              </button>
            </div>
          </a>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12">
          <a class="card" tabindex="0" href="/post">
            <div class="photo3">
              <p class="p-text">Fashion Tips &amp; Tricks</p>
            </div>
            <div class="textforphoto">Lorem ipsum</div>
            <div class="textforphoto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              venenatis cras sed felis eget velit aliquet sagittis id. Enim
              praesent elementum facilisis leo vel fringilla est ullamcorper.
            </div>
            <div>
              <button href="/post" class="btn btn-outline-warning btn-sm">
                Read More
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .pblogcss {
    padding: 16px !important;
    text-align: center !important;
    font-weight: 300 !important;
    font-size: 3rem !important;
    line-height: 3.75rem;
    letter-spacing: -0.0083333333em !important;
    font-family: Roboto, sans-serif !important;
  }
  .acard {
    max-width: 400px;
    border: thin solid rgba(0, 0, 0, 0.12);
    background-color: #fff;
    color: rgba(0, 0, 0, 0.87);
    margin-right: auto !important;
    margin-left: auto !important;
    -webkit-box-shadow: none;
    box-shadow: none;
    cursor: pointer;
  }
  .photo1 {
    background-image: url(https://loving-leavitt-9cb65b.netlify.app/static/img/deal3.e9d6c61.jpg);
    height: 350px;
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
    height: 350px;
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
    height: 350px;
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
  .card {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
    margin-bottom: calc(var(--bs-gutter-x) * 0.5);
    text-decoration: none;
    max-width: 320px;
    align-items: flex-start;
    box-shadow: none;
  }
  .textforphoto {
    color: rgb(119, 118, 118);
    font-size: 11px;
    margin-bottom: 5px;
    padding: 12px;
    text-align: left;
    padding-top: 0;
  }
  .btn {
    margin-bottom: 5px;
    margin: 12px;
  }
  .p-text {
    color: white;
    font-size: 15px;
    font-weight: bold;
    margin-left: 10px;
    text-shadow: 1px 1px #000000;
  }
</style>