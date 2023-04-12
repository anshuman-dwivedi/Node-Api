const mongoose=require('mongoose');
const Productschema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});
module.exports=mongoose.model('products',Productschema);