const { CAFE_ERRORS } = require('../constants/error-constants')
const cafesDetails = require('../models/cafesDetails')

const cafesDetailsService = {
  createCafesDetails: async (reqBody, images = []) => {
    const imgArray = images?.map((img) => ({
      url: img.path,
      public_id: img.filename,
    }))

    const cafes = await cafesDetails.create({
      ...reqBody,
      images: imgArray,
    })

    return cafes
  },

  getCafesDetails: async (reqQuery) => {
    let { search, sort } = reqQuery

    let filter = {}

    if (search) {
      filter.name = { $regex: search, $options: 'i' }
    }

    const page = reqQuery.page * 1 || 1
    const limit = reqQuery.limit || reqQuery.limit * 1 || 10
    const skip = (page - 1) * limit

    const [data, count] = await Promise.all([
      cafesDetails.find(filter).skip(skip).limit(limit).sort(sort),
      cafesDetails.find(filter).countDocuments(),
    ])
    return { data, count }
  },

  updateCafeDetails: async (id, payload) => {
    const cafes = await cafesDetails.findById(id)

    if (!cafes) {
      throw CAFE_ERRORS.CAFE_NOT_FOUND
    }
    const cafe = await cafesDetails.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    })
    return cafe
  },

  deleteCafeDetails: async (id) => {
    const cafes = await cafesDetails.findById(id)
    if (!cafes) {
      throw CAFE_ERRORS.CAFE_NOT_FOUND
    }
    const cafe = await cafesDetails.findByIdAndDelete(id)
    return cafe
  },
}

module.exports = cafesDetailsService
