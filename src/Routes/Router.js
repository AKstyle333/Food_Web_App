import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AllFood from "../Pages/AllFood"
import FoodDetails from "../Pages/FoodDetails"
import Cart from "../Pages/Cart"
import CheckOut from "../Pages/CheckOut"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import Contact from "../Pages/Contact"
function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/allfood" element={<AllFood></AllFood>}></Route>
                <Route path="/foods/:id" element={<FoodDetails></FoodDetails>}></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
                <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
            </Routes>
        </div>
    );
}

export default Router;
