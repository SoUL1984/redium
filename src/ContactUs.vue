<template>
    <div>
       <!--Contact us-->
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

        <div class="container">
            <div class="aboutUs">
                 <h1>Contact Us</h1>
                 <p>Get an idea for your project? Call or email us to get a free non obligatory quote today.</p>
                 <div class="aboutUs_contact">
                    <img src="../src/img/mailicon.svg" alt="">&nbsp;&nbsp;&nbsp;info@redium.co.nz<br><br>
                    <img src="../src/img/phoneicon.svg" alt="">&nbsp;&nbsp;&nbsp;+64224357815
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
    </div>
</template>


<style scoped>
    /* About Us
    ===================================*/
    .aboutUs {
        height: 100%;
        background:#141726
        url("img/contact_us_bg.jpg") 
        center no-repeat; 
        color: #FFFFFF;
        font-size: 25px;
        padding-top: 240px;
        padding-right: 7%;
        padding-left: 7%;
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
        fill: #E8EAF1;
    }
</style>

