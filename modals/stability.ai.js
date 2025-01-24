const mongooose = require("mongoose")


const StabilitySchema = new mongooose.Schema({
    apiKey:{
        type:String,
        required:true,
        unique:true
    },
    status:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true
})




const STABLITY = mongooose.model("imageApiKey",StabilitySchema)


module.exports = STABLITY