<template>
    <div>
        <!--Footer-->
        <footer class="footer">
            <div class="footer_menu">
                <div class="footer_menu_left">
                    <div class="footer__logo">
                        <img src="../src/img/Redium_Logo_White.svg" alt="">
                    </div>
                    <nav class="nav">
                        <a class="nav-link" href="#">About Us</a>
                        <a class="nav-link" href="#">Services</a>
                        <a class="nav-link" href="#">Our Work</a>
                        <a class="nav-link" href="#">Contact</a>                        
                    </nav>
                </div>
                <div class="footer_menu_right">
                    <div class="footer_menu_right__item"><img src="../src/img/phoneicon.svg" alt="">&nbsp;&nbsp;&nbsp;Call Us</div>  
                    <div class="footer_menu_right__item"><img src="../src/img/mailicon.svg" alt="">&nbsp;&nbsp;&nbsp;Email Us</div>  
                    <div class="footer_menu_right__item"><img src="../src/img/googlemapsicon.svg" alt="">&nbsp;&nbsp;&nbsp;Find Us On Google Maps</div>  
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
   
    /* Footer
    ===================================*/
    .footer{
        padding-top: 45px;
        padding-bottom: 65px;
        padding-left: 7%;
        padding-right: 7%;
        margin: 0;
    }

    .footer_menu{
        width:100%;
        margin: 0;
        display: flex;
    }

    .footer__space{
        width: 10%;
    }

    .footer_menu_left{
        width:78%;
        margin: 0;
        display: flex;
        justify-content: flex-start;
        margin: 0;
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
        padding-top: 12px;
        padding-bottom: 12px;
    }

    .footer_menu_right__item:first-child{
        padding-top: 0;    
    }

    .footer_menu_right__item:last-child{
        padding-bottom: 0;    
    }    

    .footer__logo{
        height: 34px;
	    width: 38px;
        padding-right: 20%;
    }

</style>
