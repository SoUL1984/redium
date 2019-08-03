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
            // backgroundImg:'service_AD.svg',
            // props:{
            //    backgroundImg:{
            //       type:String,
            //       default:'service_AD.svg'
            // }
            //}
         },
         {
            path:'/MobileDevelopment',
            name: 'Mobile Development',
            component: MD
            // backgroundImg:'service_MD.svg',
            // props:{
            //    backgroundImg:{
            //       type:String,
            //       default:'service_MD.svg'
            //    }
            // }
         },
         {
            path:'/WebDevelopment',
            name: 'Web Development', 
            component: WD
            // backgroundImg:'service_WD.svg',
            // props:{
            //    backgroundImg:{
            //       type:String,
            //       default:'service_WD.svg'
            //    }
            // }
         },
         {
            path:'/WebMobileDesign', 
            name:'Web and Mobile Design',
            component: WMD
            // backgroundImg:'service_WMD.svg',
            // props:{
            //    backgroundImg:{
            //       type:String,
            //       default:'service_WMD.svg'
            //    }
            // }
         },
         {
            path:'/SoftwareTestingQualityAssurance',
            name:'Software Testing and Quality Assurance',
            component: STQA
            // backgroundImg:'service_STQA.svg',
            // props:{
            //    backgroundImg:{
            //       type:String,
            //       default:'service_STQA.svg'
            //    }
            // }
         },
         {
            path:'/TechnicalUserDoc',
            name:'Technical and User Documentation',
            component: TUD
            // backgroundImg:'service_TUD.svg',
            // props:{
            //    backgroundImg:{
            //       type:String,
            //       default:'service_TUD.svg'
            //    }
            // }
         },
         {
            path:'/MaintenanceSupport',
            name: 'Maintenance and Support',
            component: MS
            // backgroundImg:'service_MS.svg',
            // props:{
            //    backgroundImg:{
            //       type:String,
            //       default:'service_MS.svg'
            //    }
            // }
         },
         {
            path:'/SoftwareRe-engineering',
            name: 'Software Re-engineering',
            component: SR
            // backgroundImg:'service_SR.svg',
            // props:{
            //    backgroundImg:{
            //       type:String,
            //       default:'service_SR.svg'
            //    }
            // }
         }
    ],
    mode: 'history'
    
})
