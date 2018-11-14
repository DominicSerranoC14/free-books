import Vue from 'vue';
import Router from 'vue-router';
import { getCurrentUser } from '@/Services/Firebase/auth';
import Login from '@/Components/Pages/Login.vue';
import Expenses from '@/Components/Pages/Expenses/Expenses.vue';

Vue.use(Router);

const router = new Router({
    // TODO: does this work with github?
    // mode: 'history',

    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/expenses',
            name: 'expenses',
            component: Expenses,
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