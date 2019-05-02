//导入vue和vue-router
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//导入mui的style和js
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

//导入自己的vue文件和css、js
import App from './App.vue';
import './css/style.css';
import router from './router.js';

//导入mint-ui的组件
import { Header, Navbar, TabItem, TabContainer, TabContainerItem, Button, Cell, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//创建vue实例
var app = new Vue({
    el: '#app',
    data: {
        msg: 'hehehehe',
    },
    // computed:{
    //     selected:function(){
    //         return this.msg
    //     }
    // },
    methods: {

    },
    render: function (createElement) {
        return createElement(App);
    },
    router,
})
