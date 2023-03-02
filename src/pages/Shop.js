import React from "react";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import Products from "../component/Products";

function Shop() {
    return (
        <React.Fragment>
            <Header heading={"Shop"} subHeading={"Fresh & Delightful"} />
            <Products />
            <Footer />
        </React.Fragment>
    );
}

export default Shop;
