import {useState} from "react";

import API from "../services/api";

import {Mic} from "lucide-react";




function VoiceAssistant(){


const [text,setText]=useState("");

const [loading,setLoading]=useState(false);






const listen=()=>{


const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;



if(!SpeechRecognition){

alert(
"Voice recognition not supported in this browser"
);

return;

}



const recognition =
new SpeechRecognition();



recognition.start();





recognition.onresult=(event)=>{


const command =
event.results[0][0].transcript;



setText(command);



createUsingAI(command);



};



recognition.onerror=()=>{

alert(
"Voice recognition failed"
);

};


}









const createUsingAI=async(command)=>{


try{


setLoading(true);





await API.post(

"/tasks",

{


title:command,


description:
"Created using AI Voice Assistant 🎙️",



deadline:
new Date(
Date.now()+60*60*1000
),



priority:
"Medium",



whatsappReminder:false



}

);





alert(

"AI created your task 🚀"

);



window.location.reload();



}



catch(error){


console.log(
"Voice Task Error:",
error
);



alert(

"AI task creation failed"

);


}



finally{


setLoading(false);


}



}









return(


<div className="

bg-[#11162b]

border

border-purple-500/30

shadow-[0_0_40px_rgba(168,85,247,0.15)]

p-8

rounded-3xl

mt-8

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


AI Voice Assistant 🎙️🤖


</h2>








<div className="

bg-black/60

border

border-gray-800

p-6

rounded-2xl

mt-6

text-gray-300

leading-7

">



<p className="text-purple-400 font-semibold">

Try:

</p>




<p>
"Remind me tomorrow at 5 PM to submit project"
</p>



<p>
"Create meeting task next Monday"
</p>



<p>
"Call my client after 2 hours"
</p>




</div>









<button


onClick={listen}



className="

mt-6

bg-linear-to-r

from-purple-600

to-pink-500

p-5

rounded-full

hover:scale-110

transition

shadow-lg

"

>


<Mic size={28}/>


</button>








{

loading &&


<p className="

mt-5

text-purple-400

animate-pulse

">


AI is creating your task... 🤖


</p>


}









{

text &&


<div className="

mt-5

p-4

rounded-xl

bg-purple-500/10

border

border-purple-400/20

">


🎤

{text}


</div>


}





</div>



)


}



export default VoiceAssistant;