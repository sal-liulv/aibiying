export default   {
  path: '/home',
  component: ()=>import('../pages/home/root/Home'),
  children: [
    {
      path: 'detail/:id',
      props: true,
      component: ()=>import('../pages/home/detail/Detail'),
      children: [
        {
          path: 'confirm',
          component: ()=>import('../pages/home/confirm/Confirm')
        }
      ]
    }
  ]
}