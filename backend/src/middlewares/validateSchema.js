const R = require('ramda')

const validate = (schema) => (req, res, next) => {
  const keysToValidate = Object.keys(schema.describe().keys)
  const requestPicker = R.pick(keysToValidate)
  const { error, value } = schema.validate(requestPicker(req))

  if (error) throw error

  keysToValidate.map((key) => {
    req[key] = value[key]
  })

  next()
}

module.exports = validate
