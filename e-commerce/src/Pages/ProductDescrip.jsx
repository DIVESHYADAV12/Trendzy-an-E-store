import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductDeatils } from "../Context/Product";

const ProductDescrip = () => {
  const { id } = useParams();              // Read ID from the URL
  const { him } = useContext(ProductDeatils);

  // Convert id from string → number
  const product = him.find(item => item.id === Number(id));

  if (!product) {
    return <h1 className="text-center text-2xl">Product Not Found</h1>
  }

  return (
    <div className="p-10 flex gap-10">
      <img
        src={product.Img}
        alt={product.Name}
        className="w-80 h-80 object-cover rounded"
      />

      <div>
        <h1 className="text-3xl font-bold">{product.Name}</h1>
        <h2 className="text-2xl text-gray-700 mt-3">₹{product.Price}</h2>
        <p className="mt-5 text-gray-600">
          High quality product for men. Best in class fabric and comfort.
        </p>

        <button className="mt-7 bg-black text-white px-5 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDescrip;