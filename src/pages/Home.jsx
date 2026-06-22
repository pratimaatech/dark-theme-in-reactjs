import {useState, useEffect} from 'react'

export const Home = () => {

  const [products, setProduct] = useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=> setProduct(data))
    .catch((error)=> console.log(error))
  },[])

  return (
    <>
    <div className='container mx-auto p-5'>
      <h3 className='text-3xl text-bold mb-5 '>Product</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-contain"
            />

            <h2 className="font-bold mt-3">
              {item.title.slice(0, 30)}...
            </h2>

            <p className="text-green-600 font-bold mt-2">
              ₹ {item.price}
            </p>

            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
              View Product
            </button>
          </div>
        ))}
      </div>

    </div>

    
    </>
  )
}
