'use strict'

class ResponseHelper {
    
    async handle({
        request,
        response
    }, next) {

        const paramRequest      = request.all()
        response.ok             = (data, message, code) => {

            let result = {
                code: 200,
                status: true,
                message: 'OK'
            }

            if (data) result.data = data
            if (code) result.code = code
            if (message) result.message = message

            return response.status(200).send(result)
        }

        response.sendError      = (data, message, code, status) => {

            let result = {
                code: 400,
                status: false,
                message: 'Bad Request'
            }

            if (data) result.data = data
            if (code) result.code = code
            if (status) result.status = status
            if (message) result.message = message

            return response.status(code).send(result)
        }

        response.sendPage       = (data, message, code, status) => {

            let result = {
                code: 200,
                status: true,
                message: 'OK',
                data: {
                    content: data.data,
                    pagginate: {
                        total: data.total,
                        current_page: data.page,
                        last_page: data.lastPage,
                        per_page: data.perPage
                    }
                }
            }

            if (code) result.code = code
            if (message) result.message = message
            if (status) result.status = status

            return response.status(result.code).send(result)
        }

        await next()
    }
}

module.exports = ResponseHelper