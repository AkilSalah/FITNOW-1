import { createRouter , createWebHistory } from "vue-router";
import register from "../pages/register.vue";
import login from "../pages/login.vue";
import home from  "../pages/home.vue";
import progression from "../pages/progression.vue";
const routes = [
    {
    path : '/register',
    component : register,
},
{
    path : '/login',
    component : login,
},
{
    path : '/home',
    component : home
},
{
    path : '/progression',
    component : progression
}

];  

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;