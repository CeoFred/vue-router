import Home from './components/Home.vue';
import Header from './components/header.vue';

const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'));
  });
} // lazy loading

const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'));
  });
} // lazy loading

const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'));
  });
} // lazy loading

const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'));
  });
} // lazy loading


export const routes = [
  { path: '/user', component: User, children: [
    { path: '', component: UserStart},
    { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
      console.log('inside route')
      next();
    }},
    { path: ':id/edit', component: UserEdit, name: 'userEdit' }
  ]},
  { path: '/', name:'home', components: {default:Home, 'header-top': Header}},
  {
    path:'/redirect-me', redirect: '/user' 
    // or -->> redirect : { name: 'home'}
  },
  { redirect:'/', path:'*'} // not found handler
]