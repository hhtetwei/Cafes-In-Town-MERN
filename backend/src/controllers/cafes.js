const cafesService = require('../services/cafes')

const cafesController = {
  createCafes: async (req, res, next) => {
    try {
      const cafes = await cafesService.createCafes(req.body, req.file)

      return res.status(201).json(cafes)
    } catch (err) {
      next(err)
    }
  },

  getCafes: async (req, res, next) => {
    try {
      const cafes = await cafesService.getCafes(req.query)

      return res.status(200).json(cafes)
    } catch (err) {
      next(err)
    }
  },

  updateCafe: async (req, res, next) => {
    try {
      const payload = req.body
      const id = req.params.id
      const cafe = await cafesService.updateCafe(id, payload)

      return res.status(200).json(cafe)
    } catch (err) {
      next(err)
    }
  },

  deleteCafe: async (req, res, next) => {
    try {
      const cafe = await cafesService.deleteCafe(req.params.id)

      return res.send(200)
    } catch (err) {
      next(err)
    }
  },
}

module.exports = cafesController
