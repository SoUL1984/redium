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
                    <router-link tag="li" class="nav-item" exact to="/" active-class="active">
                        <a style="font-size:25px;" class="nav-link">Application Development</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/MobileDevelopment" active-class="active">
                        <a style="font-size:25px;" class="nav-link">Mobile Development</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/WebDevelopment" active-class="active">
                        <a style="font-size:25px;" class="nav-link">Web Development</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/WebMobileDesign" active-class="active">
                        <a style="font-size:25px;" class="nav-link">Web and Mobile Design</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/SoftwareTestingQualityAssurance" active-class="active">
                        <a style="font-size:25px;" class="nav-link">Software Testing and Quality Assurance</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/TechnicalUserDoc" active-class="active">
                        <a style="font-size:25px;" class="nav-link">Technical and User Documentation</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/MaintenanceSupport" active-class="active">
                        <a style="font-size:25px;" class="nav-link">Maintenance and Support</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/SoftwareRe-engineering" active-class="active">
                        <a style="font-size:25px;" class="nav-link">Software Re-engineering</a>
                    </router-link>
                </ul>
            </div>
            <div class="StyleRoterView">
                 <router-view/>
            </div>     
        </div>
    </div>
</template>

<script>
export default {
   

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

