// import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { cartUiAction } from "../../Store/Slice/CartSliceUi";

function Carts() {
    const dispatch = useDispatch();
    const cartToggle = () => {
        dispatch(cartUiAction.toggle());
    };
    const CartItems = useSelector((state) => state.cart.cartItems);
    const cartTotal = useSelector((state) => state.cart.totalAmount);
    // const [cartTotal, setCartTotal] = useState(0);
    // useEffect(() => {
    //     const total = CartItems.reduce((acc, item) => {
    //         return acc + item.totalprice;
    //     }, 0);
    //     setCartTotal(total);
    // }, [CartItems]);
    return (
        <>
            <div className="cart__container">
                <div className="cart list-group">
                    <div className="cart__close" onClick={cartToggle}>
                        <span>
                            <i className="ri-close-fill"></i>
                        </span>
                    </div>
                    <div className="cart__item-list">
                        {CartItems.length === 0 ? (
                            <div className="cart_empty">
                                <h3 className="text-center align-middle">Your Cart is Empty</h3>
                            </div>
                        ) : (
                            CartItems.map((items) => {
                                return <CartItem item={items}></CartItem>;
                            })
                        )}
                    </div>
                    <div className="cart__bottom d-flex align-items-center justify-content-between">
                        <h6>
                            Subtotal amount: <span>$ {cartTotal}</span>
                        </h6>
                        <button>
                            <Link to="/checkout">Checkout</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Carts;
