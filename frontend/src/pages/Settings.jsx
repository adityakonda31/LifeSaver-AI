import { useNavigate } from "react-router-dom";


import Sidebar from "../components/Sidebar";





function Settings(){



const navigate = useNavigate();





const user = JSON.parse(

localStorage.getItem("user")

);







const logout = ()=>{


localStorage.removeItem("token");

localStorage.removeItem("user");


navigate("/login");


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

Settings ⚙️

</h1>






<p className="

text-center

text-gray-400

mb-12

text-lg

">

Manage your account and LifeSaver AI preferences

</p>









<div className="

max-w-6xl

mx-auto

grid

lg:grid-cols-2

gap-10

">









{/* PROFILE */}



<div

className="

bg-white/5

backdrop-blur-xl

border

border-white/10

rounded-3xl

p-10

shadow-2xl

"

>






<div className="

flex

items-center

gap-6

mb-10

">





<div className="

w-28

h-28

rounded-full

bg-linear-to-r

from-purple-500

to-pink-500

flex

items-center

justify-center

text-5xl

font-bold

">


{

user?.name?.charAt(0)

}


</div>








<div>


<h2 className="

text-3xl

font-bold

">

{

user?.name || "User"

}


</h2>



<p className="

text-gray-400

mt-2

">

{

user?.email

}

</p>


</div>


</div>









<div className="

bg-black/30

rounded-2xl

p-6

border

border-white/10

mb-8

">


<h3 className="

text-xl

font-bold

mb-6

">

Account Details

</h3>







<div className="

flex

justify-between

mb-5

text-gray-300

">


<span>

Username

</span>


<span className="

text-white

font-semibold

">

{

user?.name

}

</span>


</div>






<div className="

flex

justify-between

text-gray-300

">


<span>

Email

</span>


<span className="

text-white

font-semibold

">

{

user?.email

}

</span>


</div>




</div>









<button


onClick={logout}


className="

w-full

py-4

rounded-xl

bg-linear-to-r

from-red-500

to-pink-600

font-bold

text-lg

hover:scale-105

transition

"


>


Logout 🚪


</button>






</div>









{/* ABOUT */}



<div


className="

bg-white/5

backdrop-blur-xl

border

border-white/10

rounded-3xl

p-10

shadow-2xl

"


>





<h2 className="

text-3xl

font-bold

mb-6

">


LifeSaver AI 🚀


</h2>






<p className="

text-gray-300

leading-relaxed

mb-8

">


Your personal AI productivity companion designed to manage tasks, improve focus and build better habits.

</p>







<div className="space-y-5">





<div className="

bg-black/30

border

border-white/10

rounded-2xl

p-5

">


<h3 className="

font-bold

text-xl

mb-2

">

📋 Smart Task Management

</h3>


<p className="text-gray-400">

Create, track and complete tasks with deadlines and reminders.

</p>


</div>








<div className="

bg-black/30

border

border-white/10

rounded-2xl

p-5

">


<h3 className="

font-bold

text-xl

mb-2

">

🤖 AI Assistant

</h3>


<p className="text-gray-400">

Generate schedules and organize your daily productivity.

</p>


</div>









<div className="

bg-black/30

border

border-white/10

rounded-2xl

p-5

">


<h3 className="

font-bold

text-xl

mb-2

">

📊 Analytics & Streaks

</h3>


<p className="text-gray-400">

Track progress, habits and productivity growth.

</p>


</div>









<div className="

bg-black/30

border

border-white/10

rounded-2xl

p-5

">


<h3 className="

font-bold

text-xl

mb-2

">

☁️ MongoDB Cloud Storage

</h3>


<p className="text-gray-400">

Your productivity data is securely stored in the cloud.

</p>


</div>






</div>




</div>








</div>







</main>








</div>


)



}


export default Settings;