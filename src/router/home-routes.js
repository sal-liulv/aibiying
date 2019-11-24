export default   {
  path: '/home',
  component: ()=>import('../pages/home/root/Home'),
  children: [
    {
      path: 'detail/:id/:city',
      props: true,
      component: ()=>import('../pages/home/detail/Detail'),
        children: [
          {
            name: 'confirm',
            path: 'confirm',
            component: ()=>import('../pages/home/confirm/Confirm'),
          }
      ]
    }
  ]
}