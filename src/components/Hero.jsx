import React, { useState } from 'react'
import PepsiZeroSugar from '../assets/images/pepsi-zero-sugar.png'


const Hero = () => {
  const [selectedDrink, setSelectedDrink] = useState({
    name: 'Pepsi Zero Sugar',
    image: PepsiZeroSugar,
    price: '$4.5',
    ingredients: 'Carbonated water, caramel color, phosphoric acid, aspartame, natural flavor, potassium benzoate (preserves freshness), acesulfame potassium, caffeine, citric acid, calcium disodium EDTA (to protect flavor).'
  });

  const drinks = [
    {
      name: 'Pepsi Zero Sugar',
      image: PepsiZeroSugar,
      price: '$4.5',
      ingredients: 'Carbonated water, caramel color, phosphoric acid, aspartame, natural flavor, potassium benzoate (preserves freshness), acesulfame potassium, caffeine, citric acid, calcium disodium EDTA (to protect flavor).'
    },
    {
      name: 'Coca-Cola',
      image: 'coca-cola.jpg',
      price: '$4.0',
      ingredients: 'Carbonated water, sugar, color (caramel E150d), phosphoric acid, flavorings (including caffeine).'
    },
    {
      name: 'Sprite',
      image: 'sprite.jpg',
      price: '$3.5',
      ingredients: 'Carbonated water, sugar, citric acid, natural flavors, sodium citrate, sodium benzoate (preserves freshness).'
    }
  ];

  const handleDrinkSelect = (drink) => {
    setSelectedDrink(drink);
  };

  return (
    <div className='flex flex-col lg:flex-row py-12 md:py-20 ps-2 sm:ps-4 md:ps-8 lg:ps-12 xl:ps-16'>
        <div className='w-full lg:w-1/2'>
            <h2 className='text-lg md:text-2xl text-gray-500 font-medium'>WHERE EVERY CUP TELLS A STORY.</h2>
            <h2 className='text-6xl font-bold mb-4 md:mb-6'>WHAT'S <span className='text-alternate'>YOURS?</span></h2>
            <div className="mb-8">
                <h3 className='text-2xl font-bold uppercase mb-2'>{selectedDrink.name}</h3>
                <p className='text-md uppercase text-gray-400 mb-8'>{selectedDrink.ingredients}</p>
                <div className="text-lg text-yellow-400 font-medium flex items-center mb-8">BEST RATING <span className='ms-8 text-4xl text-white'>{selectedDrink.price}</span></div>
                <button className="bg-gray-300 text-alternate font-bold text-xl px-8 py-2 rounded-lg">ADD TO CART</button>
            </div>
        </div>
        {
            drinks.map((drink, index) => (
                <div className={`hidden w-full lg:w-1/2 relative ${selectedDrink.name === drink.name ? 'lg:block translate-x-0' : 'translate-x-full'}`}>
                    <div className="absolute right-0 bg-secondary w-80 xl:w-110 z-10 h-[100%] rounded-lg rounded-r-none transform">
                    </div>
                    <div className="w-full h-full relative z-20">
                        <img src={drink.image} alt={drink.name} className="w-130 h-130 object-cover rounded-lg" />
                    </div>
                </div>
            ))
        }
    </div>
  );
}

export default Hero

// {drinks.map((drink, index) => (
//             <div
//                 key={index}
//                 className={`drink-option ${selectedDrink.name === drink.name ? 'selected' : ''}`}
//                 onClick={() => handleDrinkSelect(drink)}
//             >
//                 <img src={drink.image} alt={drink.name} />
//             </div>
//             ))}