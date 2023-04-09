const express=require('express');
const router=express.Router();



const {getIndex,stract,login,search, loginOk} = require('../controllers/frontContreollers')



router.get('/', getIndex);
router.get('/detalles/:id',stract)
router.get('/login',login)
router.post('/login/admin',loginOk)
router.get('/search/',search)


module.exports = router;