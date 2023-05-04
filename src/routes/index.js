import Home from './pages/Home';
import Products from './pages/Products';
import Collection from './pages/Collection';
import Price from './pages/Price';
import Shop from './pages/Shop';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/collection', component: Collection },
    { path: '/price', component: Price },
    { path: '/shop', component: Shop },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
