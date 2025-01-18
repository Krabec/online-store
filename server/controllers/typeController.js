const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req, res, next) {
        const {name} = req.body
        const checkType = await Type.findOne({where: {name}})
        if(checkType) {
            return next(ApiError.badRequest('Данная категория уже существует'))
        }
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()