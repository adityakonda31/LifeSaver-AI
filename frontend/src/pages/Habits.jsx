import {useEffect,useState} from "react";

import API from "../services/api";

import Sidebar from "../components/Sidebar";





function HabitTracker(){



const [habits,setHabits]=useState([]);



const [habitName,setHabitName]=useState("");







const loadHabits=async()=>{


try{


const res =
await API.get("/habits");


setHabits(res.data);



}

catch(err){

console.log(err);

}



};







useEffect(()=>{


loadHabits();


},[]);








const createHabit=async()=>{


if(!habitName)return;



try{


await API.post(

"/habits",

{

name:habitName

}

);



setHabitName("");



loadHabits();



}

catch(err){

console.log(err);

}


};









const completeHabit=async(id)=>{


try{


await API.put(

`/habits/${id}/complete`

);



loadHabits();



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

font-bold

text-center

mb-3

bg-linear-to-r

from-purple-400

to-pink-500

bg-clip-text

text-transparent

">

Habit Tracker

</h1>





<p className="

text-center

text-gray-400

mb-12

">

Build consistency. Track progress. Maintain your streak 🔥

</p>









<div className="

max-w-5xl

mx-auto

">







<div className="

bg-white/5

backdrop-blur-xl

border

border-white/10

rounded-3xl

p-8

mb-10

shadow-2xl

">







<h2 className="

text-2xl

font-bold

mb-5

">

Create New Habit

</h2>







<div className="

flex

gap-4

">





<input



value={habitName}



onChange={(e)=>

setHabitName(e.target.value)

}



placeholder="Example: Read 30 minutes"



className="

flex-1

bg-black/40

border

border-gray-700

rounded-xl

px-5

py-4

outline-none

"



/>








<button



onClick={createHabit}



className="

px-8

rounded-xl

bg-linear-to-r

from-purple-600

to-pink-500

font-bold

hover:scale-105

transition

">

Add Habit

</button>





</div>






</div>












<div className="

grid

md:grid-cols-3

gap-6

">







{

habits.map((habit)=>(





<div

key={habit._id}

className="

bg-white/5

backdrop-blur-xl

border

border-white/10

rounded-3xl

p-6

hover:-translate-y-2

transition

shadow-xl

">







<div className="

flex

justify-between

items-center

mb-5

">





<h3 className="

text-xl

font-bold

">

{habit.name}

</h3>







<span className="

text-orange-400

font-bold

">

🔥

{habit.streak || 0}

</span>





</div>









<div className="

mb-5

">



<p className="

text-gray-400

text-sm

mb-2

">

Today's Progress

</p>




<div className="

w-full

h-3

bg-black/40

rounded-full

overflow-hidden

">





<div

className="

h-full

bg-linear-to-r

from-purple-500

to-pink-500

"



style={{

width:

`${habit.progress || 0}%`

}}


/>





</div>




</div>









<button



onClick={()=>completeHabit(habit._id)}



className="

w-full

py-3

rounded-xl

bg-purple-600

hover:bg-purple-700

transition

font-semibold

">

Complete Today

</button>









</div>





))

}







</div>








</div>






</main>





</div>



)



}



export default HabitTracker;