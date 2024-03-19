const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const schema = Object.freeze({
  CREATE_CAFES_DETAILS: Joi.object({
    body: Joi.object({
      images: Joi.array().items(Joi.string().uri()),
      reason: Joi.string(),
      d_code: Joi.string(),
    }),
  }),

  GET_CAFES_DETAILS: Joi.object({
    query: Joi.object({
      limit: Joi.number(),
      skip: Joi.number(),
      sort: Joi.string().default('createdAt'),
    }),
  }),

  UPDATE_CAFE_DETAILS: Joi.object({
    params: Joi.object({
      id: Joi.objectId().required(),
    }),
    body: Joi.object({
      images: Joi.array().items(Joi.string().uri()),
      reason: Joi.string(),
      d_code: Joi.string(),
    }),
  }),

  DELETE_CAFE: Joi.object({
    params: Joi.object({
      id: Joi.objectId().required(),
    }),
  }),
})

module.exports = schema
