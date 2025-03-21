const cloudinary = require('cloudinary').v2
const Groq = require('groq-sdk');


async function imgDetection(req,res) {




if(req.body.imgPrompt != null || undefined){



const groq = new Groq({
        apiKey:"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"
});

    
cloudinary.config({
    cloud_name: "dmnfdxh2s",
    api_key: 683327156317423,
    api_secret: "fbSEWejQ-DYl4bYjKwfvtP3vD6E",
  });


  try {
    const result = await cloudinary.uploader.upload(req.file.path, {upload_preset: "ml_default"})

    if(result.secure_url){
        




        
async function main() {
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": req.body.imgPrompt+". Explain it in easy language no use of complex words. Try to add some artificial emotion. Give always accurate and correct answer shortly"
          },
          {
            "type": "image_url",
            "image_url": {
              "url": result.secure_url
            }
          }
        ]
      },
    ],
    "model": "llama-3.2-11b-vision-preview",
    "temperature": 1,
    "max_completion_tokens": 1024,
    "top_p": 1,
    "stream": false,
    "stop": null
  });

   res.status(200).json({status:true,response:chatCompletion.choices[0].message.content,imageurl:result.secure_url});
}

main();








    }

  } catch (error) {
    res.json({status:false,msg:"Error while uploading image on cloudinary",error:error.message})
  }


    
}




   
}
  
  
  
  module.exports = imgDetection