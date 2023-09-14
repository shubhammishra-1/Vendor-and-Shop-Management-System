const {Shop} = require('../models/index');

const { Op } = require('sequelize');


//Crud operations on Shop

class ShopRepository{
   
    async createShop(data){

        try{

            const shop=await Shop.create(data);
            return shop;
        }

        catch(err){
            console.log("something went wrong in repo layer",err);
        }
    }

    async deleteShop(shopId){

         try{
               
            await Shop.destroy({


                where:{
                    id: shopId
                }
            });

            return true;

         }
         
         catch(err){
               
            console.log("something went wrong in repo layer",err);

         }

    }

    async updateShop(shopId,data){

        try{

           const shop=await Shop.update(data,{
             where : {
                id : shopId
             }

           })

           return shop;
        }

        catch(err){
               
            console.log("something went wrong in repo layer",err);

        }

    }

    async getShop(shopId){

        try{
            const shop=await Shop.findByPK(shopId);
            return shop;
        }
        catch(err){
            console.log("something went wrong in repo layer",err);
        }



    }

    async getAllShops(){
            
        try {

            const shops= await Shop.findAll();
            return shops;
            
        } catch (err) {
            
            console.log("something went wrong in repo layer",err);
        }


    }
  


}


module.exports=ShopRepository;