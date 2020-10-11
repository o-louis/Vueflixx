import Home from '../views/Home'
import Watchlist from '../views/Watchlist'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/watchlist', name: 'Watchlist', component: Watchlist },
  { path: '*', redirect: '/' }
]

export default routes
