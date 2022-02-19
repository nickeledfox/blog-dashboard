const multer = require('multer');

// multer middleware
module.exports = fileStorage = multer.diskStorage({
  destination: function (req, file, next) {
    next(null, './uploads');
  },
  filename: function (req, file, next) {
    next(null, file.fieldname + '_' + Date.now() + '_' + file.originalname);
  },
});

module.exports = fileUpload = multer({
  storage: fileStorage,
}).single('image', function (err) {
  if (err) {
    console.log(`upload.single error: ${err}`);
    return res.status(500);
  }
});
