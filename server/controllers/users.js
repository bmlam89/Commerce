var mongoose = require('mongoose');
var User = mongoose.model('User');
var Product = mongoose.model('Product');
var hash = require('password-hash')
module.exports = {

    get_users:function(request,response)
    {
        User.find({},function(err,users){
            if(err)
            {
                console.log(err);
            }
            else
            {
                response.json({users:users});
            }
        })
    },

    create_user:function(request,response)
    {
        
        var password = hash.generate(request.body.user.password);
        var user = new User({first:request.body.user.first,last:request.body.user.last,email:request.body.user.email,password:password});
        user.save(function(err){
            if(err)
            {
                console.log(err);
            }
        })
    },

    signin:function(request,response)
    {
        User.find({email:request.body.email},function(err,user){
            if(hash.verify(request.body.password,user[0].password))
            {
                response.json({user:user});
            }else{
                response.json({user:[]});
            }

            
        })
    }

}