const {GoogleGenerativeAI}=require("@google/generative-ai");

const OpenAI=require("openai");





const gemini =
new GoogleGenerativeAI(

process.env.GEMINI_API_KEY

);




const openai =
new OpenAI({

apiKey:
process.env.OPENAI_API_KEY

});







const defaultPlan = `

📅 Your Smart Schedule


🌅 Morning

• Review priorities
• Complete important tasks


☀️ Afternoon

• Deep work session
• Focus on deadlines


🌙 Evening

• Review progress
• Prepare tomorrow plan


🔥 Stay consistent and complete your goals.

`;









exports.generatePlan=async(req,res)=>{


const userTask =
req.body.goal ||
"Plan my day";





// 1. TRY GEMINI


try{


if(process.env.GEMINI_API_KEY){



const model =
gemini.getGenerativeModel({

model:"gemini-1.5-flash"

});




const result =
await model.generateContent(

`

Create a productivity schedule.

User request:

${userTask}


Return clean bullet points.

`

);



return res.json({

source:"Gemini",

plan:

result.response.text()


});


}



}

catch(error){


console.log(

"Gemini failed"

);


}







// 2. TRY OPENAI


try{


if(process.env.OPENAI_API_KEY){



const response =
await openai.chat.completions.create({

model:"gpt-4o-mini",


messages:[

{

role:"system",

content:

"You are a productivity AI assistant"

},


{

role:"user",

content:

`
Create schedule for:

${userTask}
`

}

]


});





return res.json({

source:"OpenAI",

plan:

response.choices[0].message.content


});



}



}

catch(error){


console.log(

"OpenAI failed"

);


}









// 3. FINAL FALLBACK


return res.json({

source:"Built-in AI",

plan:defaultPlan


});



};