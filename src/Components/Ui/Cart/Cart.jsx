import React, { useState } from 'react';
import checkImg from '../../../assets/shopping-cart.png'
import { toast } from 'react-toastify';

const Cart = ({cart,selectedProducts,setSelectedProducts}) => {
    const [isAdded,setIsAdded ] = useState(false);
    const handleAddedCart =()=>{
          if (!isAdded) {
      setSelectedProducts([...selectedProducts, cart]) // selected added
      setIsAdded(true); // btn disable
      
      toast.success (`${cart.name} added to cart!`)
    }
    }
    return (
        <div>
            <div className='border rounded-lg border-gray-200 p-2 shadow-sm relative space-y-2 h-full w-full'>
                <button className= {`btn rounded-2xl text-left absolute top-5 right-5
                ${cart.tag==="best seller" ? 'bg-[#fef3c6] text-[#bb4d00]'
                : cart.tag==="popular" ? 'bg-[#e1e7ff] text-[#4f39f6]'
                : cart.tag=== "new" ? 'bg-[#dbfce7] text-[#0a883e]' :"" }`
            }
                >{cart.tag}</button>
              <img className='mt-10 w-16 h-16' src={cart.icon} alt={cart.name} />
                <h3 className='font-extrabold text-2xl '>{cart.name}</h3>
                <p className='text-[#627382]'>{cart.description}</p>
                <p>{cart.price}</p>
                  <div>
                   {
                    cart.features.map((feature, index) => (
                       
                        <p key={index} className='flex items-center gap-2'>
                             <img src={checkImg} alt="" />
                            {feature}
                        </p>
                    ))
                   }
                </div>
 <button
            onClick= {handleAddedCart}
            disabled={isAdded}
            className={`btn btn-active rounded-4xl text-white w-full 
            ${isAdded 
            ? 'bg-green-500 cursor-not-allowed'   //button  color will trun green when clicked
             : 'bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] hover:from-[#6b55ff] hover:to-[#9c8fff]' // initial blue
            }`}
>
  {isAdded ? 'Added to Cart' : 'Buy Now'}
</button>
            </div> 
        </div>
    );
};
 
        

export default Cart;