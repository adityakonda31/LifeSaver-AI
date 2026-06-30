import {
useEffect,
useState
}
from "react";


import API from "../services/api";


import {

BarChart,

Bar,

XAxis,

YAxis,

Tooltip,

ResponsiveContainer

}

from "recharts";





function Analytics(){



const [stats,setStats]=useState({

total:0,

completed:0,

pending:0,

rate:0

});







useEffect(()=>{


loadAnalytics();


},[]);








const loadAnalytics=async()=>{


try{


const res =
await API.get("/analytics");



setStats(res.data);



}

catch(err){


console.log(

"Analytics Error:",

err

);


}



};









const chartData=[


{

name:"Tasks",

Completed:stats.completed,

Pending:stats.pending

}


];









return(



<div className="

min-h-screen

bg-[#050816]

text-white

flex

">


















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

Productivity Analytics

</h1>






<p className="

text-center

text-gray-400

mb-12

">

Understand your productivity growth 🚀

</p>









<div className="

max-w-6xl

mx-auto

">









<div className="

grid

grid-cols-2

md:grid-cols-4

gap-6

mb-10

">









<div className="

bg-white/5

backdrop-blur-xl

border

border-white/10

rounded-3xl

p-6

shadow-xl

hover:-translate-y-2

transition

">



<p className="text-gray-400">

Total Tasks

</p>



<h2 className="

text-4xl

font-bold

mt-3

">

{stats.total}

</h2>



</div>











<div className="

bg-white/5

backdrop-blur-xl

border

border-white/10

rounded-3xl

p-6

shadow-xl

hover:-translate-y-2

transition

">



<p className="text-gray-400">

Completed

</p>



<h2 className="

text-4xl

font-bold

mt-3

text-purple-400

">

{stats.completed}

</h2>



</div>









<div className="

bg-white/5

backdrop-blur-xl

border

border-white/10

rounded-3xl

p-6

shadow-xl

hover:-translate-y-2

transition

">



<p className="text-gray-400">

Pending

</p>



<h2 className="

text-4xl

font-bold

mt-3

text-pink-400

">

{stats.pending}

</h2>



</div>









<div className="

bg-white/5

backdrop-blur-xl

border

border-white/10

rounded-3xl

p-6

shadow-xl

hover:-translate-y-2

transition

">



<p className="text-gray-400">

Success Rate

</p>



<h2 className="

text-4xl

font-bold

mt-3

text-purple-400

">

{stats.rate}%

</h2>



</div>









</div>









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

mb-8

">

Task Completion Overview 📊

</h2>









<div

style={{

width:"100%",

height:400

}}

>



<ResponsiveContainer>



<BarChart

data={chartData}

>



<XAxis

dataKey="name"

stroke="#aaa"

/>





<YAxis

stroke="#aaa"

/>









<Tooltip



contentStyle={{

background:"#050816",

border:"1px solid #9333ea",

borderRadius:"16px",

color:"#fff"

}}


/>








<Bar


dataKey="Completed"


fill="#9333ea"


radius={[15,15,0,0]}


/>








<Bar


dataKey="Pending"


fill="#ec4899"


radius={[15,15,0,0]}


/>







</BarChart>



</ResponsiveContainer>







</div>







</div>












<div className="

mt-10

bg-linear-to-r

from-purple-600/20

to-pink-600/20

border

border-purple-500/20

rounded-3xl

p-8

text-center

">





<h3 className="

text-2xl

font-bold

mb-2

">

Keep Improving 🔥

</h3>




<p className="text-gray-300">

Every completed task builds your productivity streak.

</p>






</div>











</div>









</main>









</div>


)



}





export default Analytics;