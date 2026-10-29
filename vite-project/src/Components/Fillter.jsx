import React from 'react'

const Fillter = () => {
    const product = [
        { id: 1, name: "Iphone", category: "Mobile", price: 1000 },
        { id: 2, name: "hp", category: "Laptop", price: 2000 },
        { id: 3, name: "Samsung", category: "Mobile", price: 1500 },
        { id: 4, name: "Dell", category: "Laptop", price: 2500 },
        { id: 5, name: "OnePlus", category: "Mobile", price: 1200 },
    ];
    const filterProduct = product.filter((data) => data.category == "Laptop");
    console.log(filterProduct);

    return (
        <div>

            <h1>Filter Product</h1>
            {filterProduct.map((data) => (
                <div key={data.id}>
                    <h2>Name : {data.name}</h2>
                    <p>Price : {data.price}</p>
                    <p>Category : {data.category}</p>
                </div>

            ))}
        </div>
    )
}

export default Fillter
