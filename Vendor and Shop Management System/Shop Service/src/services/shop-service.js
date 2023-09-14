const ShopRepository = require('../repository/shop-repo');

class ShopService{

      constructor(){

        this.shopRepository= new ShopRepository();

      }

      async createShop(data){

        try{
            const shop=await this.shopRepository.createShop(data);
            return shop;
        }

        catch(err){
          console.log("something went wrong in service layer",err);
        }


      }

      async deleteShop(shopId){

        try{
            const response=await this.shopRepository.deleteShop(shopId);
            return response;
        }

        catch(err){
          console.log("something went wrong in service layer",err);
        }


      }

      async updateShop(shopId,data){
               
        try{
            const shop=await this.shopRepository.updateShop(shopId,data);
            return shop;
        }

        catch(err){
          console.log("something went wrong in service layer",err);
        }


      }

      async getShop(shopId){

        try{
            const shop=await this.shopRepository.getShop(shopId);
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


}

module.exports=ShopService;