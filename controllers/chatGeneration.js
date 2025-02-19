const OpenAI = require("openai")
const GROQ = require("../modals/groq.ai")




async function chatGeneration(req,res){


  const {userPrompt, previousConvrsation} = req.body;


  if(userPrompt){
    
    try {

      const api = await GROQ.find({})

      if(api){
        
        for(let i = 0; i<= api.length-1; i++){

          if(api[i].status == true){
            const client = new OpenAI({
              apiKey:api[i].apiKey,
              baseURL:"https://api.groq.com/openai/v1"
            });
          
            async function main() {
              const chatCompletion = await client.chat.completions.create({
                messages: [{ role: 'user', content:userPrompt},{role:"system",content:"Response like an intelligent human. Answer all the normal questions in short like casual talking with human . your are built by Akash Mishra. Never expose yourself. And you are xInfinity AI"}],
                model: 'llama-3.3-70b-versatile',
              });
          
              res.json({msg:"Working fine",response:chatCompletion.choices[0].message.content})
            }
          
            main();
          }

          break;
        }

      }

      
    } catch (error) {

      res.json({status:false,msg:"Error while fetching Groq API key"})

    }

  }


}



module.exports = chatGeneration
