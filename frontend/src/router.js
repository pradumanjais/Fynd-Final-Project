
import HomePage from './components/HomePage.vue'
import MainPage from './components/MainPage.vue'

// login
import SignIn from './components/loginpages/SignIn.vue'
import SignUp from './components/loginpages/SignUp.vue'
import AdminComp from './components/loginpages/AdminComp.vue'

import AdminDashboard from './components/Dashboard/AdminDashboard.vue'


export default [
     {path:'/',component:MainPage,children:[{path:'',component:HomePage}]},
     {path:'/admin',component:AdminComp,children:[{path:'',component:SignIn},{path:'signup',component:SignUp}]},
     {path:'/dashboard',component:AdminDashboard,children:[{path:'',component:AdminDashboard}]},

]