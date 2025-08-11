import { useState } from 'react';
import { RiDeleteBin5Fill } from "react-icons/ri";
import Frooty from '../assets/images/frooty.png';

const CartContents = () => {

    // Sample cart items
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Pepsi Zero Sugar",
            size: "M",
            color: "Red",
            price: 29.99,
            quantity: 2,
            Image: Frooty,
        }
    ]);

  return (
    <div>
        {
            cartItems.map((item, index) => (
                <div key={index} className="flex items-start justify-between py-4 border-b border-gray-200 text-primary">
                    <div className="flex items-center">
                        <img src={item.Image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                        <div>
                            <h3>
                                {item.name}
                            </h3>
                            <div className='flex items-center mt-2'>
                                <button 
                                    onClick={() => {
                                        if (item.quantity > 1) {
                                            setCartItems(cartItems.map((i) => {
                                                if (i.id === item.id) {
                                                    return { ...i, quantity: i.quantity - 1 };
                                                }
                                                return i;
                                            }));
                                        }
                                    }}
                                    disabled={item.quantity === 1}
                                    className={`border border-gray-200 rounded px-2.5 py-0.5 text-xl font-medium ${item.quantity === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                >
                                    -
                                </button>
                                <span className='mx-4 text-lg'>{item.quantity}</span>
                                <button 
                                    onClick={() => {
                                        setCartItems(cartItems.map((i) => {
                                            if (i.id === item.id) {
                                                return { ...i, quantity: i.quantity + 1 };
                                            }
                                            return i;
                                        }));
                                    }}
                                    className='border border-gray-200 rounded px-2.5 py-0.5 text-xl font-medium cursor-pointer'
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                            ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button>
                            <RiDeleteBin5Fill 
                                onClick={() => {
                                    setCartItems(cartItems.filter((i) => i.id !== item.id));
                                }}
                                className='h-5 w-5 mt-2 text-red-600 cursor-pointer' />
                        </button>
                    </div>
                </div>
            ))
        }

    </div>
  )
}

export default CartContents