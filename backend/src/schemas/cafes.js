const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const schema = Object.freeze({
  CREATE_CAFES: Joi.object({
    body: Joi.object({
      name: Joi.string(),
      description: Joi.string(),
      location: Joi.string(),
      avatar_url: Joi.string().uri(),
    }),
  }),

  GET_CAFES: Joi.object({
    query: Joi.object({
      limit: Joi.number(),
      skip: Joi.number(),
      sort: Joi.string().default('createdAt'),
      search: Joi.string(),
    }),
  }),

  UPDATE_CAFE: Joi.object({
    params: Joi.object({
      id: Joi.objectId().required(),
    }),
    body: Joi.object({
      name: Joi.string(),
      images: Joi.array().items(Joi.string().uri()),
      description: Joi.string(),
      location: Joi.string(),
    }),
  }),

  DELETE_CAFE: Joi.object({
    params: Joi.object({
      id: Joi.objectId().required(),
    }),
  }),
})

module.exports = schema
