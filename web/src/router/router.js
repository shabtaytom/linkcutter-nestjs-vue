import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)

 export const router = new Router({
    routes: [
        {
            name: 'root',
            path: "/",
            component: () => import("../components/Link.vue"),
            children: []
        },
        {
            name: 'login',
            path: "/login",
            component: () => import("../components/Auth.vue"),
            children: []
        },
        {
            name: 'link',
            path: "/link",
            component: () => import("../components/Link.vue"),
            children: []
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     console.log(store.state)
//     // const openRoutes = 
//     // if (to.fullPath === '/users') {
//     //   if (!store.state.accessToken) {
//     //     next('/login');
//     //   }
//     // }
//     // if (to.fullPath === '/login') {
//     //   if (store.state.accessToken) {
//     //     next('/users');
//     //   }
//     // }
//     // next();
//   });