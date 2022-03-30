import React from "react";

const ShoeList = ({product,handleCart}) => {
    const {picture,name,price} = product;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={() =>handleCart(product)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoeList;
