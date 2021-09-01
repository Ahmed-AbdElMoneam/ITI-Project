<template>
  <header class="header d-block col-12 col-sm-12 mt-0">
    <div class="cl">
      <div class="icon col-12 col-sm-6">
        <a href="/" class="ic">
          <span aria-hidden="true" class="fas fa-truck"></span>&nbsp;ShipIT
        </a>
      </div>
      <form class="form-inline d-flex justify-content-center md-form">
        <span class="sea fas fa-search" aria-hidden="true"></span>
        <input
          class="inp form-control form-control-sm ml-3"
          type="text"
          placeholder="Search"
          aria-label="Search" />
      </form>
      <div class="divbt col-12 col-sm-6">
        <button class="v-btn">
          <span class="spa fas fa-user" aria-hidden="true"></span>
        </button>
        <button class="v-btn">
          <span class="spa fas fa-search" aria-hidden="true"></span>
          <span
            class="num"
            aria-atomic="true"
            aria-label="Badge"
            aria-live="polite"
            role="status">2</span>
        </button>
        <button class="v-btn">
          <a href="/Card">
            <span class="spa fas fa-shopping-cart" aria-hidden="true"></span>
            <span
              class="num"
              aria-atomic="true"
              aria-label="Badge"
              aria-live="polite"
              role="status">2</span>
          </a>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
  export default {};
</script>

<style scoped>
  .header {
    background-color: #2d3753 !important;
    width: 100%;
    height: 65px;
    margin-top: 0px;
  }
  .cli {
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    left: 0px;
  }
  .icon {
    width: 350px;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: left;
  }
  .ic {
    color: #fff !important;
    font-style: italic;
    text-decoration: none;
    align-items: left;
    display: inline-flex;
    font-size: 20px;
    justify-content: left;
    line-height: 1;
    position: absolute;
    left: 0px;
  }
  form {
    width: 600px;
    height: 63px;
    justify-content: center;
    align-content: center;
    flex: 1 1 auto;
    padding: 7px 0px;
    margin-left: 400px;
  }
  .sea {
    width: 20px;
    color: #ffff;
    align-self: center;
    margin-top: 0;
    margin-right: auto;
    padding-right: 4px;
  }
  .inp {
    width: 500px;
    display: inline-flex;
    line-height: 1;
  }
  .divbt {
    width: 100px;
    height: 65px;
    display: flex;
    flex: 1 1 auto;
    padding: 5px 0px;
    justify-content: center;
    justify-content: space-evenly;
    margin: 0px;
    padding: 0px;
    right: 0px;
    margin-left: 1000px;
  }
  .v-btn {
    -webkit-appearance: button;
    height: 48px;
    width: 48px;
    display: flex;
    color: rgb(255, 255, 255);
    background-color: transparent;
    flex: 1 0 auto;
    font-weight: 500;
    border-radius: 50%;
    justify-content: center;
    outline: 0;
    position: absolute;
    text-decoration: none;
    white-space: nowrap;
  }
  .spa {
    height: 24px;
    font-size: 24px;
    width: 24px;
    color: rgb(255, 255, 255);
    -webkit-box-align: center;
    padding-right: 2;
    align-items: center;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    letter-spacing: normal;
    line-height: 1;
  }
  .num {
    inset: auto auto calc(100% - 12px) calc(100% - 12px);
    -webkit-box-flex: 0;
    height: 100%;
    left: 0px;
    position: absolute;
    margin-top: 0px;
    width: 100%;
    flex: 0 1 0%;
    color: rgb(255, 255, 255);
    background-color: rgb(76, 175, 80) !important;
    border-color: rgb(76, 175, 80) !important;
    pointer-events: auto;
    text-align: center;
    text-indent: 0px;
    top: auto;
    white-space: nowrap;
    border-radius: 5px;
    padding: 4px 6px;
  }
  button {
    border-style: none;
    border-radius: 50%;
    color: inherit;
    text-transform: none;
    overflow: visible;
  }
  button:hover {
    color: rgb(236, 230, 230);
    will-change: box-shadow;
  }
</style>