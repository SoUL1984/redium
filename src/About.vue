<template>
    <div>
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
    </div>
</template>

<style scoped>
    
    .about{
        background:#FFFFFF
        url("img/about_bg.jpg") 
        center no-repeat;
        height: 1080px;
        padding-left: 7%;
        padding-right: 7%;
        padding-top: 10%;
        font-size: 25px;    
    }    

    h1.ab{
        text-align: center;
        color:#141726; 
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
