const feedbacksService = require('../services/feedbacks')

const cafesDetailsController = {
  createCafesDetails: async (req, res, next) => {
    try {
      const cafes = await feedbacksService.createCafesDetails(
        req.body,
        req.files
      )

      return res.status(201).json(cafes)
    } catch (err) {
      next(err)
    }
  },

  getCafesDetails: async (req, res, next) => {
    try {
      const cafes = await feedbacksService.getCafesDetails(req.query)

      return res.status(200).json(cafes)
    } catch (err) {
      next(err)
    }
  },

  updateCafeDetails: async (req, res, next) => {
    try {
      const payload = req.body
      const id = req.params.id
      const cafe = await feedbacksService.updateCafeDetails(id, payload)

      return res.status(200).json(cafe)
    } catch (err) {
      next(err)
    }
  },

  deleteCafeDetails: async (req, res, next) => {
    try {
      const cafe = await feedbacksService.deleteCafeDetails(req.params.id)

      return res.send(200)
    } catch (err) {
      next(err)
    }
  },
}

module.exports = cafesDetailsController
