import React from "react";
import {BrowserRouter , Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Library from "./Components/Library";


function App(){
  return(
    <>
      <BrowserRouter>
      <Navbar/>
       
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Library" element={<Library/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Signup" element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App




