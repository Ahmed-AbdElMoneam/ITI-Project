<template>
    <div class="container-fluid maindiv">
        <div class="row m-1 ">
            <div class="col-md-4 col-sm-12 col-xs-12  tshirt">
                <h2> T-shirt </h2>
                <a href="/shop" class="shopanchor"> SHOP NOW </a>  
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12  jeans">
                <h2> jeans </h2>
                <a href="/shop" class="shopanchor"> SHOP NOW </a>  
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12  Shoes">
                <h2> Shoes </h2>
                <a href="/shop" class="shopanchor"> SHOP NOW </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
    * {
        background-repeat: no-repeat;
        padding: 0;
        margin: 0;
    }
    .tshirt{
        background-image:url(https://picsum.photos/300/150);
        height: 250px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background-size: cover;
        border: 5px solid rgb(253, 253, 253);
    }
    .jeans{
        background-image:url(https://picsum.photos/310/160);
        height: 250px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        border: 5px solid rgb(253, 253, 253);
        background-size: cover;
    }
    .Shoes{
        background-image:url(https://picsum.photos/320/140);
        height: 250px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        border: 5px solid rgb(253, 253, 253);
        background-size: cover;
    }
    img{
        height: 100%;
        width: 100%;
    }
    h2{
        color: white;
        font-weight: bold;
        font-size: 35px;
        text-shadow: 1px 1px #000000;
    }
    .shopanchor{
        background-color:transparent; 
        color: white; 
        border: 1px solid transparent;
        width: 20%;
        border-radius: 10px;  
        font-size: 10px;
        text-decoration: none;
    }
    .shopanchor:hover{
        background-color:rgba(255, 253, 253, 0.233);
    }
</style>

