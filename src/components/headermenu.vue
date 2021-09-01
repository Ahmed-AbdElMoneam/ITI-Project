<template>
  <div id="nav" >
    <router-link to="/">Home</router-link>
    <router-link to="/shop">shop</router-link>
    <router-link to="/product">product</router-link>
    <router-link to="/blog">blog</router-link>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  #nav{
    padding: 6px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    -webkit-box-shadow: 0 2px  1px 1px rgba(31, 31, 31, 0.295);
    box-shadow: 0 2px  1px 1px rgba(31, 31, 31, 0.295);
  }
  a {
    font-weight: bold;
    text-decoration: none;
    color: rgba(73, 72, 72, 0.6);
    font-size: 12px;
    padding: 1em 2em;
  }
  a:active {
    color: rgba(0, 0, 0, 0.6);
  }
  a:hover{
    background-color: #f1f1f199;
  }
</style>>


