import {useState} from "react";

import API from "../services/api";

import {useNavigate,Link} from "react-router-dom";

import {
Mail,
Lock,
Globe,
Sparkles
} from "lucide-react";




function Login(){


const navigate = useNavigate();



const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [loading,setLoading]=useState(false);







const login=async()=>{


try{


setLoading(true);



const res = await API.post(

"/auth/login",

{

email,

password

}

);





localStorage.setItem(

"token",

res.data.token

);





navigate("/dashboard");



}



catch(err){


console.log(err);



alert(

err.response?.data?.message ||

"Invalid email or password"

);


}



finally{


setLoading(false);


}



};









const googleLogin=()=>{


window.location.href =

import.meta.env.VITE_API_URO=L + "/api/auth/google";


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

w-[600px]

h-[600px]

bg-purple-600/30

blur-[160px]

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

blur-[150px]

rounded-full

bottom-10

right-20

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

mb-6

">


<div className="

bg-linear-to-r

from-purple-600

to-pink-500

p-4

rounded-3xl

shadow-[0_0_40px_rgba(168,85,247,.5)]

">


<Sparkles size={35}/>


</div>


</div>









<h1 className="

text-5xl

font-black

text-center

bg-linear-to-r

from-purple-400

via-pink-400

to-blue-400

text-transparent

bg-clip-text

">


Welcome Back 🚀


</h1>








<p className="

text-center

text-gray-400

mt-4

">


Your AI productivity journey continues 🤖


</p>











<div className="

mt-8

space-y-5

">





<div className="

flex

items-center

bg-black/40

border

border-white/10

rounded-2xl

px-4

">


<Mail className="text-purple-400"/>



<input


placeholder="Email Address"


className="

bg-transparent

outline-none

p-4

w-full

"


onChange={e=>

setEmail(e.target.value)

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


<Lock className="text-pink-400"/>



<input


type="password"


placeholder="Password"


className="

bg-transparent

outline-none

p-4

w-full

"


onChange={e=>

setPassword(e.target.value)

}


/>



</div>





</div>









<div className="

text-right

mt-3

">


<button




className="

text-sm

text-purple-400

hover:underline

"


>


Forgot Password?


</button>



</div>











<button



onClick={login}



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

shadow-[0_0_30px_rgba(168,85,247,.4)]

"



>



{


loading

?

"Signing in..."

:

"Login 🚀"


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



onClick={googleLogin}



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

justify-center

items-center

gap-3

"



>



<Globe/>


Continue with Google



</button>













<p className="

text-center

text-gray-400

mt-8

">



Don't have an account?



<Link


to="/register"


className="

text-purple-400

font-bold

ml-2

"



>


Create Account 🚀


</Link>



</p>









</div>







</div>



)


}



export default Login;