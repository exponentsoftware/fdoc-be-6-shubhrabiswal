const express = require('express');
const router = express.Router();
const admincontroller = require('../controller/admincontroller')
const downloadcont = require('../controller/download')
const auth = require('./auth')



router.get('/',auth.authadmin.required,admincontroller.getalluser);
router.get('/download',auth.authadmin.required, downloadcont.download);



module.exports = router;