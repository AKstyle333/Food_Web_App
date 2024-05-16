import React from "react";
import Helmet from "../Components/Helmet";
import CommonSection from "../Components/CommonSection";
import { useSelector } from "react-redux";



function CheckOut() {
    const cartItems = useSelector((state) => state.cart.cartItems);

    const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
    const shippingCost = 100
    const totalAmount = cartTotalAmount + shippingCost;
    return (
        <Helmet title="CheckOut">
            <CommonSection title="CheckOut" />

            <section className="container mx-auto row">
                <div className="col-8">
                    <h5 className=" mt-5 mb-3">Shipping Address</h5>
                    <form className="mb-5">
                        <div class="mb-3">
                            <label for="exampleInputText" class="form-label">
                                Enter Your Name
                            </label>
                            <input type="text" class="form-control" id="exampleInputText" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputText" class="form-label">
                                Enter Your Email{" "}
                            </label>
                            <input type="email" class="form-control" id="exampleInputText" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputText" class="form-label">
                                Phone Number
                            </label>
                            <input type="text" class="form-control" id="exampleInputText" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputText" class="form-label">
                                Country
                            </label>
                            <input type="text" class="form-control" id="exampleInputText" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputText" class="form-label">
                                City
                            </label>
                            <input type="text" class="form-control" id="exampleInputText" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputText" class="form-label">
                                Postal Code
                            </label>
                            <input type="text" class="form-control" id="exampleInputText" />
                        </div>

                        <button type="submit" class="btn bgRedBtn ">
                            Payment
                        </button>
                    </form>
                </div>
                <div className="col-4 fw-bold  mt-5">
                    <div className="w-75 p-5 mx-auto checkOutBg">
                        <p>
                            Subtotal : <span className="ms-3">$ {cartTotalAmount}</span>
                        </p>
                        <p>Shipping : {cartItems.length === 0 ? <span className="ms-3">$ 0</span> : <span className="ms-3">$ {shippingCost}</span>}</p>
                        <p className="mb-0">
                            Total : {cartItems.length === 0 ? <span className="ms-3">$ 0</span> : <span className="ms-3">$ {totalAmount}</span>}
                        </p>
                    </div>
                </div>
            </section>
        </Helmet>
    );
}

export default CheckOut;
