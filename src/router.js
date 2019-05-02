
import VueRouter from 'vue-router';
import sharing from './components/sharing.vue';
import forum from './components/forum.vue';
import mine from './components/mine.vue';
import activity from './components/activity.vue';
// import communication from './components/main/communication.vue';
// import innovation from './components/main/innovation.vue';
// import service from './components/main/service.vue';
// import share from './components/main/share.vue';

//创建路由对象
var router = new VueRouter({
    routes: [
        {
            path: '/sharing',
            component:sharing,
        },
        {
            path: '/forum',
            component:forum,
        },
        {
            path: '/mine',
            component:mine,
        },
        {
            path: '/activity',
            component:activity,
        },
        // { 
        //     path: '/sharing/communication', 
        //     component: communication, 
        // },
        // { 
        //     path: '/sharing/innovation', 
        //     component: innovation, 
        // },
        // { 
        //     path: '/sharing/service', 
        //     component: service, 
        // },
        // { 
        //     path: '/sharing/share', 
        //     component: share, 
        // },
        { 
            path: '/', 
            redirect: '/sharing' 
        },
    ],
    // mode:'history',
    // base: '/wedoH5pay/',
    linkActiveClass:'mui-active',       //会覆盖默认的link-active-class类
})

export default router;