import Vue from 'vue';
import Router from 'vue-router';
import { getCurrentUser } from '@/Services/Firebase/auth';
import Login from '@/Components/Login.vue';
import Dashboard from '@/Components/Dashboard.vue';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        },
    ]
});

// Setup authentication guards
router.beforeEach((to, from, next) => {
    if (!to.matched.some(record => record.meta.requiresAuth)) {
        next();
    }

    if (!getCurrentUser()) {
        next({ path: '/login' });
    } else {
        next();
    }
});

export default router;