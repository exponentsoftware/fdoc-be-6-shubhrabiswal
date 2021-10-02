const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/usercontroller')
const auth = require('./auth')

router.post('/signup',usercontroller.adduser)
router.get('/:id',usercontroller.getalltodo);
router.post('/signin',auth.optional,usercontroller.signin)


// router.post('/like',auth.required,usercontroller.addlike)

module.exports = router;