var mongoose = require('mongoose');
var User = mongoose.model('User');
var Product = mongoose.model('Product');
module.exports = {
   get_products:function(request,response)
   {
       Product.find({},function(err,products){
           if(err){
               console.log(err);
           }else{
               response.json({products:products});
           }
       })
   },
   
   /*post_product:function(request,response)
   {
       console.log("Backend post product",request.body);
   }*/
}