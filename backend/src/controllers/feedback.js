const feedbackService = require('../services/feedbacks')

const feedbacksController = {
  createFeedbacks: async (req, res, next) => {
    try {
      const feedbacks = await feedbackService.createFeedbacks(req.body)

      return res.status(201).json(feedbacks)
    } catch (err) {
      next(err)
    }
  },

  getFeedbacks: async (req, res, next) => {
    try {
      const feedbacks = await feedbackService.getFeedbacks(req.query)

      return res.status(200).json(feedbacks)
    } catch (err) {
      next(err)
    }
  },

  updateFeedbacks: async (req, res, next) => {
    try {
      const payload = req.body
      const id = req.params.id
      const feedback = await feedbackService.updateFeedbacks(id, payload)

      return res.status(200).json(feedback)
    } catch (err) {
      next(err)
    }
  },

  deleteFeedbacks: async (req, res, next) => {
    try {
      const feedback = await feedbackService.deleteFeedbacks(
        req.params.id
      )

      return res.send(200)
    } catch (err) {
      next(err)
    }
  },
}

module.exports = feedbacksController
