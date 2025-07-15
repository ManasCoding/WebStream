// const multer = require('multer');
import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({storage: storage});
module.exports = upload;