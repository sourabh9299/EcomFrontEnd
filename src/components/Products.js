import React, { useEffect, useState } from 'react'
import '../App.css'

const Productslist = () => {
    const [Product, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/product/');
        result = await result.json();
        setProducts(result);
    }

    console.log("Products", Product);

    return (
        <div className='Box-styling1'>
            <h1 className='my-product'>All Products</h1>
            <ul className='ul-Styling'>
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Catogory</li>
                <li>Company</li>
            </ul>
            {
                Product.map((item, index) =>

                    <ul className='ul-Styling'>
                        <li>{index + 1}.</li>
                        <li>{item.Name}</li>
                        <li>{item.Price}</li>
                        <li>{item.Catogory}</li>
                        <li>{item.Company}</li>
                    </ul>

                )
            }
        </div>

    )
}

export default Productslist