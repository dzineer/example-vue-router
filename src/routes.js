import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import OurCoffee from './components/OurCoffee.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/our-coffee', component: OurCoffee },
];
export default routes;