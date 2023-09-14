const VendorRepository =require('../repository/vendor-repo');

const jwt=require('jsonwebtoken');

const bcrypt=require('bcrypt');



const JWT_KEY="dsnjncjsijsmkldk"

class VendorService{

    constructor(){
        this.vendorRepository=new VendorRepository();
    }

    async create(data){

         try {
            
            //storing hashed password
            data.password= await bcrypt.hash(data.password,10);


            const vendor=await this.vendorRepository.create(data);
            return vendor;
            
         } catch (err) {

            console.log("Something went wrong in Service Layer ",err);
            
         }    

    }

    async createToken(vendor){

        try {

            const token=  jwt.sign(vendor,JWT_KEY,{expiresIn:'1d'});
            return token;
            
        } catch (err) {

            console.log("Not able to create token ",err);
            
        }
    }

    verifyToken(token){
          
        try {

            const data= jwt.verify(token,JWT_KEY);
            return data;
            
        } catch (err) {

            console.log("Not able to verify the token ",err);
            
        }


    }

    async signIn(email,plainPassword){

        try {
            //find user by email
            const vendor=await this.vendorRepository.getByEmail(email);

            const token =await this.createToken({email:vendor.email,id:vendor.id});
            //returning token to user

            return token;



            
            
        } catch (err) {

            console.log("Something went wrong in signing process ",err);
            
        }
    }


    async isAuthenticated(token){

        try {
            const response=this.verifyToken(token);

        if(!response){
            throw {error: 'Invalid Token'};
        
        }

        console.log("Verified token --->",response);

        const vendor= await this.vendorRepository.getById(response.id);


        if(!vendor){
            throw {error : 'No vendor exits with this id'};
        }

        console.log(vendor);

        return vendor.id;
            
        } 
        
        catch (err) {

            console.log("Something went wrong in signing process ",err);
        }
    }



}


module.exports=VendorService;