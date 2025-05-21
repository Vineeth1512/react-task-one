import React, { useState } from 'react'
import "./App.css"
const App = () => {
const electronicsArray = [

    {id:1,name:"Laptops"},
    {id:2,name:"Smartphones"}

]
const fashionData = [

    {id:1,name:"Men's Wear"},
    {id:2,name:"WoMen's Wear"}

]
const [electronics , setElectroncis]= useState([]);
const [fashion , setFashion]= useState([]);
const [state , setState] = useState(false);

const [data ,setData]= useState([]);

const [category ,setCategory] = useState("Please Select a category");

console.log(data);




const handleElectBtn = ()=>{
    setElectroncis(electronicsArray)
    setState(true)
    setCategory("")
}

const handleFashBtn = ()=>{
    setFashion(fashionData)
    setState(false)
    setCategory("")
}

const handelAddToCart = (item)=>{

    console.log(item);
setData((pre)=> [...pre ,item])   
    
    

}



  return (
    <div>

        <div className='container-wrap'>
            <div className='left'>
            <h1>Categories</h1>
            <button onClick={handleElectBtn}>Electronics</button>
            <button onClick={handleFashBtn} >Fashions</button>

            </div>
             <div className='right'>
                <h1>Products</h1>
                <p>{category}</p>
                <h3></h3>
                {state?<>
                  <table>
                    {electronics.map((m, i)=>{
                        return <>
                        <tr key={i}>
                        <td>{m.name}</td>
                        <td><button onClick={()=>handelAddToCart(m)} >Add to Cart</button></td>
                    </tr>
                        </>
                    })}
                    
                    
                </table>
                
                </>:<>
                  <table>
                    {fashion.map((m)=>{
                        return <>
                        <tr>
                        <td>{m.name}</td>
                        <td><button  onClick={()=>handelAddToCart(m)}>Add to Cart</button></td>
                    </tr>
                        </>
                    })}
                    
                   
                </table>
                </>}
              
            </div>

            

        </div>
        <div className='container-below'>
                <h1>Cart({data.length} items)</h1>
                {data.map((m)=>{
                    return <p>{m.name}</p>

                })}


            </div>
    </div>

  )
}

export default App