const express =require('express');

const ShopController=require('../../controller/shop-control');


//http://localhost:700/api/shop ...

const router= express.Router();



//read all

router.get('/shops',ShopController.getAll);

//read by Id

router.get('/shop/:id',ShopController.getById);


//read by location

router.get('/shopsbylocation',ShopController.getShopsBylocation);




module.exports =router;