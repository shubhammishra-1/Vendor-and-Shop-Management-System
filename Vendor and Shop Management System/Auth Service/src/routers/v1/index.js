const express =require('express');

const VendorController= require('../../controller/vendor-control');


const router=express.Router();

//localhost:900/api/v1/signup OR signin etc...


router.post('/signup',VendorController.create);



router.post('/signin',VendorController.signIn);

router.get('/isAuthenticated',VendorController.isAuthenticated);




module.exports=router;