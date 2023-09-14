const ShopService= require('../service/shop-service');

const shopService=new ShopService();


const getById =async (req,res)=>{

    try{

        const shop=await shopService.getShopById(req.params.id);


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



 const getAll=async(req,res)=>{
             
    try {
      
      const shops=await shopService.getAllShops();
      console.log(shops);


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

const getShopsBylocation=async(req,res)=>{
             
    try {
      
      const shops=await shopService.getShopsBylocation(req.body.location);

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
    getById,
    getAll,
    getShopsBylocation
};