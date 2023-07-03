import Vue from 'vue'
import VueRouter from 'vue-router'
import CardProductos from '../components/CardProductos';
import CarritoCompra from '../components/CarritoCompra';
import FormularioEnvio from '../components/FormularioEnvio';
import DatosUsuario from '../components/DatosUsuario';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: CardProductos },
  { path: '/carrito', component: CarritoCompra },
  { path: '/formularioEnvio', component: FormularioEnvio },
  { path: '/datosUsuario', component: DatosUsuario },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes
})

export default router
