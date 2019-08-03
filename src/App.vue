<template>
    <div class="container" id="app">
        <header class="header">
            <div class="container_menu">
                <div class="header__inner">
                    <div class="header__logo"></div>
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
                    <router-link tag="li" class="nav-item" exact v-for="(route,index) in this.$router.options.routes" :key="index" :to="route.path" active-class="active">
                        <a style="font-size:25px; line-height: 45px;" class="nav-link">{{route.name}}</a>
                    </router-link>
                </ul>
            </div>
            <div class="StyleRoterView">
                 <!-- {{this.$router.options.routes.find(item => item.name == this.$route.name).backgroundImg}} -->
                 <router-view/>
            </div>     
        </div>
        <footer class="footer"/>
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
        padding-left: 20px;
        margin: 0;
        font-family: 'Gotham Pro';
    }

    .container{
        width:100%;
        max-width: 100%;
        margin: 0;
        padding: 0;
        padding-left: 80px;
    }

    .container_menu{
        width:100%;
        margin: 0;
    }

    .container_inner{
        margin:0;
        display: flex; 
        flex-direction: row; 
    }

    .header{
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding-top: 30px;
        height: 100px;
    }

    .header__logo{
        background-image: url('../src/img/redium_logo.svg');
	    background-repeat: no-repeat;    
        height: 37px;
	    width: 170px;
    }

    .header__inner{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
    }

    .StyleRouterMenu{
            float: left;
            margin-left: 0;
            /* padding: 15px; */
            padding-top: 150px;
            /* padding-left: 100px; */
            /* width: 60%; */
    }

    .StyleRoterView{
        display: flex; /*не уверен, что нужна эта строка*/
        float: right; 
        width: 60%;
        background: #E8EAF1;
        vertical-align: center;
        font-size: 18px;
        margin-left: auto;
        margin-right: 0;
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

    .footer{
    }

</style>

