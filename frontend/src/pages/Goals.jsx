import {useEffect,useState} from "react";


import API from "../services/api";


import Sidebar from "../components/Sidebar";





function Goals(){



const [goals,setGoals]=useState([]);

const [title,setTitle]=useState("");

const [description,setDescription]=useState("");









const loadGoals=async()=>{


try{


const res =
await API.get("/goals");


setGoals(res.data);



}

catch(err){


console.log(err);


}



};







useEffect(()=>{


loadGoals();


},[]);









const createGoal=async()=>{


try{


await API.post(

"/goals",

{

title,

description

}

);



setTitle("");

setDescription("");



loadGoals();



}

catch(err){


console.log(err);


}



};









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

font-extrabold

text-center

mb-3

bg-linear-to-r

from-purple-400

to-pink-500

bg-clip-text

text-transparent

">

Goals

</h1>







<p className="

text-center

text-gray-400

mb-12

text-lg

">

Build your future with smart goals 🚀

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

border

border-white/10

rounded-3xl

p-8

shadow-2xl

">





<h2 className="

text-2xl

font-bold

mb-6

">

Create Goal 🎯

</h2>








<input



placeholder="Goal title"



value={title}



onChange={(e)=>

setTitle(e.target.value)

}



className="

w-full

bg-black/40

border

border-gray-700

rounded-xl

p-4

mb-4

outline-none

text-white

"


/>










<textarea



placeholder="Describe your goal"



value={description}



onChange={(e)=>

setDescription(e.target.value)

}



className="

w-full

h-32

bg-black/40

border

border-gray-700

rounded-xl

p-4

mb-5

outline-none

text-white

"


/>










<button


onClick={createGoal}



className="

w-full

py-4

rounded-xl

font-bold

bg-linear-to-r

from-purple-600

to-pink-500

hover:scale-105

transition

"


>


Add Goal 🚀


</button>





</div>













<div className="

lg:col-span-2

space-y-6

">






{

goals.length===0 &&


<div className="

text-center

text-gray-400

bg-white/5

border

border-white/10

rounded-3xl

p-10

">


No goals yet.

<br/>

Create your first goal ✨


</div>


}








{

goals.map(goal=>(



<div


key={goal._id}



className="

bg-white/5

backdrop-blur-xl

border

border-white/10

rounded-3xl

p-7

hover:-translate-y-2

hover:border-purple-500/50

transition

shadow-xl

"

>








<div className="flex justify-between items-center">



<h3 className="

text-2xl

font-bold

">


{goal.title}


</h3>





<span className="

px-4

py-2

rounded-full

bg-purple-500/20

text-purple-300

font-semibold

">


Active


</span>




</div>








<p className="

text-gray-400

mt-4

text-lg

">


{goal.description}


</p>









<div className="

mt-7

">


<div className="

flex

justify-between

text-sm

mb-2

">


<span>

Progress

</span>



<span>

0%

</span>



</div>





<div className="

h-3

bg-black/40

rounded-full

overflow-hidden

">


<div className="

h-full

w-[0%]

bg-linear-to-r

from-purple-500

to-pink-500

rounded-full

">

</div>



</div>




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




export default Goals;