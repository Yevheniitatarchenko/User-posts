import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../../components/Login.vue';
import Home from '../../components/Home.vue';
// import News from '../../components/News.vue';
import People from '../../components/People.vue';
import Settings from '../../components/Settings.vue';
import UserProfile from '../../components/profile/UserProfile.vue';
import ProfileNews from '../../components/profile/News.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  // {
  //   path: '/news',
  //   name: 'ProfileNews',
  //   component: ProfileNews,
  // },
  {
    path: '/people',
    name: 'People',
    component: People,
  },
  {
    path: '/settings/profile/:id',
    name: 'Settings',
    component: Settings,
  },
  {
    path: '/profile/:id',
    name: 'UserProfile',
    component: UserProfile,
    children: [
      {
        path: 'news',
        name: 'ProfileNews',
        component: ProfileNews,
      },
      // {
      //   path: 'friends',
      //   name: 'ProfileFriends',
      //   component: ProfileFriends,
      // },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
