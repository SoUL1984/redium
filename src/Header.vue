<template>
        <!-- Header -->
        <header class="header">
            <div class="container_menu">
                <div class="header__inner">
                    <div class="header__logo">
                        <img src="../src/img/redium_logo.svg" alt="">
                    </div>
                    <nav class="nav">
                        <a class="nav-link" href="#">About Us</a>
                        <a class="nav-link" href="#">Services</a>
                        <a class="nav-link" href="#">Our Work</a>
                        <a class="nav-link" href="#">Contact</a>                        
                    </nav>
                </div>
            </div>
        </header>
</template>

<style scoped>
    /* Header
    ===================================*/
    .header{
        position: absolute;
        width: 100%;
        height: 120px;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding-top: 30px;
    }

    .header__inner{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
    }

    .header__logo{
        height: 37px;
	    width: 170px;
    }

    .container_menu{
        width:100%;
        margin: 0;
        padding-left: 7%;
        padding-right: 7%;
    }
</style>
