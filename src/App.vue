<template>
    <div id="app">
        <div class="container">
            <div style="float: left; width: 20%">   
                <ul class="nav flex-column">
                    <router-link tag="li" class="nav-item" exact to="/" active-class="active">
                        <a class="nav-link">Application Development</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/MobileDevelopment" active-class="active">
                        <a class="nav-link">Mobile Development</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/WebDevelopment" active-class="active">
                        <a class="nav-link">Web Development</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/WebMobileDesign" active-class="active">
                        <a class="nav-link">Web and Mobile Design</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/SoftwareTestingQualityAssurance" active-class="active">
                        <a class="nav-link">Software Testing and Quality Assurance</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/TechnicalUserDoc" active-class="active">
                        <a class="nav-link">Technical and User Documentation</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/MaintenanceSupport" active-class="active">
                        <a class="nav-link">Maintenance and Support</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/SoftwareRe-engineering" active-class="active">
                        <a class="nav-link">Software Re-engineering</a>
                    </router-link>
                </ul>
            </div>
            <div style="float: left; width: 80%">
                <router-view></router-view>
            </div>     
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
