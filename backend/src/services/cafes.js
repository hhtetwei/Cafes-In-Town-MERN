const { CAFE_NOT_FOUND, CAFE_ERRORS } = require('../constants/error-constants')
const cafesModel = require('../models/cafes')

const cafesService = {
  createCafes: async (reqBody, avatar_url) => {
    if (avatar_url) {
      reqBody.avatar_url = {
        url: avatar_url.path,
        public_id: avatar_url.filename,
      }
    }
    const cafes = await cafesModel.create({
      ...reqBody,
    })

    return cafes
  },

  getCafes: async (reqQuery) => {
    let { search, sort } = reqQuery

    let filter = {}

    if (search) {
      filter.name = { $regex: search, $options: 'i' }
    }

    const page = reqQuery.page * 1 || 1
    const limit = reqQuery.limit || reqQuery.limit * 1 || 10
    const skip = (page - 1) * limit

    const [data, count] = await Promise.all([
      cafesModel.find(filter).skip(skip).limit(limit).sort(sort),
      cafesModel.find(filter).countDocuments(),
    ])
    return { data, count }
  },

  updateCafe: async (id, payload) => {
    const cafes = await cafesModel.findById(id)

    if (!cafes) {
      throw CAFE_ERRORS.CAFE_NOT_FOUND
    }
    const cafe = await cafesModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    })
    return cafe
  },

  deleteCafe: async (id) => {
    const cafes = await cafesModel.findById(id)
    if (!cafes) {
      throw CAFE_ERRORS.CAFE_NOT_FOUND
    }
    const cafe = await cafesModel.findByIdAndDelete(id)
    return cafe
  },
}

module.exports = cafesService
