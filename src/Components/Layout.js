import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Router from "../Routes/Router";
import Carts from "../Pages/Cart/Carts";
import { useSelector } from "react-redux";

function Layout() {
    const Cart =useSelector(state=> state.cartUi.cartVisible)
    return (
        <div>
        
        {Cart ===true? <Carts/>:null}
            <Header />
            <div>
                <Router />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
