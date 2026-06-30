import {useState} from "react";

import API from "../services/api";

import {useNavigate} from "react-router-dom";



function ResetPassword(){


const navigate = useNavigate();


const [data,setData]=useState({

email:"",

otp:"",

password:""

});





const update=(key,value)=>{


setData({

...data,

[key]:value

});


};







const reset=async()=>{


try{


await API.post(

"/auth/reset-password",

data

);



alert(
"Password changed successfully"
);



navigate("/login");



}

catch(err){


console.log(err);


alert(

err.response?.data?.message ||

"Reset failed"

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

border

border-purple-500/30

">





<h1 className="

text-4xl

font-bold

mb-8

">

Reset Password 🔐

</h1>








<input

placeholder="Email"

className="
w-full
bg-black/40
p-4
rounded-xl
mb-4
"

onChange={(e)=>

update(
"email",
e.target.value
)

}

/>







<input

placeholder="OTP"

className="
w-full
bg-black/40
p-4
rounded-xl
mb-4
"

onChange={(e)=>

update(
"otp",
e.target.value
)

}

/>







<input


type="password"

placeholder="New Password"

className="
w-full
bg-black/40
p-4
rounded-xl
"

onChange={(e)=>

update(
"password",
e.target.value
)

}

/>







<button

onClick={reset}

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

Update Password 🚀

</button>






</div>






</div>


)

}



export default ResetPassword;