'use strict'

/*
|--------------------------------------------------------------------------
| ImageSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Image = use('App/Models/Image')


class ImageSeeder {
  async run () {
    await Image.query().insert([
      {      
        image_url: "https://pmcfootwearnews.files.wordpress.com/2017/11/adidas-yeezy-boost-350-v2-gray-orange-21.jpg?w=1024&h=639&crop=1",
        id_product: 1001
      },{      
        image_url: "https://cdn.runrepeat.com/i/adidas/25221/cp9652-men-yeezy-boost-350-v2-adidas-black-red-mens-black-red-fa46-600.jpg",
        id_product: 1001
      }          
    ])
  }
}

module.exports = ImageSeeder
