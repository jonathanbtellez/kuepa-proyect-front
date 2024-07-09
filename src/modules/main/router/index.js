export default {
  name: 'main',
  component: () =>
    import(/* webpackChunkName: 'main layout' */ '@/modules/main/layout/MainLayout.vue'),
  children: [
    {
      path: '',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: 'main view' */ '@/modules/main/views/MainView.vue')
    }
  ]
}
