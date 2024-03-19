const Router = require('express')
const validate = require('../middlewares/validateSchema')
const schema = require('../schemas/cafes')
const { uploadAvatar } = require('../../utils/multer')
const cafesController = require('../controllers/cafes')

const router = Router()

router.post(
  '/',
  validate(schema.CREATE_CAFES),
  uploadAvatar,
  cafesController.createCafes
)

router.get('/', validate(schema.GET_CAFES), cafesController.getCafes)

router.patch('/:id', validate(schema.UPDATE_CAFE), cafesController.updateCafe)

router.delete('/:id', validate(schema.DELETE_CAFE), cafesController.deleteCafe)

module.exports = router
