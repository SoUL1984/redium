<template>
    <div>
        <!--Router-->
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
    </div>
</template>


<style scoped>
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
        float: right; 
        width: 60%;
        background: #E8EAF1;
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
</style>

