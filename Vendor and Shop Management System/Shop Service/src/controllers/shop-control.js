const ShopService= require('../services/shop-service');

const shopService=new ShopService();


//POST ->/shop

const create =async (req,res)=>{

    try{

        const shop=await shopService.createShop(req.body);
        
        return res.status(201).json({

            data:shop,
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

//DELETE -> /shop/:id


const destroy =async (req,res)=>{

    try{

        const shop=await shopService.deleteShop(req.params.id);

        return res.status(201).json({

            data:shop,
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

//GET -> /shop/:id

const get =async (req,res)=>{

    try{

        const shop=await shopService.getShop(req.params.id);

        return res.status(201).json({

            data:shop,
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

//PATCH -> /shop/:id -> req.body


const update =async (req,res)=>{

    try{

        const shop=await shopService.updateShop(req.params.id,req.body);

        return res.status(201).json({

            data:shop,
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
      
      const shops=await shopService.getAllShops();

        return res.status(201).json({

            data:shops,
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