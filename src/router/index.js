import { createRouter, createWebHistory } from 'vue-router'

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
            component: () => import('@/pages/ListFiles.vue'),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component:  () => import('@/pages/NotFound.vue'),
        }
    ],
    history: createWebHistory(),
})
