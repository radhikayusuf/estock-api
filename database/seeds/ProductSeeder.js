'use strict'

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Product = use('App/Models/Product')

class ProductSeeder {
  async run () {
    await Product.query().insert([
      {      
        id: 1001,
        nama_product: "Adidas Yeezy",
        harga_product: 1300000,
        id_user: 2
      }     
    ])
  }
}

module.exports = ProductSeeder
