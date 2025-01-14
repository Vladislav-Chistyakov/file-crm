import {createRouter, createWebHistory} from 'vue-router'

export const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import('@/pages/Main.vue'),
        },
        {
            path: '/list-files',
            name: 'files',
            component: () => import('@/pages/ListFiles.vue')
        }
    ],
    history: createWebHistory(),
})
