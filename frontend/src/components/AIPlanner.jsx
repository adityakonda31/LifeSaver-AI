import {useState} from "react";

import API from "../services/api";



function AIPlanner(){


const [plan,setPlan]=useState("");

const [loading,setLoading]=useState(false);





const generatePlan=async()=>{


try{



setLoading(true);





// CHECK TASKS FIRST

const taskResponse = await API.get("/tasks");



const tasks = taskResponse.data;




if(!tasks || tasks.length === 0){



alert(
"Create some tasks first before generating AI schedule 🤖"
);



setLoading(false);


return;


}







// SEND TASKS TO AI


const res = await API.post(

"/ai/plan",

{


tasks:tasks,


goal:
"Create a productive schedule from my tasks"



}

);







setPlan(

res.data.plan

);





}



catch(error){



console.log(
"AI Planner Error:",
error
);



alert(
"AI Planner failed"
);



}



finally{


setLoading(false);


}



};











return(



<div className="


bg-[#11162b]


p-8


rounded-3xl


mt-8


border


border-purple-500/20


shadow-[0_0_30px_rgba(168,85,247,0.15)]


">








<h2 className="


text-3xl


font-bold


bg-linear-to-r


from-purple-400


to-pink-400


text-transparent


bg-clip-text


">


AI Schedule Planner 🤖✨


</h2>






<p className="

text-gray-400

mt-3

">


Let AI organize your tasks into a smart daily plan 🚀


</p>








<button



onClick={generatePlan}



disabled={loading}



className="



mt-6


bg-linear-to-r


from-purple-600


to-pink-500


px-8


py-3


rounded-xl


font-bold


hover:scale-105


transition



disabled:opacity-50



"

>



{


loading

?

"Generating AI Plan..."

:

"Generate My Schedule 🚀"



}




</button>









{


plan &&


<div className="



mt-6


bg-black/60


border


border-purple-500/20


p-6


rounded-2xl


whitespace-pre-line


text-gray-200



">


{plan}


</div>



}








</div>



)


}




export default AIPlanner;