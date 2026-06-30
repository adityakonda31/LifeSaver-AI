import {useState} from "react";

import API from "../services/api";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";





function CreateTask(){



const [task,setTask]=useState({

title:"",

description:"",

deadline:new Date(),

reminderTime:new Date(),

priority:"Low",

whatsappReminder:false,

phone:""

});






const update=(key,value)=>{


setTask(prev=>({

...prev,

[key]:value

}));


};







const createTask=async()=>{


try{



const response = await API.post(

"/tasks",

{

title:task.title,

description:task.description,

deadline:task.deadline,

reminderTime:

task.whatsappReminder

?

task.reminderTime

:

null,


priority:task.priority,


whatsappReminder:

task.whatsappReminder,


phone:

task.whatsappReminder

?

task.phone

:

null



}

);





console.log(

"Task Created:",

response.data

);



alert("Task Created");



window.location.reload();



}



catch(err){


console.log(

"Create Task Error:",

err.response?.data || err.message

);



}



};









return(



<div className="

bg-[#10162d]

border

border-purple-500/30

rounded-3xl

p-8

shadow-[0_0_40px_rgba(120,60,255,0.15)]

">








<h2 className="

text-3xl

font-bold

mb-8

">

Create Task

</h2>








<input


placeholder="Task name"


className="

w-full

bg-[#070b18]

border

border-gray-700

rounded-xl

p-4

mb-5

text-white

"



value={task.title}



onChange={(e)=>

update(

"title",

e.target.value

)

}


/>








<textarea


placeholder="Description"


className="

w-full

bg-[#070b18]

border

border-gray-700

rounded-xl

p-4

mb-6

h-32

"



value={task.description}



onChange={(e)=>

update(

"description",

e.target.value

)

}


/>









<div className="grid md:grid-cols-2 gap-6">





<div>


<label className="text-gray-300">

Deadline

</label>





<DatePicker


selected={task.deadline}



onChange={(date)=>

update(

"deadline",

date

)

}



showTimeSelect



timeIntervals={15}



dateFormat="MMMM d, yyyy h:mm aa"



className="

w-full

mt-2

bg-[#070b18]

border

border-gray-700

rounded-xl

p-4

text-white

"


/>



</div>









<div>


<label>

Priority

</label>





<select


className="

w-full

mt-2

bg-[#070b18]

border

border-gray-700

rounded-xl

p-4

"



value={task.priority}



onChange={(e)=>

update(

"priority",

e.target.value

)

}


>



<option value="Low">

Low

</option>



<option value="Medium">

Medium

</option>



<option value="High">

High

</option>



</select>


</div>



</div>









<div className="mt-7">


<label className="flex gap-3 items-center">


<input


type="checkbox"



checked={task.whatsappReminder}



onChange={(e)=>

update(

"whatsappReminder",

e.target.checked

)

}


/>





<span className="text-green-400 font-semibold">


Send WhatsApp Reminder


</span>



</label>



</div>









{

task.whatsappReminder &&


<div className="mt-6">






<input


placeholder="+91 Phone Number"


className="

w-full

bg-[#070b18]

border

border-gray-700

rounded-xl

p-4

mb-5

"



value={task.phone}



onChange={(e)=>

update(

"phone",

e.target.value

)

}


/>








<label>

WhatsApp Reminder Time

</label>








<DatePicker


selected={task.reminderTime}



onChange={(date)=>

update(

"reminderTime",

date

)

}



showTimeSelect



timeIntervals={15}



dateFormat="MMMM d, yyyy h:mm aa"



className="

w-full

mt-2

bg-[#070b18]

border

border-gray-700

rounded-xl

p-4

text-white

"


/>





</div>



}









<button


onClick={createTask}



className="

mt-8

bg-linear-to-r

from-purple-600

to-pink-500

px-10

py-4

rounded-xl

font-bold

hover:scale-105

transition

"



>


Create Task


</button>








</div>



)



}



export default CreateTask;