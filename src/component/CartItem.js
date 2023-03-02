import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

function CartItem(props) {
    const dispatch = useDispatch();

    const onAddHandler = () => {
        dispatch(
            cartActions.addItemToCart({
                id: props.id,
                name: props.name,
                price: props.price,
                img: props.img,
            })
        );
    };

    const onSubtractHandler = () => {
        dispatch(cartActions.removeItemFromCart(props.id));
    };

    return (
        <div className="row mb-4">
            <div className="col-lg-12">
                <div className="cartWrapper">
                    <div className="singleCart">
                        <div className="cartImg">
                            <img src={props.img} alt="" width={80} />
                        </div>
                        <div className="cart-quantity">
                            <button
                                className="cart-quantity-btn cart-quantity-minus"
                                onClick={onSubtractHandler}
                            >
                                -
                            </button>
                            <p className="cart-quantity-text">{props.quantity}</p>
                            <button
                                className="cart-quantity-btn cart-quantity-add"
                                onClick={onAddHandler}
                            >
                                +
                            </button>
                        </div>
                        <div className="cart-title">
                            <h6>{props.name}</h6>
                        </div>
                        <div className="cart-price">$ {props.totalPrice}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
