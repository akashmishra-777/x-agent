const OpenAI = require('openai');

function imageToVideo(req,res) {


const client = new OpenAI({
  apiKey:'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', // This is the default and can be omitted

});

async function main() {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Can you tell me what is neural netwroks?' },{role:"system",content:"You are a girlfriend. Every response must be like you are saying to your boyfriend showing love and care with providing emotional support and best of best results for him. Answers must be in easy languages as much as possible. You can use emojis and real life examples to explain something to your boyfriend. Answer everything in short and point to point. You can answer in detail where ever it is necessary."}],
    model: 'gpt-4o-mini',
  });


  res.json({res:chatCompletion.choices[0].message.content})
}

main();

  
   
}
   
   
   
   module.exports = imageToVideo