const {GoogleGenerativeAI}=require("@google/generative-ai");



const genAI =
new GoogleGenerativeAI(
process.env.GEMINI_API_KEY
);




exports.parseTask =
async(command)=>{


const model =
genAI.getGenerativeModel({

model:"gemini-1.5-flash"

});




const prompt = `

You are a productivity assistant.

Convert this user command into JSON.

Command:

${command}


Return ONLY JSON:

{
"title":"",
"description":"",
"deadline":"",
"priority":"",
"reminder":true
}

`;





const result =
await model.generateContent(
prompt
);



const response =
result.response.text();



return JSON.parse(response);



};