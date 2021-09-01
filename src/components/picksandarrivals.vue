<template>
    <div class="maindiv">
        <div class="row m-1 ">
            <div class="col-md-6 col-sm-12 col-xs-12 toppicks">
                <h2> Top Picks </h2>
                <a class="shopanchor" href="/shop"> SHOP NOW </a>  
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12 newarrivals">
                <h2> New Arrivals </h2>
                <a class="shopanchor" href="/shop"> SHOP NOW </a>  
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .toppicks{
        background-image:url(https://picsum.photos/550/350);
        height: 350px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        background-size: cover;
        border: 5px solid rgb(253, 253, 253);
    }
    .newarrivals{
        background-image:url(https://picsum.photos/600/351);
        height: 350px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
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
        font-size: 40px;
        text-shadow: 1px 1px #000000;
    }
    .shopanchor{
        background-color:transparent; 
        color: white; 
        border: 2px solid white;
        width: 20%;
        border-radius: 10px;
        text-decoration: none;
    }
    .shopanchor:hover{
        background-color: rgba(231, 231, 231, 0.459);
    }
</style>

