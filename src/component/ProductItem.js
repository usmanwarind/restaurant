import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { useNavigate } from "react-router-dom";

function ProductItem(props) {
    const dispatch = useDispatch();
    const { id, name, price, img } = props;
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const onProductAdd = e => {
        e.preventDefault();

        if (!isLoggedIn) {
            navigate("/auth");
        } else {
            dispatch(
                cartActions.addItemToCart({
                    id,
                    name,
                    price,
                    img,
                })
            );
        }
    };

    return (
        <React.Fragment>
            <div className="col-lg-3 mb-4">
                <div className="product-wrapper">
                    <div className="productOverlay"></div>
                    <div className="product_img">
                        <img src={img} alt="" />
                    </div>
                    <div className="product-detail">
                        <p className="productTitle prod-detail">{name}</p>
                        <p className="ProductPrice prod-detail">$ {price}</p>
                        <button className="prod-detail productBtn" onClick={onProductAdd}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductItem;
