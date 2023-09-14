const VendorService =require("../service/vendor-service");


const vendorService= new VendorService();


const create =async(req,res)=>{

   try {

    const response= await vendorService.create({
        name:req.body.name, 
        email:req.body.email,
        password:req.body.password
    })
    
    return res.status(201).json({

        success:true,
        message:"Created a new vendor",
        data:response,
        error:{}
    });

    
   } catch (err) {

    return res.status(500).json({

        message:"Something went wrong Can't create the vendor",
        data:{},
        success:false,
        error:err
    })
    
   }

}


const signIn= async(req,res)=>{

   try {

    const token = await vendorService.signIn(req.body.email,req.body.password);

    return res.status(201).json({

        success:true,
        message:"Created a new JWT TOKEN",
        data:token,
        error:{}

    })
    
   } catch (err) {
      
    return res.status(500).json({

        message:"cannot sign in",
        data:{},
        success:false,
        error:err

    })

    
   }

}


const isAuthenticated= async(req,res)=>{

   try {

    const token= req.headers['x-access-token'];

    const response= await vendorService.isAuthenticated(token);
  
    if(!response){

        return res.status(401).json({

            message:"Invalid Token",
            data:{},
            success:false,
    
        })
        
    } 

    return res.status(201).json({

        success:true,
        message:"Authentication Done",
        data:response,
        error:{}

    })



    
   } catch (err) {

    return res.status(500).json({

        message:"not able to authenticated",
        data:{},
        success:false,
        error:err

    })
    
   }

}


module.exports={
    create,
    signIn,
    isAuthenticated
}