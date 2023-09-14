const {Shop} = require('../models/index');


class ShopRepository{

    async getShopById(shopId){

        try{
            const shop=await Shop.findOne({where:{shopId:shopId}});
            return shop;
        }
        catch(err){
            console.log("something went wrong in repo layer",err);
        }



    }

    async getShopsBylocation(location){

        try{
            const shops=await Shop.findAll({ where: { location: location } });
            return shops;
        }
        catch(err){
            console.log("something went wrong in repo layer",err);
        }




    }

    async getAllShops(){
            
        try {

            const shops= await Shop.findAll();
            console.log(shops);

            return shops;
            
        } catch (err) {
            
            console.log("something went wrong in repo layer--",err);
        }


    }
  


}


module.exports=ShopRepository;