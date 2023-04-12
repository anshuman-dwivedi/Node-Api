const mongoose=require('mongoose');
//const main=async()=>{ running of main
/*const main=async()=>{
await mongoose.connect("mongodb://localhost:27017/e-comm");
const Productschema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});
const ProductModel=mongoose.model('products',Productschema);
let data=new ProductModel({name:"m8",price:1000,brand:"samsung",category:"mobile"});
let result=await data.save();
console.log(result);
}
main();*/
mongoose.connect("mongodb://localhost:27017/e-comm");
const Productschema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});
const saveInDB=async()=>{
    const Product=mongoose.model('products',Productschema);
    let data=new Product({name:"m8",price:1000,brand:"samsung",category:"mobile"});
    const result=await data.save();
    console.log(result);  
}
const updateIndDB=async()=>{
    const Product=mongoose.model('products',Productschema);
    let data=await Product.updateOne(
{name:"note 5"},
{
$set:{price:900}
}
    ) 
    console.log(data)
}
const deleteInDB=async()=>{
    const Product=mongoose.model('products',Productschema);
    let data=await Product.deleteOne({name:"m8"});
    console.log(data);
}
const findInDB=async()=>{
    const Product=mongoose.model('products',Productschema);
    let data=await Product.find({name:"m8"});
    console.log(data);
}
findInDB();