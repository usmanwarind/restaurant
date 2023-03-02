import React from "react";
import ProductItem from "../ProductItem";

const DUMMY_PRODUCTS = [
    {
        id: "f1",
        name: "Food 1",
        price: 15,
        img: "/imgs/gallary-1.jpg",
        category: "fastfood",
    },
    {
        id: "f2",
        name: "Food 2",
        price: 11,
        img: "/imgs/gallary-2.jpg",
        category: "fastfood",
    },
    {
        id: "f3",
        name: "Food 3",
        price: 14,
        img: "/imgs/gallary-3.jpg",
        category: "fastfood",
    },
    {
        id: "f4",
        name: "Food 4",
        price: 20,
        img: "/imgs/gallary-4.jpg",
        category: "bbq",
    },
    {
        id: "f5",
        name: "Food 5",
        price: 9,
        img: "/imgs/gallary-5.jpg",
        category: "bbq",
    },
    {
        id: "f6",
        name: "Food 6",
        price: 13,
        img: "/imgs/gallary-6.jpg",
        category: "bbq",
    },
    {
        id: "f7",
        name: "Food 7",
        price: 19,
        img: "/imgs/gallary-7.jpg",
        category: "pizza",
    },
    {
        id: "f8",
        name: "Food 8",
        price: 21,
        img: "/imgs/gallary-8.jpg",
        category: "pizza",
    },
    {
        id: "f9",
        name: "Food 9",
        price: 8,
        img: "/imgs/gallary-9.jpg",
        category: "pizza",
    },
    {
        id: "f10",
        name: "Food 10",
        price: 16,
        img: "/imgs/gallary-10.jpg",
        category: "starter",
    },
    {
        id: "f11",
        name: "Food 11",
        price: 11,
        img: "/imgs/gallary-11.jpg",
        category: "starter",
    },
    {
        id: "f12",
        name: "Food 12",
        price: 10,
        img: "/imgs/gallary-12.jpg",
        category: "starter",
    },
];

export default function Gallery() {
    // const dispatch = useDispatch();

    // const onProductAdd = item => {
    //     dispatch(
    //         cartActions.addItemToCart({
    //             id: item.id,
    //             name: item.name,
    //             price: item.price,
    //             img: item.img,
    //         })
    //     );
    // };

    return (
        <>
            <div
                id="gallary"
                className="text-center bg-dark text-light has-height-md middle-items wow fadeIn"
            >
                <h2 className="section-title">OUR MENU</h2>
            </div>
            <div className="gallary row">
                {DUMMY_PRODUCTS.map(item => (
                    <ProductItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        img={item.img}
                    />
                ))}
            </div>
        </>
    );
}
