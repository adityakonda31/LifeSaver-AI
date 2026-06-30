import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";


import {useEffect,useState} from "react";


import API from "../services/api";


import Sidebar from "../components/Sidebar";





function CalendarPage(){



const [date,setDate]=useState(new Date());


const [tasks,setTasks]=useState([]);








const fetchTasks=async()=>{


try{


const res =

await API.get("/tasks");



setTasks(res.data);



}

catch(error){


console.log(

"Calendar Error:",

error

);



}



};








useEffect(()=>{


fetchTasks();



},[]);









const selectedTasks =


tasks.filter((task)=>{


if(!task.deadline)

return false;



return(

new Date(task.deadline)

.toDateString()

===

date.toDateString()


);



});









return(



<div className="

min-h-screen

bg-[#050816]

text-white

flex

">








<Sidebar/>










<main className="

flex-1

p-8

">







<h1 className="

text-5xl

font-bold

text-center

mb-3

bg-linear-to-r

from-purple-400

to-pink-500

text-transparent

bg-clip-text

">

📅 Smart Calendar

</h1>







<p className="

text-center

text-gray-400

mb-12

text-lg

">

Manage your deadlines and stay productive 🚀

</p>









<div className="

max-w-6xl

mx-auto

grid

lg:grid-cols-3

gap-8

">









<div className="

bg-white/5

backdrop-blur-xl

rounded-3xl

p-6

border

border-white/10

shadow-xl

">





<h2 className="

text-xl

font-bold

mb-5

">

Select Date

</h2>







<div className="calendar-wrapper">


<Calendar



value={date}



onChange={setDate}



/>


</div>







</div>









<div className="

lg:col-span-2

bg-white/5

backdrop-blur-xl

rounded-3xl

p-8

border

border-white/10

shadow-xl

">





<div className="

flex

justify-between

items-center

mb-8

">





<h2 className="

text-3xl

font-bold

">

Tasks

</h2>



<span className="

bg-purple-500/20

text-purple-300

px-4

py-2

rounded-full

font-semibold

">


{selectedTasks.length}

Tasks


</span>



</div>








{

selectedTasks.length===0

?

(

<p className="

text-gray-400

text-center

py-16

text-lg

">


No tasks on this day ✨


</p>

)


:


selectedTasks.map(task=>(



<div

key={task._id}

className="

bg-black/30

border

border-white/10

rounded-3xl

p-6

mb-5

hover:-translate-y-1

transition

"

>









<div className="

flex

justify-between

items-center

mb-3

">





<h3 className="

text-2xl

font-bold

">

{

task.title ||

"Untitled Task"

}

</h3>







<span className="

text-orange-400

font-semibold

">


🔥 {task.priority || "Normal"}


</span>





</div>









<p className="

text-gray-400

mb-5

">


{

task.description ||

"No description"

}


</p>









<div className="

flex

gap-6

text-sm

flex-wrap

">





<span>

⏰

{

new Date(task.deadline)

.toLocaleTimeString([],{

hour:"2-digit",

minute:"2-digit"

})

}

</span>









<span className="

text-purple-300

">

{

task.status ||

"Pending"

}

</span>








</div>








</div>



))


}







</div>









</div>









</main>








</div>



)


}



export default CalendarPage;