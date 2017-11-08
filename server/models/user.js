var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
    first:{type:String},
    last:{type:String},
    email:{type:String},
    password:{type:String},
    products:[{type:Schema.Types.ObjectId,ref:'Product'}],
    created_at:{type:Date,default:Date.now}
})

mongoose.model('User',UserSchema);