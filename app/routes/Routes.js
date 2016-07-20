const Routes = [
      {
        path: '/users'
        view: 'views/users-list.html',
        action: 'UserController',
        actionAs: 'User'
      },
      {
        path: '/users/create'
        view: 'views/users-list.html',
        action: 'UserController',
        actionAs: 'User'
      },
      {
        path: '/users/github'
        view: 'views/users-list.html',
        action: 'UserController',
        actionAs: 'User'
      },
      {
        path: '/users/:id'
        view: 'views/users-list.html',
        action: 'UserController',
        actionAs: 'User'
      }
    ]

export default Routes;