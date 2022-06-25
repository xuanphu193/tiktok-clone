import Home from '../pages/Home'
import Following from '../pages/Following'
import Profile from '../pages/Profile'
import Update from '../pages/Update'
import {HeaderOnly} from '../components/layout'

const publicRoutes = [
    {path: "/", component: Home},
    {path: "/following", component: Following},
    {path: "/profile", component: Profile},
    {path: "/update", component: Update, layout: HeaderOnly}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }