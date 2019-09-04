<template>
    <div>
        <!--Our Work-->
        <div class="container">
            <h1 class="oWork">Our Work</h1>
            <div  class="ourWork">
                <img style="width:55.4%;padding-right:25px;" src="../src/img/laptop.jpg" alt="">
                <img style="width:32%;" src="../src/img/building.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
    /* Our Work
    ===================================*/
    h1.oWork{
        text-align: right;
        color:#141726; 
        background-color: #FFFFFF;
        padding-top: 68px;
        padding-bottom: 73px;
        padding-right: 7%;
    }

    .ourWork{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        flex-wrap: wrap;
        background:#FFFFFF;
        padding-left: 7%;
        padding-right: 7%;
        padding-top:0px;
        padding-bottom: 180px;
    }
</style>
