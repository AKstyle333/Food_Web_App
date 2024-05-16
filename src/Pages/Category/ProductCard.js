import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction } from "../../Store/Slice/CartSlice";
// import image01 from "../../Fake_data/images/ava-1.jpg";

export default function ProductCard(props) {
    // console.log(props);
    const { id, title, image01, price } = props.ProductsItem;
const dispatch = useDispatch()

    const addToCart = () => {
        // alert("dzfvf");
        dispatch(cartAction.addItem({ id, title, image01, price }));
    };
    
    return (
        <div className="product_item p-2 p-md-4 border rounded">
            <div className="product_img">
                <Link to={`/foods/${id}`}>
                    <img src={image01} alt="Product Img" className="d-block mx-auto w-50"></img>
                </Link>
            </div>
            <div className="product_content my-2">
                <h5 className="text-center  mt-2 mt-lg-3">
                    <Link to={`/foods/${id}`} className="text-dark fs-14">
                        {title}
                    </Link>
                </h5>

                <div className="d-flex align-items-center justify-content-between mt-3 mt-md-4 mt-lg-5">
                    <span className="product_price red fw-bold">${price}</span>

                    <button className="addtocart_btn bgRedBtn" onClick={addToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
