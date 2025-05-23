
import React, { useState } from 'react'
import "./App.css"

const App = () => {

  const electronicsData = [
    {name:"LapTops"},
    {name:"Smartphones"}
  ]

  const fashionsData = [
    {name:"Men's ware"},
    {name:"Women's ware"}
  ]

  const [product , setProduct] = useState([]);
  const [category , setCategory] = useState("Please select category");

  const [cart , setCart] = useState([]);

  const handleData = (item)=>{
    setProduct(item)
    setCategory("")


  }

  const  hadleAddToCartBtn =(item)=>{
    console.log(item);
    setCart((pre)=>[...pre ,item])
    
  }

  return (
    <div>

      <div className='container-wrap'>
        <div className='left'>
          <h1>Category</h1>
          <button onClick={()=>handleData(electronicsData)}>Electronics</button>
          <button onClick={()=>handleData(fashionsData)}>Fashions</button>
        </div>
        <div className='right'>
          <h1>Products</h1>
          {category}
          {product.length>0 && (
            <table>
              {product.map((p,i)=>{
                return<>
                <tr key={i}>
                  <td>{p.name}</td>
                  <td> <button onClick={()=>hadleAddToCartBtn(p)}>Add to cart</button></td>
                </tr>
                </>
              })}
            </table>
          )}

        </div>
      </div>
      <div className='container-below'>
        <h1>Cart({cart.length} items)</h1>

        {cart.map((c)=>{
          return<>
          <p>{c.name}</p>
          </>
        })}


      </div>
    </div>
  )
}

export default App