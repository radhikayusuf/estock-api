'use strict'

/*
|--------------------------------------------------------------------------
| DetailProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const DetailProduct = use('App/Models/DetailProduct')

class DetailProductSeeder {
  async run () {
    await DetailProduct.query().insert([
      {      
        nama: "Yeezy Black, 40",
        additional_cost: 0,
        id_product: 1001
      },
      {      
        nama: "Yeezy White, 40",
        additional_cost: 0,
        id_product: 1001
      },
      {      
        nama: "Yeezy Black, 41",
        additional_cost: 500000,
        id_product: 1001
      },
      {      
        nama: "Yeezy White, 41",
        additional_cost: 500000,
        id_product: 1001
      }  
    ])
  }
}

module.exports = DetailProductSeeder
