import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom";



import Welcome from "./pages/Welcome";

import Login from "./pages/Login";

import Register from "./pages/Register";


import GoogleSuccess from "./pages/GoogleSuccess";


import Dashboard from "./pages/Dashboard";

import Calendar from "./pages/Calendar";

import Goals from "./pages/Goals";

import Habits from "./pages/Habits";

import Analytics from "./components/Analytics";

import Settings from "./pages/Settings";







function App(){



return(


<BrowserRouter>



<Routes>





<Route

path="/"

element={<Welcome/>}

/>







<Route

path="/login"

element={<Login/>}

/>







<Route

path="/register"

element={<Register/>}

/>













<Route

path="/google-success"

element={<GoogleSuccess/>}

/>










<Route

path="/dashboard"

element={<Dashboard/>}

/>








<Route

path="/calendar"

element={<Calendar/>}

/>








<Route

path="/goals"

element={<Goals/>}

/>









<Route

path="/habits"

element={<Habits/>}

/>








<Route

path="/analytics"

element={<Analytics/>}

/>








<Route

path="/settings"

element={<Settings/>}

/>







</Routes>




</BrowserRouter>



)

}



export default App;