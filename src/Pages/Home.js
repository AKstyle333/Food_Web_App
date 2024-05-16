import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./Category/ProductCard";
import products from "../Fake_data/products";
import TestimonialSlider from "./Slider/TestimonialSlider";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Components/Helmet";
function Home() {
    const [category, setCategory] = useState("ALL");
    const [allProduct, setAllProduct] = useState(products);
    const [hotPizza, setHotPizza] = useState(products);
    useEffect(() => {
        if (category === "ALL") {
            setAllProduct(products);
        }

        if (category === "PIZZA") {
            const FilterProduct = products.filter((item) => item.category === "Pizza");
            console.log(FilterProduct);
            setAllProduct(FilterProduct);
        }
        if (category === "BURGER") {
            const FilterProduct = products.filter((item) => item.category === "Burger");
            console.log(FilterProduct);
            setAllProduct(FilterProduct);
        }
        if (category === "BREAD") {
            const FilterProduct = products.filter((item) => item.category === "Bread");
            console.log(FilterProduct);
            setAllProduct(FilterProduct);
        }
    }, [category]);
    // console.log(category);
    useEffect(() => {
        const FilterPizza = products.filter((item) => item.category === "Pizza");
        const SlicePizza = FilterPizza.slice(0, 4);
        setHotPizza(SlicePizza);
    }, []);
    return (
        <Helmet title="Home">
            <section className="container row mx-auto mt-3">
                <div className="col-12 col-md-6 ps-0 d-flex align-items-center">
                    <div className="text-center text-sm-start">
                        <p>Easy way to make an order</p>
                        <h1 className="my-3">
                            <span className="red">HUNGRY?</span> Just wait food at <span className="red">your door</span>
                        </h1>
                        <p className="loremP my-3 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, odio?</p>
                        <div className="my-3">
                            <Link className="bgRedBtn" type="button" to="/allfood">
                                Order now <i className="ri-arrow-right-s-line"></i>
                            </Link>
                            <Link to="/allfood" type="button" className="bgWhiteBtn ms-3">
                                See allfoods
                            </Link>
                        </div>
                        <div className="mt-2 mt-md-3 mt-lg-5">
                            <span className=" fs-14">
                                <i className="ri-shield-keyhole-fill"></i> 100% Secure Checkout
                            </span>
                            <span className="ms-3 fs-14">
                                <i className="ri-truck-fill"></i> No shipping charge
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="homeImg">
                        <img src="Assets/images/hero.png" className="d-block w-100" alt="" />
                    </div>
                </div>
            </section>

            {/* ================================================ category ===================================================== */}

            <section className="container my-md-3 my-lg-5 py-2 py-md-3 py-lg-5 mx-auto">
                <div className="row card-container">
                    <div className="col-12 col-md-6 col-lg-3 mt-2">
                        <div className="card border-0">
                            <img src="Assets/images/category-01.png" className="d-block w-25" alt="" />
                            <div className="cardText">Fastfood</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mt-2">
                        <div className="card border-0">
                            <img src="Assets/images/category-02.png" className="d-block w-25" alt="" />
                            <div className="cardText">Pizza</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mt-2">
                        <div className="card border-0">
                            <img src="Assets/images/category-03.png" className="d-block w-25" alt="" />
                            <div className="cardText">Asian Food</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mt-2">
                        <div className="card border-0">
                            <img src="Assets/images/category-04.png" className="d-block w-25" alt="" />
                            <div className="cardText">Row Meat</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================ What we serve ===================================================== */}

            <section className="container text-center row mx-auto justify-content-center my-3 my-lg-5 py-2 py-md-3 py-lg-5">
                <h5 className="red">What we serve</h5>
                <h3 className="h3 my-3">
                    Just sit back at home we will <span className="red">take care</span>
                </h3>
                <p className="my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nemo.</p>
                <p className="my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nemo.</p>
            </section>

            {/* ================================================ Filter Category ================================================== */}
            <section className="">
                <h3 className="text-center my-2 my-md-3 my-lg-5 fs-1">Populer Foods</h3>
                <div className="row container bg-red mx-auto br-12">
                    <div className="col-12">
                        <ul className="filter my-2 my-md-3">
                            <li>
                                <Link to="" className="d-flex align-items-center .active" type="button" onClick={() => setCategory("ALL")}>
                                    <span>All</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="d-flex align-items-center" type="button" onClick={() => setCategory("BURGER")}>
                                    <img src="Assets/images/hamburger.png" width={18} height={18} className="me-2 ms-0" alt="" /> <span> Burger</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="d-flex align-items-center" type="button" onClick={() => setCategory("PIZZA")}>
                                    <img src="Assets/images/pizza.png" width={18} height={18} className="me-2 ms-0" alt="" /> <span> Pizza</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="d-flex align-items-center" type="button" onClick={() => setCategory("BREAD")}>
                                    <img src="Assets/images/bread.png" width={18} height={18} className="me-2 ms-0" alt="" /> <span> Bread</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row container px-0 mx-auto my-3">
                    {allProduct.map((item) => {
                        return (
                            <div className="col-12 col-md-4 col-lg-3 my-3 h-100" key={item.id}>
                                <ProductCard ProductsItem={item} />
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ================================================ services ===================================================== */}

            <section className="container row mt-3 mb-2 mt-lg-5 mb-lg-3 pt-2 pt-md-3 pt-lg-5 mx-auto justify-content-evenly text-center">
                <div className="col-12 col-md-3">
                    <div className="serviceCard ">
                        <img src="Assets/images/service-01.png" className="d-block w-50 mx-auto" alt="" />
                        <div className="fs-4 mt-2">Quick Delivery</div>
                        <p className="fs-14 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, veniam.</p>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="serviceCard ">
                        <img src="Assets/images/service-02.png" className="d-block w-50 mx-auto" alt="" />
                        <div className="fs-4 mt-2">Super Dine In</div>
                        <p className="fs-14 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, veniam.</p>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="serviceCard ">
                        <img src="Assets/images/service-03.png" className="d-block w-50 mx-auto" alt="" />
                        <div className="fs-4 mt-2">Easy Pick Up</div>
                        <p className="fs-14 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, veniam.</p>
                    </div>
                </div>
            </section>

            {/* =========================================== What Tasty Treat? ================================================= */}

            <section className="container row mx-auto mt-3">
                <div className="col-12 ps-0  col-md-6">
                    <div className="homeImg">
                        <img src="Assets/images/location.png" className="d-block w-100" alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center">
                    <div className="text-center text-sm-start">
                        <h3>Why Tasty Treat?</h3>
                        <p className="fs-14 text-muted pb-2 pb-md-3 pb-lg-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quam impedit eaque inventore, maiores labore quibusdam autem nam nesciunt. Eligendi modi eum debitis ad optio
                            natus fuga ex sint explicabo.
                        </p>
                        <div className="my-3">
                            <div>
                                <p className="headingP mb-2 fw-bold">
                                    <i className="ri-checkbox-circle-line red"></i>
                                    <span> Fresh and tasty foods</span>
                                </p>
                                <p className="fs-14 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, mollitia.</p>
                            </div>
                            <div>
                                <p className="headingP mb-2 fw-bold">
                                    <i className="ri-checkbox-circle-line red"></i>
                                    <span> Quality support</span>
                                </p>
                                <p className="fs-14 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, mollitia.</p>
                            </div>
                            <div>
                                <p className="headingP mb-2 fw-bold">
                                    <i className="ri-checkbox-circle-line red"></i>
                                    <span> Order from any location</span>
                                </p>
                                <p className="fs-14 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, mollitia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================== Hot Pizza ================================================= */}

            <section className="container">
                <h3 className="text-center fs-1">Hot Pizza</h3>
                <div className="row mx-auto my-3">
                    {hotPizza.map((item) => {
                        return (
                            <div className="col-12 col-md-4 col-lg-3 my-3 h-100" key={item.id}>
                                <ProductCard ProductsItem={item} />
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* =========================================== Testimonial ================================================= */}
            <section className="container row mx-auto my-2 my-md-3">
                <div className="col-12 col-md-6 d-flex align-items-center">
                    <div className="text-center text-sm-start w-100">
                        <div className="testimonial position-relative">
                            <h5 className="testimonial_subtitle mb-4 red">Testimonial</h5>
                            <h2 className="testimonial_title mb-4">
                                What our <span className="red">customers</span> are saying
                            </h2>
                            <p className="testimonial_desc">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus guos sit perspiciatis inventore quis provident placeat fugiat !
                            </p>
                            {/* <TestimonialSlider></TestimonialSlider> */}
                            <Container>
                                <Row className=" my-2 my-md-3">
                                    <Col className=" my-2 my-md-3 px-0">
                                        <TestimonialSlider></TestimonialSlider>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
                <div className="col-12 ps-0  col-md-6 my-2 my-md-3">
                    <div className="homeImg">
                        <img src="Assets/images/network.png" className="d-block w-100" alt="" />
                    </div>
                </div>
            </section>
        </Helmet>
    );
}

export default Home;
