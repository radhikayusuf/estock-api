'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('nama_product', 80).notNullable()
      table.string('harga_product', 80).notNullable()
      table.integer('id_user', 30).unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
