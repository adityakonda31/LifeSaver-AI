import {
Home,
Calendar,
Target,
Flame,
BarChart3,
Settings,
User
}
from "lucide-react";


import {NavLink} from "react-router-dom";



const menu=[

{
name:"Dashboard",
icon:<Home size={20}/>,
path:"/dashboard"
},

{
name:"Calendar",
icon:<Calendar size={20}/>,
path:"/calendar"
},

{
name:"Goals",
icon:<Target size={20}/>,
path:"/goals"
},

{
name:"Habits",
icon:<Flame size={20}/>,
path:"/habits"
},

{
name:"Analytics",
icon:<BarChart3 size={20}/>,
path:"/analytics"
},

{
name:"Settings",
icon:<Settings size={20}/>,
path:"/settings"
}

]





function Sidebar(){



const user =
JSON.parse(localStorage.getItem("user"));



return(


<div className="
w-72
min-h-screen
bg-[#080d20]
border-r
border-gray-800
p-6
hidden
md:flex
flex-col
">



<h1 className="
text-3xl
font-bold
text-purple-400
mb-12
">

LifeSaver AI

</h1>




<div className="flex-1 space-y-3">


{

menu.map(item=>(


<NavLink

key={item.name}

to={item.path}


className={({isActive})=>

`
flex
items-center
gap-4
p-3
rounded-xl

${
isActive

?

"bg-purple-600 text-white"

:

"text-gray-400 hover:bg-[#151b36]"

}

`

}


>

{item.icon}


{item.name}


</NavLink>


))

}


</div>





<div className="
bg-[#11162b]
p-5
rounded-xl
">


<div className="
flex
gap-3
items-center
">


<User/>


<div>


<h3 className="
font-semibold
">


{
user?.name || "User"
}


</h3>


<p className="
text-xs
text-gray-400
">


{
user?.email || "Account"
}


</p>


</div>


</div>



</div>





</div>



)

}


export default Sidebar;