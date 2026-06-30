import {useEffect,useState} from "react";

import API from "../services/api";

import Sidebar from "../components/Sidebar";

import CreateTask from "../components/CreateTask";
import TaskList from "../components/TaskList";
import AIPlanner from "../components/AIPlanner";
import VoiceAssistant from "../components/VoiceAssistant";
import Analytics from "../components/Analytics";



function Dashboard(){


const [data,setData]=useState({

tasks:0,
completed:0,
goals:0,
streak:0

});





useEffect(()=>{


API.get("/dashboard")

.then(res=>{

setData(res.data);

})

.catch(err=>{

console.log(err);

});


},[]);







return(



<div className="

flex

min-h-screen

bg-[#050816]

text-white

">





<Sidebar/>








<main className="

flex-1

p-8

overflow-y-auto

">









{/* HERO */}


<section className="

text-center

mb-12

relative

">



<div className="

absolute

inset-0

bg-purple-600/20

blur-3xl

rounded-full

">

</div>







<h1 className="

relative

text-6xl

font-black

tracking-tight

bg-linear-to-r

from-purple-400

via-pink-400

to-blue-400

text-transparent

bg-clip-text

">


Never Miss What Matters Most 🚀


</h1>






<p className="

relative

mt-5

text-gray-400

text-xl

">


Your AI productivity companion for planning, focus & growth 🤖


</p>






<div className="

flex

justify-center

gap-4

mt-7

">



<span className="

px-5

py-2

rounded-full

bg-purple-500/20

border

border-purple-400/30

">


🤖 AI Powered


</span>






<span className="

px-5

py-2

rounded-full

bg-pink-500/20

border

border-pink-400/30

">


⚡ Smart Planning


</span>







<span className="

px-5

py-2

rounded-full

bg-blue-500/20

border

border-blue-400/30

">


🎯 Goal Focus


</span>




</div>





</section>









{/* STATS */}


<div className="

grid

md:grid-cols-3

gap-6

mb-10

">





<div className="dashboard-card">

🎯 Today's Focus

<h2>

{data.tasks}

<span>

 Tasks

</span>

</h2>

</div>






<div className="dashboard-card">

🔥 Current Streak

<h2>

{data.streak}

<span>

 Days

</span>

</h2>


</div>







<div className="dashboard-card">

🚀 Goals

<h2>

{data.goals}

<span>

 Active

</span>

</h2>


</div>






</div>









{/* MAIN AREA */}



<div className="

grid

lg:grid-cols-2

gap-8

items-start

">








{/* LEFT */}

<div className="space-y-8">


<CreateTask/>




<AIPlanner/>





<VoiceAssistant/>




</div>











{/* RIGHT */}



<div className="space-y-8">



<TaskList/>





<Analytics/>




</div>





</div>









</main>





</div>



)

}



export default Dashboard;