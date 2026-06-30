import {useState} from "react";

import API from "../services/api";

import {useNavigate,Link} from "react-router-dom";

import {
User,
Mail,
Lock,
Phone,
Globe,
Sparkles,
Eye,
EyeOff
} from "lucide-react";





function Register(){


const navigate = useNavigate();


const [loading,setLoading]=useState(false);


const [showPassword,setShowPassword]=useState(false);



const [data,setData]=useState({

name:"",
email:"",
password:"",
phone:""

});






const update=(key,value)=>{


setData({

...data,

[key]:value

});


};








const register=async()=>{


try{


setLoading(true);



await API.post(

"/auth/register",

data

);



navigate("/verify-phone");



}


catch(err){


console.log(err);



alert(

err.response?.data?.message ||

"Registration failed"

);


}



finally{


setLoading(false);


}



};









return(



<div className="

min-h-screen

bg-[#050816]

flex

items-center

justify-center

relative

overflow-hidden

text-white

">








<div className="

absolute

w-[500px]

h-[500px]

bg-purple-600/30

blur-[160px]

rounded-full

top-10

left-10

">


</div>







<div className="

absolute

w-[400px]

h-[400px]

bg-pink-500/20

blur-[140px]

rounded-full

bottom-10

right-10

">


</div>









<div className="

relative

w-[430px]

bg-white/10

backdrop-blur-xl

border

border-white/20

rounded-[35px]

p-10

shadow-[0_0_80px_rgba(168,85,247,.3)]

">









<div className="

flex

justify-center

mb-5

">


<div className="

p-4

rounded-3xl

bg-linear-to-r

from-purple-600

to-pink-500

shadow-[0_0_40px_rgba(168,85,247,.5)]

">


<Sparkles size={35}/>


</div>


</div>









<h1 className="

text-4xl

font-black

text-center

bg-linear-to-r

from-purple-400

via-pink-400

to-blue-400

bg-clip-text

text-transparent

">


Create Account 🚀


</h1>








<p className="

text-center

text-gray-400

mt-3

mb-8

">


Start your AI productivity journey 🤖


</p>









<div className="space-y-4">







<div className="

flex

items-center

bg-black/40

border

border-white/10

rounded-2xl

px-4

">


<User className="text-purple-400"/>


<input


placeholder="Full Name"


className="

bg-transparent

outline-none

p-4

w-full

"


onChange={e=>

update(

"name",

e.target.value

)

}


/>


</div>









<div className="

flex

items-center

bg-black/40

border

border-white/10

rounded-2xl

px-4

">


<Mail className="text-pink-400"/>


<input


placeholder="Email Address"


className="

bg-transparent

outline-none

p-4

w-full

"


onChange={e=>

update(

"email",

e.target.value

)

}


/>


</div>









<div className="

flex

items-center

bg-black/40

border

border-white/10

rounded-2xl

px-4

">


<Lock className="text-blue-400"/>


<input


type={showPassword?"text":"password"}


placeholder="Password"


className="

bg-transparent

outline-none

p-4

w-full

"


onChange={e=>

update(

"password",

e.target.value

)

}


/>



<button

onClick={()=>setShowPassword(!showPassword)}

>


{

showPassword ?

<EyeOff/>

:

<Eye/>

}


</button>



</div>









<div className="

flex

items-center

bg-black/40

border

border-white/10

rounded-2xl

px-4

">


<Phone className="text-green-400"/>


<input


placeholder="Phone Number"


className="

bg-transparent

outline-none

p-4

w-full

"


onChange={e=>

update(

"phone",

e.target.value

)

}


/>


</div>








</div>









<button


onClick={register}


disabled={loading}



className="

mt-7

w-full

py-4

rounded-2xl

font-bold

text-lg

bg-linear-to-r

from-purple-600

to-pink-500

hover:scale-105

transition

"


>



{

loading ?

"Creating Account..."

:

"Create Account 🚀"

}



</button>









<div className="

flex

items-center

gap-3

my-6

">


<div className="h-px bg-white/20 flex-1"></div>


<span className="text-gray-400 text-sm">

OR

</span>


<div className="h-px bg-white/20 flex-1"></div>


</div>









<button


className="

w-full

py-4

rounded-2xl

bg-white/10

border

border-white/20

hover:bg-white/20

transition

flex

items-center

justify-center

gap-3

"


>


<Globe/>


Continue with Google


</button>









<p className="

text-center

text-gray-400

mt-7

">


Already have an account?



<Link

to="/login"

className="

text-purple-400

font-bold

ml-2

"


>


Login 🚀


</Link>



</p>









</div>







</div>



)

}



export default Register;