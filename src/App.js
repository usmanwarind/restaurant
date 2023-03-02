import "./App.css";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { authActions } from "./store/auth-slice";

function App() {
    const dispatch = useDispatch();
    const getStoredtoken = localStorage.getItem("token");
    useEffect(() => {
        if (getStoredtoken) {
            dispatch(authActions.checkAuth(getStoredtoken));
        }
    }, []);

    return (
        <>
            <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
}

export default App;
