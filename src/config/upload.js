const multer = require('multer');
const pach = require('path');

module.exports = {
  storage: multer.diskStorage({
    destination: pach.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      const ext = pach.extname(file.originalname);
      const name = pach.basename(file.originalname, ext);

      cb(null, `${name}-${Date.now()}${ext}`);
    },
  }),
};