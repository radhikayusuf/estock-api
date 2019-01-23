'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.post('login', 'UserController.login')
  Route.post('register', 'UserController.register')
}).prefix('api/v1/user')

Route.group(() => {
  Route.get('/', 'ProductController.retrieve')
  Route.get('/highlight', 'ProductController.higlight')
  Route.get('/:id', 'ProductController.detailProduct')
}).prefix('api/v1/product')
