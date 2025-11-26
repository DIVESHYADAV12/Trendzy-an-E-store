import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="pt-32 px-6 md:px-20 lg:px-40 pb-20 min-h-screen bg-gray-100">

      <h1 className="text-3xl font-semibold mb-8">Your Cart</h1>

      {/* If cart empty */}
      {cartItems.length === 0 ? (
        <div className="text-center mt-20 text-xl text-gray-600">
          Your cart is empty 😕
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT — Cart Items */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow p-6 space-y-6">

            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 border-b pb-6 last:border-none"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-28 h-28 object-cover rounded-lg shadow-sm"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-medium">{item.name}</h2>
                  <p className="text-gray-600 text-sm mt-1">{item.category}</p>

                  <div className="flex items-center mt-4 gap-5">

                    <p className="text-lg font-semibold">₹{item.price}</p>

                    {/* Quantity UI */}
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button className="px-3 py-1 bg-gray-200">-</button>
                      <span className="px-4 py-1">1</span>
                      <button className="px-3 py-1 bg-gray-200">+</button>
                    </div>

                  </div>
                </div>

                {/* REMOVE BUTTON */}
                <button className="text-red-500 hover:text-red-700 font-medium">
                  Remove
                </button>
              </div>
            ))}

          </div>

          {/* RIGHT — PRICE SUMMARY */}
          <div className="bg-white rounded-xl shadow p-6 h-fit">
            <h2 className="text-xl font-semibold mb-6">Price Details</h2>

            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between">
                <p>Price ({cartItems.length} items)</p>
                <p>₹{cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
              </div>

              <div className="flex justify-between">
                <p>Delivery Charges</p>
                <p className="text-green-600 font-medium">FREE</p>
              </div>

              <hr />

              <div className="flex justify-between text-lg font-semibold">
                <p>Total Amount</p>
                <p>₹{cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
              </div>
            </div>

            <button className="w-full mt-8 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">
              Proceed to Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;
