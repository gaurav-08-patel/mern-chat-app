import mongoose from "mongoose";

const connectToMongoDB = async ()=>{

    try{
        mongoose.connect(process.env.Mongo_DB_URI);
        console.log("Connected to MongoDB");
        
    }catch(err){
        console.log("err connoecting db :" , err.message);
    }
}

export default connectToMongoDB;
