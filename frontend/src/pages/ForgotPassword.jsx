import {useState} from "react";
import API from "../services/api";
import {useNavigate} from "react-router-dom";


function ForgotPassword(){


const navigate=useNavigate();


const [email,setEmail]=useState("");



const sendOTP=async()=>{


try{


await API.post(

"/auth/forgot-password",

{

email

}

);


alert("OTP sent");


navigate(
"/reset-password"
);



}

catch(err){


console.log(err);

alert(
err.response?.data?.message ||
"Failed"
);


}


}





return(


<div className="
min-h-screen
bg-[#050816]
text-white
flex
items-center
justify-center
">


<div className="
bg-[#11162b]
p-10
rounded-3xl
w-[420px]
">


<h1 className="
text-4xl
font-bold
mb-5
">

Forgot Password 🔐

</h1>


<input

className="
w-full
bg-black/40
p-4
rounded-xl
"

placeholder="Email"

onChange={(e)=>

setEmail(e.target.value)

}

/>



<button

onClick={sendOTP}

className="
mt-6
w-full
p-4
rounded-xl
bg-linear-to-r
from-purple-600
to-pink-500
font-bold
"

>

Send OTP 🚀

</button>


</div>


</div>


)

}


export default ForgotPassword;