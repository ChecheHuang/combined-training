const path = require('path');
const multer = require('multer');

const myStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../', 'public', 'uploads'));
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop();
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  },
});
const uploader = multer({
  storage: myStorage,
  fileFilter: function (req, file, cb) {
    // console.log(file);
    if (file.mimetype !== 'image/jpeg') {
      return cb(new Error('不合法的 file type'), false);
    }
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('是不合格的副檔名'));
    }
    cb(null, true);
  },
  limits: {
    fileSize: 1024 * 1024,
  },
});
module.exports = uploader;
