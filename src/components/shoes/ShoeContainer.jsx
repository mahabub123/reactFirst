import React,{useState,useEffect} from 'react'
import Cart from '../cart/Cart'
import Random from '../random/Random'
import ShoeList from './ShoeList'

const ShoeContainer = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    const [itemRandom,setItemRandom] = useState({})
    const [isShow,setShow] = useState(false)

  useEffect(()=>{
    const getData = async() =>{
      const res = await fetch(`products.json`)
      const data = await res.json()
      setProducts(data)
    }
    getData()
  },[])

  const handleCart = product=>{
    const newCart = [...cart, product]
    setCart(newCart)
  }

  const randomItem = () => {
    const random = products[Math.floor(Math.random() * products.length)]
    setItemRandom(random)
    setShow(true)
  }
  const chooseItem = () => {
    setItemRandom([])
    setShow(false)
  }
  return (
    <>
        <div className="lg:grid grid-cols-4">
            <div className="col-span-3 mb-8 bg-slate-400 lg:ml-4 p-5">
                <div className="grid lg:grid-cols-3 gap-4">
                    {
                        products.map(product =>(
                            <ShoeList key={product._id} product={product} handleCart={handleCart}/>
                        ))
                    }
                </div>
            </div>
            <div className="p-5">
                <Cart cart={cart}/>
                <div className="flex justify-center"><button className="btn btn-outline btn-sm mb-5" onClick={randomItem}>choose 1 for me</button></div>
                {isShow && <Random itemRandom={itemRandom}/>}
                <div className="flex justify-center"><button className="btn btn-outline btn-sm mt-5" onClick={chooseItem}>choose Again</button></div>
            </div>
        </div>
    </>
  )
}

export default ShoeContainer