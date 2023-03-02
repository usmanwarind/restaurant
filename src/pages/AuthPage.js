import React from "react";
import AuthForm from "../component/AuthForm";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";

function AuthPage() {
    return (
        <React.Fragment>
            <Header heading="Login / Sign Up" />
            <div className="container my-4">
                <div className="row">
                    <div className="col-lg-12">
                        <AuthForm />
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default AuthPage;
