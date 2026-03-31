import React from 'react';
import Cart from '../../Ui/Cart/Cart';

const AvailableProducts = ({carts, selectedProducts, setSelectedProducts}) => {
    console.log(carts,"Carts");
    return (
          <div >
            <div className='grid md:grid-cols-3 gap-4'>
           {carts.map(cart => (
          <Cart 
            key={cart.id} 
            cart={cart} 
            selectedProducts={selectedProducts}       
            setSelectedProducts={setSelectedProducts} 
          />
        ))}
      </div>
    </div>
    );
};

export default AvailableProducts;