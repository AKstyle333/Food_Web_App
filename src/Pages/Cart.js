import React from "react";
import Helmet from "../Components/Helmet";
import CommonSection from "../Components/CommonSection";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../Store/Slice/CartSlice";
import { Link } from "react-router-dom";

function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const dispatch = useDispatch();

    const deleteFromItem = (id) => {
        dispatch(cartAction.deleteItem({ id }));
    };
    const Tr = (props) => {
        console.log(props.items);
        const { image01, totalprice, quantity, title } = props.items;
        return (
            <tr>
                <td className="text-center align-middle">
                    <img src={image01} width={40} alt="" />
                </td>
                <td className="text-center align-middle">{title}</td>
                <td className="text-center align-middle">{totalprice}</td>
                <td className="text-center align-middle">{quantity}</td>
                <td className="text-center align-middle" onClick={props.delete}>
                    <i class="ri-delete-bin-6-line"></i>
                </td>
            </tr>
        );
    };

    return (
        <Helmet title="Cart">
            <CommonSection title="Cart" />

            {cartItems.length === 0 ? (
                <h3 className="text-center my-5">Your Cart is Empty</h3>
            ) : (
                <>
                    <div className="container px-0 my-5">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center">Image</th>
                                    <th className="text-center">Product Title</th>
                                    <th className="text-center">Price</th>
                                    <th className="text-center">Quantity</th>
                                    <th className="text-center">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => {
                                    return <Tr items={item} delete={() => deleteFromItem(item.id)}></Tr>;
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="container">
                        <div className="mt-4">
                            <h6 className="fw-bold fs-4">
                                Subtotal : $ <span className="cart__subtotal red">{totalAmount}</span>
                            </h6>
                            <p>Taxes and shipping will calculate at checkout</p>
                            <div className="cart__page-btn mb-4">
                                <button className="addTOCart__btn  bgRedBtn ms-0 me-4">
                                    <Link className="text-white" to="/allfood">
                                        Continue Shopping
                                    </Link>
                                </button>
                                <button className="addTOCart__btn  bgRedBtn">
                                    <Link className="text-white" to="/checkout">
                                        Proceed to checkout
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Helmet>
    );
}

export default Cart;
