'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 80).notNullable().unique()
      table.string('password', 255).notNullable()
      table.string('nama_user', 40).notNullable()              
      table.string('gender', 1).notNullable()
      table.string('phone', 15).notNullable()
      table.boolean('is_store', 40).defaultTo(false)
      table.string('image_url', 40).defaultTo("default-image.png")
      table.string('address', 100).notNullable()
      table.double('lat', 100).defaultTo(0.0)
      table.double('lang', 100).defaultTo(0.0)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
