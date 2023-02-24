import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [Name, setName] = useState('')
  const [Price, setPrice] = useState('')
  const [Catogory, setCatogory] = useState('')
  const [Company, setCompany] = useState('')
  const params = useParams();

  useEffect(() => {
    getProductDetails();
  });

  const getProductDetails = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json()
  }
  
  

  async function update_Prodcut() {
    console.log(Name, Price, Catogory, Company)

  }
  return (

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


        <button type="button" onClick={update_Prodcut}>Add</button>
        </form>
      </div>

  )
}


export default UpdateProduct;