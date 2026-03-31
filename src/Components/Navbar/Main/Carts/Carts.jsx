import React, { use, useEffect, useState } from 'react';
import AvailableProducts from '../../AvailableProducts/AvailableProducts';
import SelectedCart from '../SelectedCart/SelectedCart';

const Carts = ({CartsPromise, setQuantity, selectedProducts,setSelectedProducts}) => {
    const carts = use(CartsPromise);
    
 const [selectedType, setSelectedType] = useState("available");
 console.log(selectedType,"selectedType");
 
useEffect(() => {
    setQuantity(selectedProducts.length);
  },
   [selectedProducts, setQuantity]);


    return (
        <div className='container mx-auto px-20 mb-20 bg-[#f9fafc]'>
          
<div className='text-center space-y-2 mt-20 mb-8'>
    <h3 className='font-extrabold text-[3rem]'>Premium Digital Tools</h3> 
        <p className='text-[#627382]'>
          Choose from our curated collection of premium digital products designed <br />
          to boost your productivity and creativity.
        </p>

  <div className='space-x-2 '>
    <button onClick={()=>setSelectedType("available")}
    className={`btn rounded-4xl ${selectedType=== "available" ? 
     " bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] text-white":
     "btn-outline text-black " } rounded-4xl w-20  text-white px-3 py-1 text-xs shadow`}>Products</button>

  <button onClick={()=>setSelectedType("selected")} 
   className={`btn rounded-4xl ${selectedType=== "selected" ? 
    " bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] text-white":"btn-outline text-black" } 
    rounded-4xl w-20  text- px-3 py-1 text-xs shadow`}
    >
      Cart({selectedProducts.length})</button>
   
    </div> 
</div>

  
      {selectedType === "available" ? (
        <AvailableProducts
          carts={carts}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      ) : (
        <SelectedCart
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />)
  
}

    

        </div>
    );
};

export default Carts;