import React from 'react';
import { product } from '../product';

function Description() {
  return (
    <div className='description'>
        {product.description}
    </div>
  )
}

export default Description