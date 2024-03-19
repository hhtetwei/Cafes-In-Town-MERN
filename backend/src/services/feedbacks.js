const { CAFE_ERRORS } = require('../constants/error-constants')
const feedbacksModel = require('../models/feedbacks')

const feedbacksService = {
  createFeedbacks: async (reqBody) => {
    const cafes = await feedbacksModel.create({
      ...reqBody,
    })

    return cafes
  },

  getFeedbacks: async (reqQuery) => {
    let { search, sort } = reqQuery

    let filter = {}

    if (search) {
      filter.name = { $regex: search, $options: 'i' }
    }

    const page = reqQuery.page * 1 || 1
    const limit = reqQuery.limit || reqQuery.limit * 1 || 10
    const skip = (page - 1) * limit
    sort = sort || { createdAt: -1 };

    const [data, count] = await Promise.all([
      feedbacksModel.find(filter).skip(skip).limit(limit).sort(sort),
      feedbacksModel.find(filter).countDocuments(),
    ])
    return { data, count }
  },

  updateFeedbacks: async (id, payload) => {
    const feedbacks = await feedbacksModel.findById(id)

    if (!feedbacks) {
      throw CAFE_ERRORS.CAFE_NOT_FOUND
    }
    const feedback = await feedbacksModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    })
    return feedback
  },

  deleteFeedbacks: async (id) => {
    const feedbacks = await feedbacksModel.findById(id)
    if (!feedbacks) {
      throw CAFE_ERRORS.CAFE_NOT_FOUND
    }
    const feedback = await feedbacksModel.findByIdAndDelete(id)
    return feedback
  },
}

module.exports = feedbacksService
