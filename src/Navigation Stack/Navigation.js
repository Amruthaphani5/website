import { BrowserRouter, Route, Routes } from "react-router-dom"
import Loginscreen from "../Pagees/login"
import Registerscreen from "../Pagees/register"
import Invalidscreen from "../Pagees/invalid"
import Aboutscreen from "../Pagees/Aftre-login/About"
import Settingscreen from "../Pagees/Aftre-login/setting"
import Homescreen from "../Pagees/Aftre-login/home"
import Product from "../Pagees/Aftre-login/product"
import Postlogin from "./post-login/postlogin"
import Prelogin from "./Pre-login/prelogin"
import { useState } from "react"

  const Navigationstack = () => {
    const[login,setlogin]=useState(true)
    return (
  <BrowserRouter>
    {/* <Route path="/"  element={Loginscreen} />
    <Route path="/register"  element={Registerscreen} />
    <Route path="/invalid"  element={Invalidscreen} /> */}


     {/* <Route path="/"  element={<Homescreen/>} />
    <Route path="/about"  element={<Aboutscreen/>} />
    <Route path="*"  element={<Invalidscreen/>} />
           
    <Route path="/product/:id" element={<Product/>} /> */}

    {
      login 
      ?
      <Postlogin/>
      :
      <Prelogin/>
    }


  </BrowserRouter>
    )
  }
   export default Navigationstack