const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/usercontroller')

const auth = require('./auth')


router.get('/:id',usercontroller.getalltodo);

router.post('/signin',usercontroller.signin)
router.post('/signup',usercontroller.adduser)


// router.post('/like',auth.required,usercontroller.addlike)

module.exports = router;