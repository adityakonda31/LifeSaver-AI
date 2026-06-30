import API from "../services/api";
import {useEffect,useState} from "react";



function TaskList(){


const [tasks,setTasks]=useState([]);





const loadTasks=async()=>{


try{


const res =
await API.get("/tasks");


setTasks(res.data);



}

catch(error){


console.log(
"Load Tasks Error:",
error
);


}


}






useEffect(()=>{


loadTasks();


},[]);









// COMPLETE TASK

const completeTask=async(id)=>{


try{


await API.put(

`/tasks/complete/${id}`

);



loadTasks();



}

catch(error){


console.log(
"Complete Error:",
error
);


}



}









// DELETE TASK

const deleteTask=async(id)=>{


try{


await API.delete(

`/tasks/${id}`

);



loadTasks();



}

catch(error){


console.log(
"Delete Error:",
error
);


}



}









return(


<div className="
bg-[#11162b]
p-6
rounded-2xl
">





<div className="
flex
justify-between
mb-5
">


<h2 className="
text-2xl
font-bold
">

All Tasks

</h2>



<p className="
text-purple-400
">

{tasks.length} Tasks

</p>


</div>









{

tasks.length===0

?

<p className="
text-gray-400
">

No tasks created yet

</p>



:


tasks.map(task=>(



<div

key={task._id}

className="
bg-black/30
p-4
rounded-xl
mb-4
flex
justify-between
items-center
">






<div>


<h3 className="
font-semibold
text-lg
">

{task.title}

</h3>




<p className="
text-gray-400
text-sm
">

{task.description}

</p>






<div className="
mt-2
flex
gap-3
items-center
">






<span className="

px-3
py-1
rounded-full
bg-purple-600/30
text-purple-300
text-xs

">


{task.status}


</span>








{

task.deadline &&


<span className="
text-xs
text-gray-400
">


Deadline:

{

new Date(task.deadline)
.toLocaleString()

}


</span>


}







</div>




</div>









<div className="
flex
gap-2
">







{

task.status==="Pending"

&&



<button

onClick={()=>

completeTask(task._id)

}

className="
bg-green-600
px-3
py-2
rounded-lg
text-sm
">


Complete


</button>


}









<button

onClick={()=>


deleteTask(task._id)


}


className="
bg-red-600
px-3
py-2
rounded-lg
text-sm
">


Delete


</button>








</div>








</div>



))



}








</div>


)



}



export default TaskList;