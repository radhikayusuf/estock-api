'use strict'

const User = use('App/Models/User')
const sha1 = require('sha1')

class UserController {

    async login({request, response}){
        let username = request.body.username
        let password = sha1(request.body.password)
        
        const user = await User.query()
            .where('username','=', username)
            .where('password' ,'=', password)
            .fetch()

        if (user.toJSON().length == 0) {
            return response.sendError(null, 'UnAuthorized access', 403)
        }

        return response.ok({token: "djsakldjaslhdksadja", user: user.toJSON()[0]}, 'Success login')
    }

    async register({request, response}){
        let createData = {}

        createData.username = request.body.username;
        createData.password = request.body.password;
        createData.email = request.body.email;
        createData.nama_user = request.body.nama_user;
        createData.gender = request.body.gender;
        createData.phone = request.body.phone;
        createData.is_store = request.body.is_store;
        createData.image_url = request.body.image_url;
        createData.address = request.body.address;
        createData.lat = request.body.lat;
        createData.lang = request.body.lang;    

        if(createData.username==null || createData.username == ""){
            return response.sendError(null, 'Username cant null or empty', 400)
        }

        if(createData.password==null || createData.password == ""){
            return response.sendError(null, 'Password cant null or empty', 400)
        }
        
        if(createData.email == null || createData.email == ""){
            return response.sendError(null, 'Eamil cant null or empty', 400)
        }

        if(createData.nama_user == null || createData.nama_user == ""){
            return response.sendError(null, 'Nama User cant null or empty', 400)
        }

        if(createData.gender == null || createData.gender == ""){
            return response.sendError(null, 'Gender cant null or empty', 400)
        } else if(!(createData.gender == 'L' || createData.gender == 'P') ){
            return response.sendError(null, 'Gender options just L & P', 400)
        }

        if(createData.phone == null || createData.phone == ""){
            return response.sendError(null, 'Phone cant null or empty', 400)
        }

        if(createData.is_store == null || createData.is_store == ""){
            return response.sendError(null, 'User type cant null or empty', 400)
        }

        if(createData.address == null || createData.address == ""){
            return response.sendError(null, 'Address cant null or empty', 400)
        }

        if(createData.lat == null || createData.lat == ""){
            return response.sendError(null, 'Lat cant null or empty', 400)
        }

        if(createData.lang == null || createData.lang == ""){
            return response.sendError(null, 'lang cant null or empty', 400)
        }


        let user = await User.query().where('email','=', createData.email).fetch()
        if (user.toJSON().length > 0) {
            return response.sendError(null,'Email already used by other person', 500)
        }

        let data = await User.create(createData)

        return response.ok(data, 'Success create user', 200)



    }

}

module.exports = UserController
