const {Vendor}= require('../models/index');

class VendorRepository {

    async create(data){

        try {
            const vendor= await Vendor.create(data);
            return vendor;
        
        } catch (err) {
           console.log("Something went wrong in Repo Layer ", err);
        }

    }


    async destroy(vendorId){

        try {
            
             await Vendor.destroy({
                where:{
                    id:vendorId
                }
             });
             
             return true;

        
        } catch (err) {
           console.log("Something went wrong in Repo Layer ", err);
        }


    }

    async getById(vendorId){

        try {

            const vendor=await Vendor.findByPk(vendorId);

            return vendor;
            
        } catch (err) {

            console.log("Something went wrong in Repo Layer ",err);
            
        }
    }

    async getByEmail(vendorEmail){
            
        try {

            const vendor= await Vendor.findOne({
                where:{
                    email:vendorEmail
                }
            });
            return vendor;
            
        } catch (err) {

            console.log("Something went wrong in Repo layer ",err);
            
        }

    }

   


}

module.exports=VendorRepository;