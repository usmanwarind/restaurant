import React from "react";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import CartItem from "../component/CartItem";
import { useSelector } from "react-redux";

function Cart() {
    const items = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    console.log(items);

    return (
        <React.Fragment>
            <Header heading={"Cart"} subHeading={""} />
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cart-heading">
                            <h3>Your Cart</h3>
                        </div>
                    </div>
                </div>
                {items.map(item => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        totalPrice={item.totalPrice}
                        img={item.img}
                    />
                ))}

                <div className="text-right">
                    <h6>Total Amount: $ {totalAmount}</h6>
                    <button className="btn btn-lg btn-primary">Proceed To Checkout</button>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Cart;
