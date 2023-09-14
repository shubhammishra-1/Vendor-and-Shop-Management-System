const ShopRepository = require('../repository/shop-repo');

class ShopService{

      constructor(){

        this.shopRepository= new ShopRepository();

      }


      async getShopById(shopId){

        try{
            const shop=await this.shopRepository.getShopById(shopId);
            return shop;
        }

        catch(err){
          console.log("something went wrong in service layer",err);
        }


      }

      async getAllShops(){

        try {

          const shops= await this.shopRepository.getAllShops();
          return shops;
          
        } catch (err) {

          console.log("something went wrong in service layer",err);
          
        }


      }

      async getShopsBylocation(location){

        try {

          const shops= await this.shopRepository.getShopsBylocation(location);
          return shops;
          
        } catch (err) {

          console.log("something went wrong in service layer",err);
          
        }


      }


}

module.exports=ShopService;