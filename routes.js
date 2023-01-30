import { Home,Register,Login } from "./src/pages"


const routes = [
    { path: '/', name: 'Home', element: Home, exact: true },
    { path: '/auth/register', name: 'Register', element: Register, exact: true },
    { path: '/auth/login', name: 'Home', element: Login, exact: true }
]

export default routes