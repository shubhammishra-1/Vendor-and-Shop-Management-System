const express = require('express');

const router = express.Router();


const v1APIroutes=require('./v1/index');

//http://localhost:700/api/v1/...

router.use('/v1',v1APIroutes);

module.exports=router;