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
   
   post_product:function(request,response)
   {
       /* find user with ID equivalent to user ID from request.body */
       User.findOne({_id:request.body.product.id},function(err,user){
           var product = new Product({url:request.body.product.url,title:request.body.product.title,desc:request.body.product.desc,price:request.body.product.price,location:request.body.product.location});
           
           /* setup association between product and seller*/
           product._seller = user._id;
           /* push product to user array */
           user.products.push(product);

           /* save product and user to db */
           product.save(function(err){
               if(err){
                   console.log("the product error is:",err);
               }else{
                   user.save(function(err){
                       if(err){
                           console.log("the user error is:",err);
                       }else{
                           console.log("successfully saved user to db");
                       }
                   })
               }
           })           
       })
   },

   update_product:function(request,response)
   {
       Product.findOne({_id:request.body.id},function(err,product){
           product.title = request.body.product.title;
           product.price = request.body.product.price;
           product.url = request.body.product.url;
           product.desc = request.body.product.desc;
           product.location = request.body.product.location;
           product.save(function(err){
               if(err){
                   console.log(err,"something happened with updating product");
               }
           })
       })
   },
   
   delete_product:function(request,response)
   {
       Product.remove({_id:request.body.id},function(err){
           if(err){
               console.log("something went wrong with deleting product",err);
           }
       })
   }
}