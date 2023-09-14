const express =require('express');

const router= express.Router();


const v1API =require('./v1/index');

//localhost:900/api/v1/...


router.use('/v1',v1API);

module.exports=router;