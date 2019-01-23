'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')
const sha1 = require('sha1')

class UserSeeder {
  async run () {
    await User.query().insert([
      {
        id: 1,
        username: "radhikayusuf",
        email: "radhika.yusuf1@gmail.com",
        password: sha1("12345678"),
        phone: "081222445115",
        address: "Antapani",
        gender: "L",
        is_store: false,
        image_url: "default-image.png",
        nama_user: "Radhika Yusuf Alifiansyah",
        lat: -6.914332, 
        lang: 107.656937
      },
      {
        id: 2,
        username: "userbaru",
        email: "testing@gmail.com",
        password: sha1("12345678"),
        phone: "081331852144",
        address: "Bandung",
        gender: "L",
        is_store: true,
        image_url: "default-image.png",
        nama_user: "User Testing",
        lat: -6.909836,
        lang: 107.626906
      }
    ])
  }
}

module.exports = UserSeeder
