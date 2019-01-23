'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DetailProductSchema extends Schema {
  up () {
    this.create('detail_products', (table) => {
      table.increments()
      table.string('nama', 80).notNullable()
      table.double('additional_cost', 10).notNullable()
      table.integer('id_product', 30).unsigned().references('id').inTable('products')
      table.timestamps()
    })
  }

  down () {
    this.drop('detail_products')
  }
}

module.exports = DetailProductSchema
