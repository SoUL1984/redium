<template>
    <!-- <div class="container" id="app"> -->
    <div id="app">
    
        <svg style="display:none;">
            <symbol id="facebook" viewBox="0 0 512 512">
                <g>
                    <path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0"/>
                </g>
            </symbol> 
            <symbol id="instagram" viewBox="0 0 512 512">
                <g>
                    <path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-180 390c-74.441406 0-135-60.558594-135-135s60.558594-135 135-135 135 60.558594 135 135-60.558594 135-135 135zm150-240c-24.8125 0-45-20.1875-45-45s20.1875-45 45-45 45 20.1875 45 45-20.1875 45-45 45zm0 0"/><path d="m407 90c-8.277344 0-15 6.722656-15 15s6.722656 15 15 15 15-6.722656 15-15-6.722656-15-15-15zm0 0"/><path d="m257 150c-57.890625 0-105 47.109375-105 105s47.109375 105 105 105 105-47.109375 105-105-47.109375-105-105-105zm0 0"/>
                </g>
            </symbol> 
            <symbol id="LinkedIn" viewBox="0 0 430.117 430.118">
                <g>
                    <path id="LinkedIn__x28_alt_x29_" d="M398.355,0H31.782C14.229,0,0.002,13.793,0.002,30.817v368.471
                        c0,17.025,14.232,30.83,31.78,30.83h366.573c17.549,0,31.76-13.814,31.76-30.83V30.817C430.115,13.798,415.904,0,398.355,0z
                        M130.4,360.038H65.413V165.845H130.4V360.038z M97.913,139.315h-0.437c-21.793,0-35.92-14.904-35.92-33.563
                        c0-19.035,14.542-33.535,36.767-33.535c22.227,0,35.899,14.496,36.331,33.535C134.654,124.415,120.555,139.315,97.913,139.315z
                        M364.659,360.038h-64.966V256.138c0-26.107-9.413-43.921-32.907-43.921c-17.973,0-28.642,12.018-33.327,23.621
                        c-1.736,4.144-2.166,9.94-2.166,15.728v108.468h-64.954c0,0,0.85-175.979,0-194.192h64.964v27.531
                        c8.624-13.229,24.035-32.1,58.534-32.1c42.76,0,74.822,27.739,74.822,87.414V360.038z M230.883,193.99
                        c0.111-0.182,0.266-0.401,0.42-0.614v0.614H230.883z"/>
                </g>   
            </symbol>       
        </svg>

        <!-- Header -->
        <header class="header">
            <div class="container_menu">
                <div class="header__inner">
                    <div class="header__logo">
                        <img src="../src/img/redium_logo.svg" alt="">
                    </div>
                    <nav class="nav">
                        <a style="font-size:18px;" class="nav-link" href="#">About Us</a>
                        <a style="font-size:18px;" class="nav-link" href="#">Services</a>
                        <a style="font-size:18px;" class="nav-link" href="#">Our Work</a>
                        <a style="font-size:18px;" class="nav-link" href="#">Contact</a>                        
                    </nav>
                </div>
            </div>
        </header>

        <!--Intro-->
        <div class="container">
            <div class="intro">
                <img class="intro__img" src="../src/img/redium_logo_big.svg" alt="">
            </div>
        </div>

        <!--About-->
        <div class="container">
            <div class="about">
                <h1 class="ab">Who We Are</h1>
                <p style="font-size:24px;padding-bottom:50px;">
                   Redium is a bespoke software development company offering a full range of services, from small entrepreneurial projects or 
                   individuals to complex systems for major corporations. Among a variety of services, full stack software development, iOS and 
                   Android development, web and mobile design and software testing & QA are a few of what we offer. Our team of talented and 
                   dedicated to work professionals will deliver you the best quality within minimum timeframe. To achieve the best results, 
                   we try to engage our clients in all project's stages thus delivering the best results as they are always in charge.
                   <br><br>
                   With us you can boost your potential earning and significantly increase your company's digital presence by shifting your 
                   idea from paper to online space. Don't wish for it, work for it!
                   <br><br>
                   Get an idea for your project? Call or email us to get a free non obligatory quote today.
                </p>
                <a class="btn btn--black" href="#">Get in touch</a>
            </div>
        </div> 

        <div class="router_container">
            <div class="RouterFooter_top"></div>
            <div class="container_inner">
                <div class="StyleRouterMenu">  
                    <h1>Our Services</h1> 
                    <ul class="nav flex-column">
                        <router-link tag="li" class="nav-item" exact v-for="(route,index) in this.$router.options.routes" :key="index" :to="route.path" active-class="active">
                            <a style="font-size:25px; line-height: 45px;" class="nav-link">{{route.name}}</a>
                        </router-link>
                    </ul>
                </div>
                <div class="StyleRouterView">
                    <!-- {{this.$router.options.routes.find(item => item.name == this.$route.name).backgroundImg}} -->
                    <router-view/>
                </div>    
                <div class="RouterFooter"></div>
            </div>
            <div class="RouterFooter_bottom"></div>
        </div>

        <!--Our Work-->
        <div class="container">
            <h1 class="oWork">Our Work</h1>
            <div  class="ourWork">
                <img style="width:55.4%;padding-right:25px;" src="../src/img/laptop.svg" alt="">
                <img style="width:32%;" src="../src/img/building.svg" alt="">
            </div>
        </div>

        <!--Contact us-->
        <div class="container">
            <div class="aboutUs">
                 <h1>Contact Us</h1>
                 <p>Get an idea for your project? Call or email us to get a free non obligatory quote today.</p>
                 <div class="aboutUs_contact">
                    <img src="../src/img/mailicon.svg" alt="">info@redium.co.nz<br><br>
                    <img src="../src/img/phoneicon.svg" alt="">+64224357815
                 </div> 
                <p style="color:#E8EAF1;font-size:20px; padding-bottom:0;margin-bottom:8px;">We are on social media</p>
                 <div class="social">
                    <a class="social__item" href="#">
                         <svg class="social__icon">
                            <use xlink:href="#facebook"></use>
                         </svg>
                    </a>
                    <a class="social__item" href="#">
                         <svg class="social__icon">
                            <use xlink:href="#instagram"></use>
                         </svg>
                    </a>
                    <a class="social__item" href="#">
                         <svg class="social__icon">
                            <use xlink:href="#LinkedIn"></use>
                         </svg>
                    </a>
                 </div>
            </div>
        </div>
  

        <footer class="footer">
            <div class="footer_menu">
                <div class="footer_menu_left">
                    <div class="footer__logo">
                        <img src="../src/img/Redium_Logo_White.svg" alt="">
                    </div>
                    <nav class="nav">
                        <a style="font-size:18px;" class="nav-link" href="#">About Us</a>
                        <a style="font-size:18px;" class="nav-link" href="#">Services</a>
                        <a style="font-size:18px;" class="nav-link" href="#">Our Work</a>
                        <a style="font-size:18px;" class="nav-link" href="#">Contact</a>                        
                    </nav>
                </div>
                <div class="footer_menu_right">
                    <div class="footer_menu_right__item"><img src="../src/img/phoneicon.svg" alt=""> Call Us</div>  
                    <div class="footer_menu_right__item"><img src="../src/img/mailicon.svg" alt=""> Email Us</div>  
                    <div class="footer_menu_right__item"><img src="../src/img/googlemapsicon.svg" alt=""> Find Us On Google Maps</div>  
                </div>
            </div>

        </footer>
    </div>
</template> 

<script>
export default {
    methods: {
    }
}
</script>

<style>
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
        /* padding-left: 20px; */
        margin: 0;
        font-family: 'Gotham Pro';
    }

    h1.ab{
        text-align: center;
        color:#141726; 
    }

    h1.oWork{
        text-align: right;
        color:#141726; 
        background-color: #FFFFFF;
        padding-top: 68px;
        padding-bottom: 73px;
        padding-right: 7%;
    }

    .container{
        width:100%;
        height: 1080px;
        /* max-height: 1080px; */
        max-width: 1920px;
        margin: 0 auto;
        padding: 0;
        background: #FFFFFF;
    }

    .about{
        background:#FFFFFF
        url("img/about_bg.svg") 
        center no-repeat /cover;
        height: 1080px;
        padding-left: 7%;
        padding-right: 7%;
        padding-top: 10%;
        font-size: 25px;    
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
        /* padding-bottom: 250px; */
    }

    .container_menu{
        width:100%;
        margin: 0;
    }

    .header{
        position: absolute;
        width: 100%;
        height: 120px;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding-top: 30px;
        /* padding-right: 110px; */
    }

    .header__inner{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
    }

    .header__logo{
        /* background-image: url('../src/img/redium_logo.svg'); */
	    /* background-repeat: no-repeat;     */
        height: 37px;
	    width: 170px;
    }

    .intro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 1080px;
        padding-top: 120px;
        background:#141726
        url("img/main_bg.svg") 
        center no-repeat /cover;
    }

    .aboutUs {
        height: 100%;
        background:#141726
        url("img/contact_us_bg.svg") 
        center no-repeat /cover; 
        color: #FFFFFF;
        font-size: 25px;
        padding-top: 240px;
        padding-right: 128px;
        padding-left: 128px;
    }

    .aboutUs_contact{
        padding-top: 112px;
        padding-bottom: 100px;
    }

    /* .social{
        color: #E8EAF1;
        font-size: 20px;
    } */

    .social{
        display: flex;
    }

    .social__item{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        margin-right: 20px;
    }

    .social__icon{
        display: block;
        /* height: 20px; */
        fill: #E8EAF1;
    }

    .intro__img{
        padding-left: 10%;
        padding-bottom: 20%;
        width: 90%;
    }


    /* Router
    ===================================*/

    .router_container{
        padding-left: 80px;
        margin: 0;
        display: flex; 
        flex-direction: column; 
    }

    .container_inner{
        margin:0;
        display: flex; 
        flex-direction: row; 
    }

    .StyleRouterMenu{
        float: left;
        margin-left: 0;
        width: 40%;
        padding-top: 150px;
        height: 782px;
    }

    .StyleRouterView{
        /* display: flex;  */
        float: right; 
        width: 60%;
        background: #E8EAF1;
        /* vertical-align: center; */
        font-size: 18px;
        margin-left: auto;
        margin-right: 0;
        height: 782px;
    }

    .RouterFooter_top{
         height: 120px;   
    }

    .RouterFooter_bottom{
        height: 178px;
    }


    /* Menu
    ===================================*/

    .nav-link{
        display: inline-block;
        vertical-align: top;
        color: #FFFFFF;
        text-decoration: none;
        transition: color .2s linear;
    }


    .nav-link:hover{
        color: #FF8C5A;
    }


    /* Footer
    ===================================*/

    .footer{
        padding-top: 45px;
        padding-bottom: 68px;
        padding-left: 7%;
        padding-right: 7%;
    }

    .footer_menu{
        width:100%;
        margin: 0;
        display: flex;
        /* justify-content: flex-end; */
        /* align-items:center;         */
    }

    .footer__space{
        width: 10%;
    }

    .footer_menu_left{
        width:78%;
        margin: 0;
        display: flex;
        justify-content: flex-start;
        /* align-items:center; */
        /* padding-left: 20px; */
        /* padding-right: 35% */
    }

    .footer_menu_right{
        width:22%;
        margin: 0;
        display: flex;  
        flex-direction: column;
        justify-content: flex-end;  
        color: #E8EAF1;
    }

    .footer_menu_right__item{
        /* display: flex; */
        /* flex-direction: column; */
        padding-top: 12px;
        padding-bottom: 12px;
    }

    .footer__logo{
        height: 34px;
	    width: 38px;
        padding-right: 20%;
    }

    /* Button 
    ===================================*/
    .btn{
        display: inline-block;
        vertical-align: top;

        border-radius: 6px;
        font-family: inherit;

        border: 0;
        cursor: pointer;

        padding: 18px 20px;

        font-size: 25px;
        color: #FFFFFF;

        text-transform: uppercase;
    }

    .btn--black{
        background-color: #141726;
    }

    .btn--black:hover{
        background-color: gray;
        color: #FFFFFF;
    }


</style>

