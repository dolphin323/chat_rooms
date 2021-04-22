import Vue from 'vue'
import Router from 'vue-router'
import Registration from '@/components/Registration'
import Login from '@/components/Login'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/chat_rooms.github.io/registration',
            component: Registration
        },
        {
            path: '/chat_rooms.github.io/login',
            component: Login
        },
        {
            path: '/chat_rooms.github.io/chats',
            component: () => import('@/components/Chats')
        },
        { path: "/chat_rooms.github.io/*", component: () => import('@/components/PageNotFound') }
    ]
})