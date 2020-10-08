import Home from '../views/Home'
import Favorites from '../views/Favorites'
import Categories from '../views/Categories'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favorites', name: 'Favorites', component: Favorites },
  { path: '/categories', name: 'Categories', component: Categories },
  { path: '*', redirect: '/' }
]

export default routes
