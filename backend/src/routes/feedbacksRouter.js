const Router = require('express')
const validate = require('../middlewares/validateSchema')
const schema = require('../schemas/feedbacks')
const feedbacksControlller = require('../controllers/feedback')
const router = Router()

router.post(
  '/',
  validate(schema.CREATE_FEEDBACKS),
  feedbacksControlller.createFeedbacks
)

router.get('/', validate(schema.GET_FEEDBACKS), feedbacksControlller.getFeedbacks)

// router.patch('/:id', validate(schema.UPDATE_CAFE), cafesController.updateCafe)

// router.delete('/:id', validate(schema.DELETE_CAFE), cafesController.deleteCafe)

module.exports = router
