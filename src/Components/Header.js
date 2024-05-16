import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartUiAction } from "../Store/Slice/CartSliceUi";

function Header() {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    const dispatch=useDispatch()
    const cartToggle=()=>{
        dispatch(cartUiAction.toggle())
    }

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container mx-auto">
                        <Link className="navbar-brand d-flex flex-column align-items-center" to="/">
                            <img src="Assets/images/res-logo.png" alt="logo" width="48" height="48" />
                            <span className="logoText mt-1 fw-bold">Tasty Treat</span>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active mx-15" aria-current="page" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-15" to="/allfood">
                                        Foods
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-15" to="/cart">
                                        Cart
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-15" to="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            <div className="navIcons d-flex gap-10">
                                <span onClick={cartToggle} className="mx-2 position-relative">
                                    <i className="ri-shopping-bag-line fs-5"></i>
                                    <span className="position-absolute cartValue fs-12 bg-red text-white rounded-circle">
                                        <span className="text-white">{totalQuantity}</span>
                                    </span>
                                </span>
                                <span className="mx-2">
                                    <i className="ri-user-line fs-5"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;
