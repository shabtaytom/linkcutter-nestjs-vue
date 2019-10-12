import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)

export const router = new Router({
    routes: [
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