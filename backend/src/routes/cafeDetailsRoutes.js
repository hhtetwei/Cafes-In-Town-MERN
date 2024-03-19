const Router = require('express')
// const cafesController = require('../controllers/cafes')
const schema = require('../schemas/cafesDetails')
const { uploadImages } = require('../../utils/multer')
const validate = require('../middlewares/validateSchema')
const cafesDetailsController = require('../controllers/cafesDetails')

const router = Router()

router.post(
  '/',
  validate(schema.CREATE_CAFES_DETAILS),
  uploadImages,
  cafesDetailsController.createCafesDetails
)

router.get(
  '/',
  validate(schema.GET_CAFES_DETAILS),
  cafesDetailsController.getCafesDetails
)

// router.patch('/:id', validate(schema.UPDATE_CAFE), cafesController.updateCafe)

// router.delete('/:id', validate(schema.DELETE_CAFE), cafesController.deleteCafe)

module.exports = router
