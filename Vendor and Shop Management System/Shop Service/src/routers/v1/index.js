const express =require('express');

const ShopController=require('../../controllers/shop-control');
const VendorController=require('../../controllers/vendor-control');


//http://localhost:800/api/vendor OR shop ...

const router= express.Router();


                                     //CRUD for Vendors


//Create

router.post('/vendor',VendorController.create);


//delete

router.delete('/vendor/:id',VendorController.destroy);

//update

router.patch('/vendor/:id',VendorController.update);

//Read

router.get('/vendor/:id',VendorController.get);

//Read all

router.get('/vendor',VendorController.getAll);



                                       //CRUD for Shops


//create

router.post('/shop',ShopController.create);


//delete

router.delete('/shop/:id',ShopController.destroy);


//read all

router.get('/shop',ShopController.getAll);

//read 

router.get('/shop/:id',ShopController.get);


//update


router.patch('/shop/:id',ShopController.update);


module.exports =router;