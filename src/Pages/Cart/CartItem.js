import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Store/Slice/CartSlice";

function CartItem(props) {
    const dispatch = useDispatch();
    const { id, title, image01, price, totalprice, quantity } = props.item;
    const addToCart = () => {
        dispatch(cartAction.addItem({ id, title, image01, price }));
    };
    const removeFromCart = () => {
        if (quantity === 1) {
            return;
        } else {
            dispatch(cartAction.removeItem({ id, title, image01, price }));
        }
    };
    const deleteFromItem = () => {
        dispatch(cartAction.deleteItem({ id }));
    };
    return (
        <div className="border-0 cart__item">
            <div className="cart__item-info d-flex gap-2">
                <img src={image01} alt="product_01.1.jpg"></img>

                <div className="cart__product-info w-100 d-flex align-items-center justify-content-between gap-4">
                    <div>
                        <h6 className="cart__product-title">{title}</h6>

                        <p className="d-flex align-items-center gap-5 cart__product-price">
                            {quantity} X {price} <span>${totalprice}</span>
                        </p>
                        <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
                            <span className="increase__btn" onClick={addToCart}>
                                <i className="ri-add-line"></i>
                            </span>

                            <span className="quantity">{quantity}</span>

                            <span className="decrease__btn" onClick={removeFromCart}>
                                <i className="ri-subtract-line"></i>
                            </span>
                        </div>
                    </div>

                    <span className="delete__btn" onClick={deleteFromItem}>
                        <i className="ri-close-circle-fill"></i>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
