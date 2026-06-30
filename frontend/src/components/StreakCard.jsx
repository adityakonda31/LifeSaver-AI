import {useEffect,useState} from "react";

import axios from "axios";



function StreakCard(){


const [days,setDays]=useState(0);



const getStreak=async()=>{


try{


const res =
await axios.get(

"http://localhost:5000/api/streak"

);


setDays(res.data.days);


}

catch(err){

console.log(err);

}


}



useEffect(()=>{


getStreak();


},[]);





return(


<div className="
dashboard-card
">


<h2>

🔥 Streak

</h2>



<p className="
text-4xl
font-bold
text-purple-400
">

{days}

<span className="text-lg">

 Days

</span>


</p>



<p className="
text-gray-400
mt-2
">

Keep completing tasks daily 🚀

</p>


</div>


)


}



export default StreakCard;