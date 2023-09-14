const express= require('express');

const apiRoutes=require('./routers/index');
const bodyParser = require('body-parser');


const app= express();

const PORT=900;


const startServer=()=>{

  app.listen(PORT,()=>{

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    //localhost:900/api/...

    app.use('/api',apiRoutes);

    console.log(`Server is running on ${PORT}...`);

  });

}


startServer();