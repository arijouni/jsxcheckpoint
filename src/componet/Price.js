import React from 'react'
import { product } from '../product'

function Price() {
  return (
    <div className='prix' >
        <span style={{ fontWeight: "bold",color:"red"}}>
            
        </span>
       price : {product.price}£
    </div>
  )
}

export default Price