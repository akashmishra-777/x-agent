const GROQ = require("../modals/groq.ai")

async function groqKeyHandler(req,res){

    const { apiKey } = req.body;

    if(apiKey){

        try {
            const result = await GROQ.create({apiKey:apiKey})

            if(result){
                
                res.json({status:true,msg:"API key added successfully"})

            }

        } catch (error) {
            res.json({status:false,msg:"Error while storing api key"})
        }


    }else{
        res.json({status:false,msg:"apiKey Not found on the server"})
    }

    // res.json({msg:"Groq Key"})
}

module.exports = groqKeyHandler