import { Route, Routes } from "react-router-dom"
import Aboutscreen from "../../Pagees/Aftre-login/About"
import Homescreen from "../../Pagees/Aftre-login/home"
import Product from "../../Pagees/Aftre-login/product"
import Invalidscreen from "../../Pagees/invalid"


const Prelogin = () =>{
    return(
        <Routes>
    <Route path="/"  element={<Homescreen/>} />
    <Route path="/about"  element={<Aboutscreen/>} />
    <Route path="*"  element={<Invalidscreen/>} />
    <Route path="/product/:id" element={<Product/>} />


        </Routes>
    )
}
export default Prelogin