import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <section className="container pt-3 pt-md-0 footer border-1 border-top">
                <footer className="">
                    <div className="container p-2 p-sm-3 p-md-4">
                        <section className="">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ">
                                    <h5 className="">
                                        <Link className="navbar-brand d-flex flex-column align-item-center align-items-md-start" to="#">
                                            <div className="d-flex align-items-center flex-column">
                                                <img src="Assets/images/res-logo.png" alt="logo" className="d-block" width="64" height="64" />
                                                <span className="mt-2 fw-bold">Tasty Treat</span>
                                            </div>
                                        </Link>
                                    </h5>
                                    <p className="text-center text-md-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, laboriosam!</p>
                                </div>

                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0 d-flex align-items-center justify-content-center flex-column">
                                    <h5 className="text-uppercase  fw-bold">Delivery Time</h5>

                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <Link className="text-body" href="#!">
                                                Sunday - Thursday
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-body" href="#!">
                                                10:00 am - 11:00 pm
                                            </Link>
                                        </li>
                                        <li>
                                            <div style={{ height: "20px" }}></div>
                                        </li>
                                        <li>
                                            <Link className="text-body" href="#!">
                                                Friday - Saturday
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-body" href="#!">
                                                Off Day
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0 d-flex align-items-center justify-content-center flex-column">
                                    <h5 className="text-uppercase fw-bold">Contact</h5>

                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <Link className="text-body" href="#!">
                                                Location : Xyz, Varachha-395006, Suart.
                                            </Link>
                                        </li>
                                        <li>
                                            <div style={{ height: "20px" }}></div>
                                        </li>
                                        <li>
                                            <Link className="text-body" href="#!">
                                                Phone : 9933663322
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-body" href="#!">
                                                Email : demo.xyz@gmail.com
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-center flex-column">
                                    <h5 className="text-uppercase fw-bold">Newsletter</h5>

                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <Link className="text-body" href="#!">
                                                Subscribe our newsletter
                                            </Link>
                                        </li>
                                        <li>
                                            <div style={{ height: "15px" }}></div>
                                        </li>
                                        <li>
                                            <Link className="text-body" href="#!">
                                                <div className="my-3 position-relative">
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Enter your email" />
                                                        <label htmlFor="floatingInputGroup1">Enter your email</label>
                                                    </div>
                                                    <span className="input-text position-absolute">
                                                        <i className="ri-send-plane-fill"></i>
                                                    </span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    <section className="mb-4 p-1 p-sm-2 p-md-3 row p-lg-4">
                        <div className="d-inline col-12 col-md-8">
                            <p className="mb-0 mt-2 pt-1 red text-center text-md-start">
                                © 2024 Copyright :
                                <Link className="text-reset" href="#!">
                                    {" "}
                                    Website Made by <span className="fw-bold">AK aka Akash Kakadiya</span>, All Rights Reserved.
                                </Link>
                            </p>
                        </div>
                        <div className="d-inline col-12 col-md-4 mt-2 mt-md-0 red">
                            <div className="d-flex justify-content-center gap align-items-center">
                                {" "}
                                Follow :{" "}
                                <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                                <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                                <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button">
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                            </div>
                        </div>
                    </section>
                </footer>
            </section>
        </>
    );
}

export default Footer;
