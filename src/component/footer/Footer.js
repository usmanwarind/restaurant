import React from "react";

export default function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark text-light has-height-md middle-items border-top text-center wow fadeIn">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-12">
                        <h3>EMAIL US</h3>
                        <p className="text-muted">contact@genicpixels.com</p>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-light text-center border-top wow fadeIn">
                <p className="mb-0 py-3 text-muted small">
                    &copy; Copyright By <a href="http://genicpixels.com/">Genic Pixels</a>
                </p>
            </div>
        </>
    );
}
