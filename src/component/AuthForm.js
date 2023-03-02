import axios from "axios";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/auth-slice";

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);

    const dispatch = useDispatch();

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const navigate = useNavigate();

    const API_KEY = "AIzaSyDa1lccniZgtYeWF_Wmu3UrfGRxWvcwit8";

    const onAccountHandler = () => {
        setIsLogin(!isLogin);
    };

    const submitHandler = async e => {
        e.preventDefault();
        let url;

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        if (isLogin) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
        } else {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
        }

        try {
            const response = await axios.post(url, {
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            });

            const expirationTime = new Date(new Date().getTime() + +response.data.expiresIn * 1000);

            console.log("Expiration Time", expirationTime);
            console.log("Expiration Time TO String", expirationTime.toString());

            dispatch(
                authActions.login({
                    token: response.data.idToken,
                    expirationTime: expirationTime.toISOString(),
                })
            );
            navigate("/");
        } catch (error) {
            alert(error);
        }
    };

    return (
        <section className="auth-section">
            <div>
                <h4 className="text-center mb-4">{isLogin ? "Login" : "SignUp"}</h4>
            </div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        ref={emailInputRef}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        ref={passwordInputRef}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    {isLogin ? "Login" : "Sign Up"}
                </button>
            </form>
            <div className="text-center my-4">
                <button className="sign-btn" onClick={onAccountHandler}>
                    {isLogin ? "Create New Account" : "Already have an account? Login"}
                </button>
            </div>
        </section>
    );
}

export default AuthForm;
