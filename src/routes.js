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
           path:'/', //localhost:8080
           name: 'Application Development',
           component: AD
        },
        {
            path:'/MaintenanceSupport', 
            name: 'Maintenance and Support',
            component: MS
         },
         {
            path:'/MobileDevelopment', 
            name: 'Mobile Development',
            component: MD
         },
         {
            path:'/SoftwareRe-engineering',
            name: 'Software Re-engineering',
            component: SR
         },
         {
            path:'/SoftwareTestingQualityAssurance', 
            name:'Software Testing and Quality Assurance',
            component: STQA
         },
         {
            path:'/TechnicalUserDoc',
            name:'Technical and User Documentation',
            component: TUD
         },
         {
            path:'/WebDevelopment',
            name: 'Web Development', 
            component: WD
         },
         {
            path:'/WebMobileDesign', 
            name:'Web and Mobile Design',
            component: WMD
         }
    ],
    mode: 'history'
    
})
