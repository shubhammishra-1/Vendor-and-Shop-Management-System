#Build 3 Microservices API

1 --> Search Service {PORT=700}
2 --> Shop/Vendor management service {PORT=800}
3 --> Authentication Service {PORT=900}

                                                          #MicroServices Architecture

in my every microservices there are 3 dedicated layers:::

1 --> Repository Layer ::: in this layer where I defined CRUD functionality.


2 --> Service Layer ::: in this layer I defined Specific business logic that required to function business use cases by utilizing Repository Layer.                
 

3 --> Controller Layer ::: this is end point layer by which end users can interact to the server in this particular layer all services provided by Service layer are defined.
 

                                                  #Authentication Service


 in auth. service server I implemented 3 functionality {using JWT , bcrypt }
 
1--> signup :::vendor can signup on this server using {name,email,password} fields plain password of vendor first hashed into some value {using bcrypt} then stored into Database.

2--> signin :::vendor can signin on this server using their {email,password} fields , jsonwebtoken will  be given to those vendors only whoses records already in database else invalid user will be shown

3--> isAuthenticated ::: vendor can see whether they are authenticated on the server or not by sending JWT.

                                                   #Search Service

In Search Service server which is running on PORT=700 I implemented again 3 functionality

--> Search By ID ::: users can search the shop by shop_ID
--> Search By location :::users can search all shops located to particular specified location.
--> All Shops  ::: users can see all shops of all different locations.

                                                   #Shop/Vendor Service


In this layer I implemented two models {SHOPS} , {VENDORS}. 
A vendor can have multiple Shops {as per requirements}
//Services provided by SHOP sub-service server
Implemented CRUD functionality to Shop. {new/old Shop CRUD functionality provided}
//Services provided by Vendor sub-service server
Implemented CRUD functionalty to Vendor 
{new/old vendor can be regiseterd/delete/modification/getDetails}


  #Tech Stacks

  Nodejs ,  Javascript  , SQL


