import React from 'react'

const Random = ({itemRandom}) => {
    const {_id,picture,name,price} = itemRandom
  return (
    <div className="flex justify-center">
        <div
              className="card w-96  shadow-xl mb-2"
              key={_id}
            >
              <figure>
                <img src={picture} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
              </div>
            </div>
    </div>
  )
}

export default Random