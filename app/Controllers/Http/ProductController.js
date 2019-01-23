'use strict'

const Product = use('App/Models/Product')

class ProductController {

    async retrieve({request, response}){   
        let limit = request.input("limit")
        let search = request.input("search")
    
        let productQuery = Product.query()
    
        if(search){
            productQuery.search(search)
        }

        const product = await productQuery.paginate(1, limit) 

        if (product.toJSON().length == 0) {
            return response.sendError([], 'Product not found', 201, false)
        } 

        return response.sendPage(product.toJSON(), 'Success retrieve data', 200, true)
    }

    async higlight({request, response}){   
        let limit = request.input("limit")
        let search = request.input("search")
        

        let productQuery = Product.query()
    
        if(search){
            productQuery.search(search)
        }

        const product = await productQuery.paginate(1, limit) 

        if (product.toJSON().length == 0) {
            return response.sendError([], 'Product not found', 201, false)
        } 
    
        return response.sendPage(product.toJSON(), 'Success retrieve data', 200, true)
    }


    async detailProduct({request, response}){   
        let limit = request.input("limit")
        let search = request.input("search")
        

        let productQuery = Product.query()
    
        if(search){
            productQuery.search(search)
        }

        const product = await productQuery.paginate(1, limit) 

        if (product.toJSON().length == 0) {
            return response.sendError([], 'Product not found', 201, false)
        } 

        return response.sendPage(product.toJSON(), 'Success retrieve data', 200, true)
    }

}

module.exports = ProductController
