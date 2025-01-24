const STABLITY = require("../modals/stability.ai")

async function stabilityKeyHandler(req,res){

    try{

        const { apiKey } = req.body;

       if(apiKey){
        const result = await STABLITY.create({
            apiKey:apiKey,
        })
        
        if(result){
            res.json({status:true,msg:"Stability api key added successfully."})
        }

       }else{
        res.json({status:false,msg:"Error while Adding Stability api key."})
       }
       
    }catch(error){
        res.json({status:false,msg:"Error while adding API KEY.",error:error.message})
    }
   
}



module.exports = stabilityKeyHandler