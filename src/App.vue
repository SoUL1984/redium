<template>
    <div class="container" id="app">
        <header class="header">
            <div class="container_menu">
                <div class="header__inner">
                    <div class="header__logo">Redium</div>
                    <nav class="nav">
                        <a style="font-size:18px;" class="nav-link" href="#">About Us</a>
                        <a style="font-size:18px;" class="nav-link" href="#">Services</a>
                        <a style="font-size:18px;" class="nav-link" href="#">Our Work</a>
                        <a style="font-size:18px;" class="nav-link" href="#">Contact</a>                        
                    </nav>
                </div>
            </div>
        </header>
        <div class="container_inner">
            <div class="StyleRouterMenu">  
                <h1>Our Services</h1> 
                <ul class="nav flex-column">
                    <router-link tag="li" class="nav-item" exact v-for="route in this.$router.options.routes" :key="route.path" :to="route.path" active-class="active">
                        <a style="font-size:25px;" class="nav-link">{{route.name}}</a>
                    </router-link>
                </ul>
            </div>
            <!-- <div style={{imageUrl}}  class="StyleRoterView"> -->           
            <div class="StyleRoterView">
            <!-- <div>  -->
                 <router-view/>
            </div>     
        </div>
    </div>
</template> 

<script>
export default {
    // computed: {
    //     imageUrl: function() {
    //         return 'background-image:url(../img/'+this.$router.options.routes[0].path+');';
    //     }
    // }
}
</script>

<style>

      /* .bgImgCenter{
         background-image: url('/img/About_BG.svg');
         background-repeat: no-repeat;
         background-position: center; 
         position: relative;
      } */

    html, body {
        margin: 0;
        background: #141726;
        font-family: 'Gotham Pro', Regular;
        font-size: 20px;
    }

    h1 {
        font-size: 78px;
        color:dimgray;
        padding-bottom: 40px;
        padding-left: 30px;
        margin: 0;
        font-family: 'Gotham Pro';
    }

    .container{
        width:100%;
        max-width: 1660px;
        margin: 0 auto;
    }

    .container_menu{
        width:100%;
        max-width: 1660px;
        margin: 0 auto; 
    }

    .container_inner{
        margin-bottom: 100px;
    }

    .header{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding-top: 30px;
    }

    .header__logo{
        font-size: 20px;
        font-weight: 700;
        color: #FFFFFF;
    }

    .StyleRoterView{
        float: right; 
        width: 60%;
        background: #E8EAF1;
        vertical-align: center;
        font-size: 18px;
        padding-right: 128px; 
        padding-left: 67px;
        margin-right: 0;
    }

    .StyleRouterMenu{
            float:left;
            padding-top:80px;
    }

    .nav-link{
        display: inline-block;
        vertical-align: top;
        margin: 0 10px;

        color: #FFFFFF;
        text-decoration: none;

        transition: color .2s linear;
    }


    .nav-link:hover{
        color: #FF8C5A;
    }

    .header__inner{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


     
</style>

