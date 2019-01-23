'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

    static boot() {
      super.boot()
      this.addGlobalScope(builder => {
          builder.with('images')
          builder.with('detail_product')
      })
    }

    static get table()
    {
      return "products"
    }

    images() {
      return this.hasMany('App/Models/Image', 'id', 'id_product')
    }

    detail_product() {
      return this.hasMany('App/Models/DetailProduct', 'id', 'id_product')
    }

    static scopeSearch(query, key) {
      return query.where('nama_product', 'LIKE', '%' + key + '%')
  }

}

module.exports = Product
