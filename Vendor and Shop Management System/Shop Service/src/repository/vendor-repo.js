const {Vendor} = require('../models/index');

const { Op } = require('sequelize');


//Crud operations on Shop

class VendorRepository{
   
    async createVendor(data){

        try{

            const vendor=await Vendor.create(data);
            return vendor;
        }

        catch(err){
            console.log("something went wrong in repo layer",err);
        }
    }

    async deleteVendor(vendorId){

         try{
               
            await Vendor.destroy({


                where:{
                    id: vendorId
                }
            });

            return true;

         }
         
         catch(err){
               
            console.log("something went wrong in repo layer",err);

         }

    }

    async updateVendor(vendorId,data){

        try{

           const vendor=await Vendor.update(data,{
             where : {
                id : vendorId
             }

           })

           return vendor;
        }

        catch(err){
               
            console.log("something went wrong in repo layer",err);

        }

    }

    async getVendor(vendorId){

        try{
            const vendor=await Vendor.findByPK(vendorId);
            return vendor;
        }
        catch(err){
            console.log("something went wrong in repo layer",err);
        }



    }

    async getAllVendors(){
            
        try {

            const vendors= await Vendor.findAll();
            return vendors;
            
        } catch (err) {
            
            console.log("something went wrong in repo layer",err);
        }


    }
  


}


module.exports=VendorRepository;