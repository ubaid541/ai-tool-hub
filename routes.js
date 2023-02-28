import { Home,Register,Login,SmartAssist,ImageGinie,SummaryGenius, WriteGenius } from "./src/pages"


const routes = [
    { path: '/', name: 'Home', element: Home, exact: true },
    { path: 'app/smartAssist', name: 'Smart Assist', element: SmartAssist, exact: true },
    { path: 'app/imageGinie', name: 'ImageGinie', element: ImageGinie, exact: true },
    { path: 'app/summaryGenius', name: 'Summary Genius', element: SummaryGenius, exact: true },
    { path: 'app/writeGenius', name: 'Write Genius', element: WriteGenius, exact: true },
    { path: '/auth/register', name: 'Register', element: Register, exact: true },
    { path: '/auth/login', name: 'Home', element: Login, exact: true }
]

export default routes