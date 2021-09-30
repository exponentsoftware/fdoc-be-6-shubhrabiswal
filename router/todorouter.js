const express = require('express');
const router = express.Router();
const todocontroller = require('../controller/todocontroller')
const viewlikecontroller = require('../controller/viewlikecontroller')
const auth = require('./auth')

router.get('/like',viewlikecontroller.getlikes) 
router.post('/add',todocontroller.addtodo )
router.get('/', auth.required,todocontroller.getalltodo);
router.get('/:id',auth.required, todocontroller.gettodoById);
router.put('/:id',auth.required,todocontroller.updatetodo )
router.delete('/:id',auth.required,todocontroller.deletetodo )

// router.post('/category',auth.required,todocontroller.bycategory)
// router.post('/title',auth.required,todocontroller.bytitle)
// router.put('/complete/:id',auth.required,todocontroller.completetodo)


router.post('/like/:id',viewlikecontroller.addlike)   


module.exports = router;