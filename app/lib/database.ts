import mongoose from "mongoose";

const product=new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    category:String,
    picture:String
})


const Product = mongoose.models.product|| mongoose.model("product", product);
export default Product;