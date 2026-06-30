import {useNavigate} from "react-router-dom";

import {
Sparkles,
Brain,
CalendarCheck,
Mic
} from "lucide-react";




function Welcome(){


const navigate = useNavigate();





return(


<div className="
min-h-screen
bg-[#050816]
text-white
flex
items-center
justify-center
overflow-hidden
relative
">





{/* Background Glow */}


<div className="
absolute
w-[500px]
h-[500px]
bg-purple-600/30
blur-[120px]
rounded-full
top-10
left-20
">


</div>





<div className="
absolute
w-[400px]
h-[400px]
bg-pink-500/20
blur-[120px]
rounded-full
bottom-10
right-20
">


</div>









<div className="
relative
text-center
max-w-4xl
px-6
">







<div className="
flex
justify-center
mb-6
">


<div className="
p-5
rounded-3xl
bg-linear-to-r
from-purple-600
to-pink-500
shadow-[0_0_50px_rgba(168,85,247,.5)]
">


<Sparkles
size={45}
/>


</div>


</div>









<h1 className="

text-7xl

font-extrabold

tracking-tight

bg-linear-to-r

from-purple-400

via-pink-400

to-blue-400

text-transparent

bg-clip-text

">


LifeSaver AI 🚀


</h1>








<p className="

mt-6

text-2xl

text-gray-300

">


Your AI Productivity Companion


</p>







<p className="

mt-4

text-gray-400

max-w-2xl

mx-auto

">


Plan smarter, build habits, track goals and never miss what matters most with your personal AI assistant.


</p>












<div className="

grid

grid-cols-3

gap-5

mt-12

">





<div className="
bg-white/10
border
border-white/10
backdrop-blur-xl
p-5
rounded-2xl
">


<Brain

className="mx-auto text-purple-400"

/>


<p className="mt-3">

AI Planner

</p>


</div>









<div className="
bg-white/10
border
border-white/10
backdrop-blur-xl
p-5
rounded-2xl
">


<CalendarCheck

className="mx-auto text-pink-400"

/>


<p className="mt-3">

Smart Goals

</p>


</div>









<div className="
bg-white/10
border
border-white/10
backdrop-blur-xl
p-5
rounded-2xl
">


<Mic

className="mx-auto text-blue-400"

/>


<p className="mt-3">

AI Voice

</p>


</div>






</div>









<div className="

mt-12

flex

gap-6

justify-center

">







<button


onClick={()=>

navigate("/login")

}


className="

px-12

py-4

rounded-2xl

font-bold

text-lg

bg-linear-to-r

from-purple-600

to-pink-500

hover:scale-110

transition

shadow-[0_0_30px_rgba(168,85,247,.5)]

"


>


Login ✨


</button>









<button


onClick={()=>

navigate("/register")

}


className="

px-12

py-4

rounded-2xl

font-bold

text-lg

border

border-purple-400/50

bg-white/5

backdrop-blur-xl

hover:bg-white/10

transition

"


>


Create Account 🚀


</button>









</div>







<p className="
mt-10
text-sm
text-gray-500
">


Powered by AI • Productivity • Focus • Growth


</p>






</div>






</div>



)

}



export default Welcome;