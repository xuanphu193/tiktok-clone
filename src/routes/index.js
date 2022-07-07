import Home from '../pages/Home'
import Following from '../pages/Following'
import Profile from '../pages/Profile'
import Update from '../pages/Update'
import {HeaderOnly} from '../components/layout'
import routesConfig from '../config/routes'

const publicRoutes = [
    {path: routesConfig.home, component: Home},
    {path: routesConfig.home, component: Following},
    {path: routesConfig.profile, component: Profile},
    {path: routesConfig.update, component: Update, layout: HeaderOnly}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }