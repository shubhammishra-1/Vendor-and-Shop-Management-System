const express=require('express');

const ApiRoutes=require('./routers/index');


const bodyParser = require('body-parser');




const PORT=700;

const setupAndStartServer=async()=>{

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));


    //http://localhost:700/api/...
    app.use('/api',ApiRoutes);

    app.listen(PORT,async()=>{
        
        console.log(`Server is runing on ${PORT}...`);
    });

}


setupAndStartServer();