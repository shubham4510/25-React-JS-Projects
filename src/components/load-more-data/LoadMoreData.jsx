import React, { useEffect, useState } from 'react'

const LoadMoreData = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)

    useEffect(()=>{
        fetchProducts()
    },[count])

    const fetchProducts = async () =>{
        try{
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0 ? 0 : count + 20}`)
            const result = await response.json();
            if(result && result.products && result.products.length){
                setProducts(prevData => [...prevData,...result.products])
                setLoading(false)
            }
            console.log(result.products);
        }catch(e){
            console.log(e);
            setLoading(false)
        }
    }

    if(loading){
        return <div>Loading data ! Please wait.</div>
    }

  return (
    <div className='wrap'>
     <div className='product-container'>
        {
            (products && products.length )? products.map(item => <div className='product' key={item.id}>
                <img src={item.thumbnail} alt={item.title}/>
                <p>{item.title}</p>
            </div>):null
        }
        </div>
        <div className="btn-container">
        <button onClick={() => setCount(count+1)}>Load</button>
        </div>
    </div>
       
  )
}

export default LoadMoreData