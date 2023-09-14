const VendorRepository = require('../repository/vendor-repo');

class VendorService{

      constructor(){

        this.vendorRepository= new VendorRepository();

      }

      async createVendor(data){

        try{
            const vendor=await this.vendorRepository.createVendor(data);
            return vendor;
        }

        catch(err){
          console.log("something went wrong in service layer",err);
        }


      }

      async deleteVendor(vendorId){

        try{
            const vendor=await this.vendorRepository.deleteVendor(vendorId);
            return vendor;
        }

        catch(err){
          console.log("something went wrong in service layer",err);
        }


      }

      async updateVendor(vendorId,data){
               
        try{
            const vendor=await this.vendorRepository.updateVendor(vendorId,data);
            return vendor;
        }

        catch(err){
          console.log("something went wrong in service layer",err);
        }


      }

      async getVendor(vendorId){

        try{
            const vendor=await this.vendorRepository.getVendor(vendorId);
            return vendor;
        }

        catch(err){
          console.log("something went wrong in service layer",err);
        }


      }

      async getAllVendors(){

        try {

          const vendors= await this.vendorRepository.getAllVendors();
          return vendors;
          
        } catch (err) {

          console.log("something went wrong in service layer",err);
          
        }


      }


}

module.exports=VendorService;