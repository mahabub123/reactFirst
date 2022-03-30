import React from "react";

const Cart = ({ cart }) => {
  const { picture, name, price } = cart;
  if (cart.length > 3) {
    return (
      <>
        <h2 className="mb-3 font-bold text-xl text-center">Selected Shoes</h2>
        <div className="alert alert-warning shadow-lg mb-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>You cannot add 4 items here</span>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2 className="mb-3 font-bold text-xl text-center">Selected Shoes</h2>
        <div className="flex flex-col">
          {cart.map((product) => (
            <div
              className="card w-96 bg-pink-300 shadow-xl mb-2"
              key={product._id}
            >
              <figure>
                <img src={product.picture} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Cart;
