import React, { useState, useEffect, useMemo } from "react";
import ProductItem from "./ProductItem";

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

function Products() {
    const [productList, setProductList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [price, setPrice] = useState(5);

    // Add default value on page load
    useEffect(() => {
        setProductList(DUMMY_PRODUCTS);
    }, []);

    // Function to get filtered list
    function getFilteredList() {
        // Avoid filter when selectedCategory is null
        if (!selectedCategory) {
            return productList;
        }
        return productList.filter(product => product.category === selectedCategory);
    }

    // Avoid duplicate function calls with useMemo
    const filteredList = useMemo(getFilteredList, [selectedCategory, productList]);

    const handleCategoryChange = e => {
        setSelectedCategory(e.target.value);
    };

    // const filteredByPrice = filteredList.filter(
    //     itemPrice => itemPrice.price <= parseInt(price, 10)
    // );

    // const filteredByPrice = filteredList;

    // const handleInput = e => {
    //     setPrice(e.target.value);
    // };

    return (
        <React.Fragment>
            <div className="container-fluid mt-5">
                <div className="row">
                    {/* <div className="col-lg-2">
                        <h4>Search By Price:</h4>
                        <input type="range" min={0} max={30} onInput={handleInput} />
                        <p>Price: $ {price}</p>
                    </div> */}

                    <div className="col-lg-12">
                        <div className="cat-select mb-2">
                            <h4>Select by Category:</h4>
                            <select
                                name="category-list"
                                id="category-list"
                                onChange={handleCategoryChange}
                            >
                                <option value="">All</option>
                                <option value="fastfood">Fast Food</option>
                                <option value="bbq">BBQ</option>
                                <option value="pizza">Pizza</option>
                                <option value="starter">Starter</option>
                            </select>
                        </div>
                        <div className="row">
                            {filteredList.map(product => (
                                <ProductItem
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    img={product.img}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Products;
