export default {
  npmClient: 'npm',
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/home', component: '@/pages/home', sensitive: true },
    { path: '/docs', component: '@/pages/docs', sensitive: true  },
  ]
};
