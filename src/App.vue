<template>
    <!-- <div class="container" id="app"> -->
    <div id="app">

        <!-- Header -->
        <Header></Header>
        
        <!--Intro-->
        <Intro></Intro>

        <!--About-->
        <About></About>
        
        <!--Router-->
        <Router></Router>

        <!--Our Work-->
        <OurWork></OurWork>

        <!--Contact us-->
        <ContactUs></ContactUs>
  
        <!--Footer-->
        <Footer></Footer>

    </div>
</template> 

<script>
import Header from './Header.vue';
import Intro from './Intro.vue';
import About from './About.vue';
import Router from './Router.vue';
import OurWork from './OurWork.vue'; 
import ContactUs from './ContactUs.vue';
import Footer from './Footer.vue';

export default {
    components: {
        Header,
        Intro,
        About,
        Router,
        OurWork,
        ContactUs,
        Footer
    }
}
</script>

<style>
    html, body {
        margin: 0;
        background: #141726;
        font-family: "GothamProRegular";
        font-size: 20px;
    }

    a {
        outline: none;
    }

    .container{
        width:100%;
        height: 1080px;
        /* max-height: 1080px;  */
        max-width: 1920px;
        margin: 0 auto;
        padding: 0;
        background: #FFFFFF;
    }

    h1 {
        font-size: 78px;
        color:dimgray;
        padding-bottom: 40px;
        margin: 0;
        font-family: "GothamProRegular";
        font-weight: bold;

    }

    /* Menu
    ===================================*/
    .nav-link{
        display: inline-block;
        vertical-align: top;
        color: #FFFFFF;
        text-decoration: none;
        transition: color .2s linear;
        font-size:20px;
        padding-left: 27px;
        padding-right: 27px;
    }


    .nav-link:hover{
        color: #FF8C5A;
    }


    @font-face {
        font-family: "GothamProRegular"; 
        src: url("/fonts/GothamProRegular/GothamProRegular.ttf") format("truetype"); 
        font-style: normal; 
        font-weight: normal; 
    }  

	@font-face {
			font-family: "GothamProBold";
			src: url("/fonts/GothamProBold/GothamProBold.ttf") format("truetype");
			font-style: normal;
			font-weight: normal;
	}

</style>
