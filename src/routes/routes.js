import Home from '../views/home.vue';
import Pokedex from '../views/pokedex.vue';

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/pokedex', component: Pokedex, name: 'pokedex' }
];

export default routes;