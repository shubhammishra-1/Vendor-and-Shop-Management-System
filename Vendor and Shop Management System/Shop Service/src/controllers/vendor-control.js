const VendorService= require('../services/vendor-service');

const vendorService=new VendorService();


//POST ->/vendor

const create =async (req,res)=>{

    try{

        const vendor=await vendorService.createVendor(req.body);
        
        return res.status(201).json({

            data:vendor,
            success: true,
            message:"Successfully created...",
            err:{}
        });
    }

    catch(err){
        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to create",
            errror:err
        });
    }



};

//DELETE -> /vendor/:id


const destroy =async (req,res)=>{

    try{

        const vendor=await vendorService.deleteVendor(req.params.id);

        return res.status(201).json({

            data:vendor,
            success: true,
            message:"Successfully deleted...",
            err:{}
        });
    }

    catch(err){
        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to delete",
            errror:err
        });
    }



};

//GET -> /vendor/:id

const get =async (req,res)=>{

    try{

        const vendor=await vendorService.getVendor(req.params.id);

        return res.status(201).json({

            data:vendor,
            success: true,
            message:"Successfully get details...",
            err:{}
        });
    }

    catch(err){
        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to fetch",
            errror:err
        });
    }



};

//PATCH -> /vendor/:id -> req.body


const update =async (req,res)=>{

    try{

        const vendor=await vendorService.updateVendor(req.params.id,req.body);

        return res.status(201).json({

            data:vendor,
            success: true,
            message:"Successfully updated details...",
            err:{}
        });
    }

    catch(err){
        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to update",
            errror:err
        });
    }



 };


 const getAll=async(req,res)=>{
             
    try {
      
      const vendors=await vendorService.getAllVendors();

        return res.status(201).json({

            data:vendors,
            success: true,
            message:"Successfully fetched details...",
            err:{}
        });


        
    } catch (err) {

        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to fetch the Details",
            errror:err
        });
        
    }

} 


module.exports={
    create,
    destroy,
    get,
    update,
    getAll
};