const { CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer')
const cloudinary = require('./cloudinaryConfig')

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'photos',
    format: 'jpeg',
    public_id: (req, file) => {
      // console.log('here', file)

      const ext = file.originalname.split('.').slice(-1).pop()
      const filename = `${file.fieldname}-${Date.now()}.${ext}`

      return filename
    },
  },
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) cb(null, true)
  else
    cb(
      new Error({
        code: 400,
        message: 'You cannot add this kind of file type',
      }),
      false
    )
}

const multerStorage = multer.memoryStorage()

const upload = multer({
  storage,
  // storage: multerStorage,
  // fileFilter,
  // limits: {
  //   fileSize: 1024 * 1024 * 2, // 2MB
  // },
})

const uploadImages = upload.array('images', 5)

const uploadAvatar = upload.single('avatar_url')

// const uploadImages = upload.fields([
//   { name: 'images', maxCount: 15 },
//   { name: 'avatar_url', maxCount: 1 },
// ])

module.exports = { uploadImages, uploadAvatar }
