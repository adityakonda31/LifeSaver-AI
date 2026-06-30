import {useState} from "react";

import API from "../services/api";


function Login(){


const [data,setData]=useState({

email:"",
password:""

});



const login=async()=>{


const res =
await API.post(
"/auth/login",
data
);



localStorage.setItem(

"token",

res.data.token

);



alert(
"Login successful"
);


}



return(

<div>


<input

placeholder="email"

onChange={
e=>setData({

...data,

email:e.target.value

})

}

/>



<input

placeholder="password"

type="password"

onChange={
e=>setData({

...data,

password:e.target.value

})

}

/>



<button onClick={login}>

Login

</button>



</div>

)


}


export default Login;