import React from "react";
import Header from "../component/header/Header";
import AboutUs from "../component/aboutus/AboutUs";
import Gallery from "../component/gallery/Gallery";
import Table from "../component/table-book/Table";
import Blog from "../component/blog/Blog";
import Review from "../component/review/Review";
import Contact from "../component/footer/Footer";
import Footer from "../component/footer/Footer";

function HomePage() {
    return (
        <React.Fragment>
            <Header heading={"Hot Food"} subHeading={"Fresh & Delightful"} />
            <AboutUs />
            <Gallery />
            <Table />
            <Blog />
            <Review />
            <Footer />
        </React.Fragment>
    );
}

export default HomePage;
