import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductDetails } from "../Context/Product";
import { ShoppingCart } from "lucide-react";

const ProductDescrip = () => {
  const { category,id } = useParams();              // Read ID from the URL
  const { him, her, kid } = useContext(ProductDetails);

  const productId= Number(id)

  let productList = [];

  if (category === "men") productList = him;
  if (category === "women") productList = her;
  if (category === "kid") productList = kid;

  const product = productList.find(item => item.id === productId);


  if (!product) {
    return <h1 className="text-center text-4xl py-50">Product Not Found</h1>
  }

  return (
    <div className="p-10 flex gap-10 pt-30">
      <img
        src={product.Img}
        alt={product.Name}
        className="w-120 h-120 object-cover rounded"
      />

      <div className="justify-center flex flex-col">
      <p className="text-sm text-gray-500 uppercase tracking-wide py-4">
              Online Exclusive
            </p>
        <h1 className="text-3xl font-bold">{product.Name}</h1>
        <h2 className="text-2xl text-gray-700 mt-3">₹{product.Price}</h2>
        <p className="mt-5 text-gray-600 text-lg" >
          {product.Description}
        </p>
         {/* Variation Example */}
         <div className="mt-4 md:mt-6">
              <p className="text-gray-700 text-lg font-medium">Variation</p>
              <div className="flex gap-2 md:gap-3 mt-2 overflow-x-auto">
                <img
                  src={product.Img}
                  alt="variation"
                  className="w-16 h-16 md:w-14 md:h-14 border p-1 cursor-pointer hover:border-black shrink-0"
                />
                <img
                  src={product.Img}
                  alt="variation"
                  className="w-16 h-16 md:w-14 md:h-14 border p-1 cursor-pointer hover:border-black shrink-0"
                />
              </div>
            </div>
        <button className="mt-20 bg-black text-white px-7 py-4 w-[40vw] rounded text-lg active:scale-95 transition-transform flex justify-center items-center gap-4">
        <ShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductDescrip;