import {useEffect,useState} from "react";

import API from "../services/api";



function Streak(){


const [streak,setStreak]=useState(0);





useEffect(()=>{


API.get(

"/profile"

)

.then(res=>{


setStreak(

res.data.streak

);


});


},[]);





return(


<div className="
bg-[#11162b]
p-6
rounded-xl
mt-6
">


<h2 className="
text-xl
font-bold
">

🔥 Productivity Streak

</h2>



<p className="
text-4xl
text-purple-400
mt-3
">

{streak}

</p>



<p>

Days

</p>



</div>


)

}


export default Streak;