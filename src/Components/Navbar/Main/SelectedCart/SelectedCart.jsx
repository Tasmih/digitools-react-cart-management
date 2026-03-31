import React from 'react';
import cartImg from '../../../../assets/shopping-cart.png'

const SelectedCart = ({ selectedProducts, setSelectedProducts }) => {
    
    const handleRemove = (id) => {
        const updated = selectedProducts.filter(item => item.id !== id);
        setSelectedProducts(updated);
    };

    
    const handleCheckout = () => {
        setSelectedProducts([]);
    };

    if (selectedProducts.length === 0) {
        return (
            <div className='text-center items-center py-10'>
                
                    <img src={cartImg}    />
                
                <h3 className='text-xl font-bold'>Your cart is empty</h3>
                <p className='text-gray-500 mt-2'>
                    Please add products to your cart
                </p>
            </div>
        );
    }

    return (
        <div className='flex flex-col gap-4'>
            {selectedProducts.map(product => (
                <div key={product.id} className='flex items-center justify-between border p-4 rounded-lg'>
                    <div className='flex items-center gap-4'>
                        <img className='w-16 h-16' src={product.icon} alt={product.name} />
                        <div>
                            <h3 className='font-bold text-lg'>{product.name}</h3>
                            <p className='text-gray-500'>{product.price}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => handleRemove(product.id)}
                        className='btn btn-sm bg-red-500 text-white rounded-xl'
                    >
                        Remove
                    </button>
                </div>
            ))}

            

            {/* btn for Checkout  */}
            <button
                onClick={handleCheckout}
                className='btn bg-green-500 text-white rounded-4xl w-full mt-4 self-end'
            >
                Proceed to Checkout
            </button>
        </div>
    );
};

export default SelectedCart;