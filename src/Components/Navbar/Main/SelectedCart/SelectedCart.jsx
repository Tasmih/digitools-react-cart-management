import React from 'react';
import cartImg from '../../../../assets/shopping-cart.png'
import { toast } from 'react-toastify';

const SelectedCart = ({ selectedProducts, setSelectedProducts }) => {

    
    let totalPrice = 0;

    for (let i = 0; i < selectedProducts.length; i++) {
        let product = selectedProducts[i];
        let priceWithoutDollar = product.price.replace("$", "");
        let price = Number(priceWithoutDollar);
        totalPrice = totalPrice + price;
    }

    
    const handleRemove = (id) => {
        const removedProduct = selectedProducts.find(item => item.id === id);
        
        setSelectedProducts(selectedProducts.filter(item => item.id !== id));

        if (removedProduct) {
            toast.error(removedProduct.name + " removed from cart");
        }
    };


    const handleCheckout = () => {
        toast.success("Checkout Successful! Thank you for your purchase.");
        setSelectedProducts([]);
    };

    
    if (selectedProducts.length === 0) {
        return (
            <div className='text-center py-20 px-4'>
                <img 
                    src={cartImg} 
                    alt="empty cart" 
                    className='w-28 h-28 mx-auto mb-6' 
                />
                <h3 className='text-2xl font-bold'>Your cart is empty</h3>
                <p className='text-gray-500 mt-3'>
                    Please add products from the Products section.
                </p>
            </div>
        );
    }

    return (
        <div className='px-4 md:px-6'>

            
            <div className='space-y-4'>
                {selectedProducts.map(product => (
                    <div 
                        key={product.id} 
                        className='flex flex-col sm:flex-row sm:items-center gap-4 border p-4 rounded-xl bg-white shadow-sm'
                    >
                        
                        <div className='flex items-center gap-4 flex-1'>
                            <img 
                                className='w-16 h-16 sm:w-20 sm:h-20 object-contain' 
                                src={product.icon} 
                                alt={product.name} 
                            />
                            <div className='flex-1'>
                                <h3 className='font-bold text-lg'>{product.name}</h3>
                                <p className='text-gray-600 text-base'>{product.price}</p>
                            </div>
                        </div>

                        
                        <button 
                            onClick={() => handleRemove(product.id)}
                            className='btn btn-sm bg-red-500 hover:bg-red-600 text-white px-8 py-2 
                                       w-full sm:w-auto rounded-xl'
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            
            <div className='mt-10 bg-white border-2 border-gray-200 rounded-2xl p-5 md:p-6'>
                <div className='flex flex-col sm:flex-row justify-between items-center gap-2 text-xl'>
                    <span className='font-semibold text-gray-700'>Total Price</span>
                    <span className='text-3xl md:text-4xl font-bold text-[#4f39f6]'>
                        ${totalPrice}
                    </span>
                </div>
            </div>

            
            <button 
                onClick={handleCheckout}
                className='btn bg-green-600 hover:bg-green-700 text-white 
                           w-full mt-8 py-4 text-lg font-semibold rounded-4xl'
            >
                Proceed to Checkout
            </button>

        </div>
    );
};

export default SelectedCart;