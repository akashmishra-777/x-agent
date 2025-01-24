const mongooose = require("mongoose")

const GroqSchema = new mongooose.Schema({
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




const GROQ = mongooose.model("groqApiKey",GroqSchema)


module.exports = GROQ