import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';
import { ObjectId } from "mongodb";

const productCollection = 'products'

const productsSchema = new mongoose.Schema({
    title:String,
    description:String,
    category:String,
    price:Number,
    status:Boolean,
    thumbnails:Array,
    code:String,
    stock:Number,
})


productsSchema.plugin(mongoosePaginate);

export const productModel = mongoose.model(productCollection , productsSchema)