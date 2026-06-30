const {
GoogleGenerativeAI
}=require("@google/generative-ai");

const OpenAI =
require("openai");




let gemini;


if(process.env.GEMINI_API_KEY){

gemini =
new GoogleGenerativeAI(
process.env.GEMINI_API_KEY
);

}




let openai;


if(process.env.OPENAI_API_KEY){

openai =
new OpenAI({

apiKey:
process.env.OPENAI_API_KEY

});

}







// SMART LOCAL AI FALLBACK


function localSchedule(tasks){



let result =

"LifeSaver AI Schedule\n\n";



tasks.forEach((task,index)=>{


const times=[

"9:00 AM",

"11:00 AM",

"2:00 PM",

"5:00 PM"

];


result +=

`${times[index % times.length]}
- ${task.title}
(${task.priority} Priority)

`;



});



result +=

"\nProductivity Tip:\nComplete high priority tasks first.";



return result;



}







exports.generateSchedule = async(tasks)=>{


try{



if(!tasks || tasks.length===0){

return "No tasks found.";

}





// Try Gemini first


if(gemini){


try{


const model =
gemini.getGenerativeModel({

model:"gemini-2.0-flash"

});



const response =
await model.generateContent(`


Create a productivity schedule:

${JSON.stringify(tasks)}


`);



return response.response.text();



}

catch(error){


console.log(
"Gemini unavailable, switching fallback"
);


}




}





// Try OpenAI


if(openai){


try{


const response =
await openai.chat.completions.create({


model:"gpt-4o-mini",


messages:[

{

role:"user",

content:

`Create schedule:
${JSON.stringify(tasks)}`

}

]

});


return response
.choices[0]
.message
.content;



}

catch(error){


console.log(
"OpenAI unavailable, switching fallback"
);


}



}






// Local AI


return localSchedule(tasks);




}



catch(error){


return localSchedule(tasks);


}



}








exports.calculatePriority = async(task)=>{


try{


if(gemini){


const model =
gemini.getGenerativeModel({

model:"gemini-2.0-flash"

});


const result =
await model.generateContent(`


Task:

${task.title}


Return priority High Medium Low


`);


return result.response.text();



}


return "Medium";



}

catch(error){


return "Medium";


}



}