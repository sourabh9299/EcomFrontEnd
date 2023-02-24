import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

const Productslist = () => {
    const [Product, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        // let result = await fetch('http://localhost:5000/product/');
        let result = await fetch('https://myecom.onrender.com/product/');
        result = await result.json();
        setProducts(result);
    }

    async function Deletefn(id) {
        let data = await fetch(`https://myecom.onrender.com/product/${id}`, {
            method: "Delete"
        });
        data = data.json();
        if (data) {
            getProducts();
        }
    }

    return (
        <div className='Box-styling1'>
            <h1 className='my-product'>All Products</h1>
            <ul className='ul-Styling'>
                <li>S.No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Catogory</li>
                <li> Update / Delete </li>
            </ul>

            {
                Product.length >= 1 ?
                    Product.map((item, index) => {
                        return (
                            <ul className='ul-Styling' key={item._id}>
                                <li>{index + 1}</li>
                                <li>{item.Name}</li>
                                <li>{item.Price}</li>
                                <li>{item.Catogory}</li>
                                <li>
                                    <button><Link to={'/update/' + item._id}> Update</Link></button>

                                    <button onClick={() => Deletefn(item._id)}>Delete</button>
                                </li>

                            </ul>
                        )
                    })
                    : <h1> Loading</h1>
            }
        </div>
    )
}

export default Productslist