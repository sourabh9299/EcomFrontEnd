import React from "react";
import { useState } from "react";



const UpdateProduct = () => {
  const [Name, setName] = useState('')
  const [Price, setPrice] = useState('')
  const [Catogory, setCatogory] = useState('')
  const [Company, setCompany] = useState('')
  // const navigate = Navigate();
  async function addProduct() {
    const user = JSON.parse(localStorage.getItem('user'))
    const UserId = user._id;
    let result = await fetch('https://sourabhfoodapp.onrender.com/product/addProduct', {
      method: 'post',
      body: JSON.stringify({ Name, Price, Catogory, Company, UserId }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    result = await result.json()
    console.log(result)
    if (result.Name) {
      alert("Product added")
      clear();
    }
    function clear() {
      setName('');
      setPrice('');
      setCatogory('');
      setCompany('');
    }
  }
  return (
    <>
      <div className="Signup">

        <h1>Update Products</h1>
        <form action="">
          <input type="text" placeholder='Product-Title' value={Name}
            onChange={(e) => { setName(e.target.value) }}
          />
          <input type="text" placeholder='Price' value={Price}
            onChange={(e) => { setPrice(e.target.value) }}
          />
          <input type="text" placeholder='Catogory-Title' value={Catogory}
            onChange={(e) => { setCatogory(e.target.value) }}
          />
          <input type="text" placeholder='Company' value={Company}
            onChange={(e) => { setCompany(e.target.value) }}
          />


          <button type="button" onClick={addProduct}>Add</button>
        </form>
      </div>
    </>
  )
}


export default UpdateProduct;