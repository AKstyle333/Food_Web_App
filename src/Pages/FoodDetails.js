import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Helmet from "../Components/Helmet";
import CommonSection from "../Components/CommonSection";
import { useParams } from "react-router-dom";
import products from "../Fake_data/products";
import { cartAction } from "../Store/Slice/CartSlice";

import ProductCard from "./Category/ProductCard";

function FoodDetails() {

    

    const { id } = useParams();
    // console.log(id);

    const Product = products.find((items) => items.id === id);
    // console.log(Product);

    // const categoryForRelated = Product.category;
    // console.log(Product.category);

    const { title, desc, price, category, image01, image02, image03 } = Product;
    const [preImage, setPreImage] = useState(image01);
    const [tab, setTab] = useState("desc");

    const dispatch = useDispatch();
    const addToCart = () => {
        // alert("dzfvf");
        dispatch(cartAction.addItem({ id, title, image01, price }));
    };

    const RelatedProduct = products.filter((items) => items.category === category);
    console.log("related Product", RelatedProduct);

    useEffect(() => {
        setPreImage(Product.image01);
        window.scrollTo(0, 0);
    }, [Product]);
    return (
        <Helmet title="FoodDetails">
            <CommonSection title={title} />
            <div className="container row mx-auto mt-5 mb-3">
                <div className="col-2 d-flex align-items-center">
                    <div>
                        <img src={image01} onClick={() => setPreImage(image01)} className=" d-block border p-3" width={108} alt="" />
                        <img src={image02} onClick={() => setPreImage(image02)} className=" d-block border mt-2 p-3" width={108} alt="" />
                        <img src={image03} onClick={() => setPreImage(image03)} className=" d-block border mt-2 p-3" width={108} alt="" />
                    </div>
                </div>
                <div className="col-5">
                    <img src={preImage} className="w-75 d-block h-100" alt="" />
                </div>
                <div className="col-5">
                    <div className="mt-5">
                        <h2>{title}</h2>
                        <div className="red d-flex align-items-center">
                            <span className="fs-5">Price :</span>
                            <span className="fs-3 ms-1">$ {price}</span>
                        </div>
                        <div className="d-flex align-items-center pb-2">
                            <span className="fs-5">Category :</span>
                            <span className="fs-5 ms-1">{category}</span>
                        </div>
                        <button className="addtocart_btn bgRedBtn mt-4" onClick={addToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="pb-5 pt-3">
                    <span className="btn-active" onClick={() => setTab("desc")}>
                        Description
                    </span>
                    <span className="ms-5 btn-active" onClick={() => setTab("review")}>
                        Review
                    </span>
                </div>
                {tab === "desc" ? (
                    <div>
                        <p>{desc}</p>
                    </div>
                ) : (
                    <div className="mt-3">
                        <div>
                            <h4 className="m-0 fw-bold">Akash</h4>
                            <p className="">Akash@gmail.com</p>
                            <p className="text-muted fs-5">Great Product</p>
                        </div>
                        <div>
                            <h4 className="m-0 fw-bold">Akash</h4>
                            <p className="">Akash@gmail.com</p>
                            <p className="text-muted fs-5">Great Product</p>
                        </div>
                        <div>
                            <h4 className="m-0 fw-bold">Akash</h4>
                            <p className="">Akash@gmail.com</p>
                            <p className="text-muted fs-5">Great Product</p>
                        </div>
                        <div>
                            <div className="">
                                <form className="w-50 mx-auto p-5 bg-redlight">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                                    </div>
                                    <div className="mb-3">
                                        <textarea rows={5} className="w-100 p-3" id="textarea" placeholder="Enter Your Review" />
                                    </div>

                                    <button type="submit" className="btn bg-red text-white px-4 py-2">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
                <div className="row px-0 container mx-auto my-3">
                    <h2>Related Products</h2>
                    {RelatedProduct.map((item) => {
                        return (
                            <div className="col-12 col-md-4 col-lg-3 my-3 h-auto" key={item.id}>
                                <ProductCard ProductsItem={item} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </Helmet>
    );
}

export default FoodDetails;
