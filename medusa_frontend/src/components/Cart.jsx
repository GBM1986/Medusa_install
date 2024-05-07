import React, { useEffect } from 'react'
import { useCart } from 'medusa-react'

export const Cart = () => {

  

    const { cart, createCart } = useCart();

    useEffect(() => {
        createCart.mutate({});
        console.log("Cart Created")
    },[])

    console.log(cart)

  return (
    <div>
      Cart
    </div>
  )
}

