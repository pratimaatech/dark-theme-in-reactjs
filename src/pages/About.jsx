import { useState, useEffect } from "react";

export const About = () => {
  const [products, setProduct] = useState([]);
  const [limit, setLimit] = useState(9);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.products))

      .catch((error) => console.log(error));
  }, [limit]);
  return (
    <>
      <div className="container mx-auto p-5">
        <h1 className="text-3xl font-bold mb-5">Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 shadow">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-40 w-full object-cover rounded"
              />

              <h2 className="font-bold mt-3">{item.title}</h2>

              <p className="text-green-600 font-bold">₹ {item.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setLimit(limit + 9)}
            className="bg-blue-500 text-white px-5 py-2 rounded cursor-progress"
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};
