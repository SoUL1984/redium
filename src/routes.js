import VueRouter from 'vue-router'
import AD from './pages/ApplicationDevelopment.vue'
import MS from './pages/MaintenanceSupport.vue'
import MD from './pages/MobileDevelopment.vue'
import SR from './pages/SoftwareRe-engineering.vue'
import STQA from './pages/SoftwareTestingQualityAssurance.vue'
import TUD from './pages/TechnicalUserDoc.vue'
import WD from './pages/WebDevelopment.vue'
import WMD from './pages/WebMobileDesign.vue'


export default new VueRouter({
    routes:[
        {
           path:'', //localhost:8080
           component: AD
        },
        {
            path:'/MaintenanceSupport', 
            component: MS
         },
         {
            path:'/MobileDevelopment', 
            component: MD
         },
         {
            path:'/SoftwareRe-engineering', 
            component: SR
         },
         {
            path:'/SoftwareTestingQualityAssurance', 
            component: STQA
         },
         {
            path:'/TechnicalUserDoc', 
            component: TUD
         },
         {
            path:'/WebDevelopment', 
            component: WD
         },
         {
            path:'/WebMobileDesign', 
            component: WMD
         }
    ],
    mode: 'history'


})
