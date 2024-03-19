const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const schema = Object.freeze({
  CREATE_FEEDBACKS: Joi.object({
    body: Joi.object({
      name: Joi.string(),
      feedback: Joi.string().required(),
      for: Joi.string().required()
    }),
  }),

  GET_FEEDBACKS: Joi.object({
    query: Joi.object({
      limit: Joi.number(),
      skip: Joi.number(),
      sort: Joi.any().default('-createdAt'),
      search: Joi.string(),
    }),
  }),

  UPDATE_FEEDBACKS: Joi.object({
    params: Joi.object({
      id: Joi.objectId().required(),
    }),
    body: Joi.object({
      name: Joi.string(),
      feedback: Joi.string(),
    }),
  }),

  DELETE_CAFE: Joi.object({
    params: Joi.object({
      id: Joi.objectId().required(),
    }),
  }),
})

module.exports = schema
