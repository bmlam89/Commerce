var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ProductSchema = new mongoose.Schema({
    url:{type:String},
    title:{type:String},
    desc:{type:String},
    price:{type:String},
    location:{type:String},
    _seller:{type:Schema.Types.ObjectId,ref:'User'},
    created_at:{type:Date,default:Date.now}
})

mongoose.model('Product',ProductSchema);