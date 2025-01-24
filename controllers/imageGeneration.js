const fs  =  require("node:fs");
const axios =  require("axios");
const cloudinary = require('cloudinary').v2
const STABLITY = require("../modals/stability.ai")



cloudinary.config({
    cloud_name: "dmnfdxh2s",
    api_key: 683327156317423,
    api_secret: "fbSEWejQ-DYl4bYjKwfvtP3vD6E",
  });


async function imageGeneration(req,res) {


const {imgPrompt} = req.body;


if(imgPrompt){


  const payload = {
    prompt: imgPrompt,
    output_format: "png"
  };


  try {
    const apiKey = await STABLITY.find({})
    if(apiKey){
      for(let i=0; i<=apiKey.length -1; i++){
        if(apiKey[i].status == true){
          // 


          // 



          
const response = await axios.postForm(
  `https://api.stability.ai/v2beta/stable-image/generate/ultra`,
  payload,
  {
    validateStatus: undefined,
    responseType: "arraybuffer",
    headers: { 
      Authorization: `Bearer ${apiKey[i].apiKey}`, 
      Accept: "image/*" 
    },
  },
);



if(response.status === 200) {
    let imgName = "xinfinity"+Date.now()+".png"
    fs.writeFileSync("public/"+imgName, Buffer.from(response.data));
    // Image uploading to cloudinary
   try {
    const result = await cloudinary.uploader.upload("public/"+imgName, {upload_preset: "ml_default"})

    
    // Sending response to the frontend
    res.status(200).json({provider:"xInfinity",image:result.secure_url})
    
    // Deleting image from the server
    fs.unlinkSync("public/"+imgName)
    
   } catch (error) {
    console.log("Cloudinary error",error.message)
   }


} else {
  if(response.status == 402){ // Credit requirement
    
    const res = await STABLITY.findByIdAndDelete({_id:apiKey[i]._id})

    if(res){
      continue;
    }


  }else if(response.status == 403){ // Content Moderation
      res.json({status:false,msg:"Content Moderation"})
  }
}



// 

break;

// 
        }
      }
    }
  } catch (error) {
    res.json({status:false,msg:"Main Wrapper error",err:error.message})
  }

}








}



module.exports = imageGeneration