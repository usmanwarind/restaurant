import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

export default function Header({ heading, subHeading }) {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const [show, handleShow] = useState(false);
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    const logoutHandle = () => {
        dispatch(authActions.logout());
    };

    return (
        <>
            <nav
                className={`custom-navbar navbar navbar-expand-lg navbar-dark fixed-top ${
                    show && "nav__black"
                }`}
                /* data-spy="affix"
                data-offset-top="10" */
            >
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <a className="navbar-brand m-auto" href="#">
                        <img src="imgs/logo.png" className="brand-img" alt="" />
                        <span className="brand-txt">Hot Food</span>
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/shop" className="nav-link">
                                Shop
                            </NavLink>
                        </li>

                        {isLoggedIn && (
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link head-cart">
                                    <span className="head-totalQuantity">{totalQuantity}</span>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </Link>
                            </li>
                        )}

                        {isLoggedIn && (
                            <li className="nav-item">
                                <Link to="/" className="nav-link head-cart">
                                    <button
                                        className="btn btn-primary px-1 py-0"
                                        onClick={logoutHandle}
                                    >
                                        Logout
                                    </button>
                                </Link>
                            </li>
                        )}
                        {!isLoggedIn && (
                            <li className="nav-item">
                                <NavLink to="/auth" className="nav-link">
                                    Login
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>

            <header id="home" className="header">
                <div className="overlay text-white text-center">
                    <h1 className="display-2 font-weight-bold my-3">{heading}</h1>
                    <h2 className="display-4 mb-5">{subHeading}</h2>
                    <a className="btn btn-lg btn-primary" href="#gallary">
                        View Our gallary
                    </a>
                </div>
            </header>
        </>
    );
}
