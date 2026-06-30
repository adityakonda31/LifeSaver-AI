import {useState} from "react";

import API from "../services/api";

import {useNavigate} from "react-router-dom";



function VerifyPhone(){


const navigate=useNavigate();



const [data,setData]=useState({

phone:"",
otp:""

});





const sendOTP=async()=>{


await API.post(

"/otp/send",

{
phone:data.phone
}

);



alert(
"OTP Sent"
);


}





const verify=async()=>{


await API.post(

"/otp/verify",

data

);



alert(
"Phone Verified"
);



navigate("/login");


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
p-8
rounded-xl
w-96
">


<h1 className="
text-3xl
font-bold
mb-5
">

Verify Phone

</h1>




<input

className="
w-full
bg-black
p-3
rounded
mb-3
"

placeholder="+91XXXXXXXXXX"


value={data.phone}


onChange={
e=>setData({

...data,

phone:e.target.value

})

}

/>




<button

onClick={sendOTP}

className="
bg-purple-600
w-full
p-3
rounded-xl
mb-5
"

>

Send OTP

</button>





<input

className="
w-full
bg-black
p-3
rounded
mb-3
"

placeholder="OTP"


onChange={
e=>setData({

...data,

otp:e.target.value

})

}


/>





<button

onClick={verify}

className="
bg-green-600
w-full
p-3
rounded-xl
"

>

Verify

</button>



</div>



</div>


)

}



export default VerifyPhone;