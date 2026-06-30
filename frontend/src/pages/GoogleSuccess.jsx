import {useEffect} from "react";

import {useNavigate} from "react-router-dom";




function GoogleSuccess(){


const navigate = useNavigate();





useEffect(()=>{


const params = new URLSearchParams(

window.location.search

);



const token = params.get("token");





if(token){


localStorage.setItem(

"token",

token

);



navigate("/dashboard");


}



},[]);






return(


<div className="

min-h-screen

bg-[#050816]

text-white

flex

items-center

justify-center

text-3xl

font-bold

">


Logging you in with Google 🚀


</div>


)



}



export default GoogleSuccess;