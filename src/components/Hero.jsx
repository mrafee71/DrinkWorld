import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Frooty from '../assets/images/frooty.png'
import CocoCola from '../assets/images/coco-cola.png'
import AppyFizz from '../assets/images/appyFizz.png'



const Hero = () => {
  const [selectedDrink, setSelectedDrink] = useState({
    name: 'Frooty',
    image: Frooty,
    price: '$4.5',
    ingredients: 'Carbonated water, caramel color, phosphoric acid, aspartame, natural flavor, potassium benzoate (preserves freshness), acesulfame potassium, caffeine, citric acid, calcium disodium EDTA (to protect flavor).'
  });

  const drinks = [
    {
	  id: 1,
      name: 'Frooty',
      image: Frooty,
      price: '$4.5',
      ingredients: 'Carbonated water, sugar, color (caramel E150d), phosphoric acid, flavorings (including caffeine).'
    },
    {
	  id: 2,
      name: 'Coca-Cola',
      image: CocoCola,
      price: '$4.0',
      ingredients: 'Carbonated water, sugar, color (caramel E150d), phosphoric acid, flavorings (including caffeine).'
    },
    {
	  id: 3,
      name: 'Appy Fizz',
      image: AppyFizz,
      price: '$3.5',
      ingredients: 'Carbonated water, sugar, color (caramel E150d), phosphoric acid, flavorings (including caffeine).'
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
            <div className="mb-12">
                <h3 className='text-2xl font-bold uppercase mb-2'>{selectedDrink.name}</h3>
                <p className='text-md uppercase text-gray-400 mb-8'>{selectedDrink.ingredients}</p>
                <div className="text-lg text-yellow-400 font-medium flex items-center mb-8">BEST RATING <span className='ms-8 text-4xl text-white'>{selectedDrink.price}</span></div>
                <button className="bg-gray-300 text-alternate font-bold text-xl px-8 py-2 rounded-lg">ADD TO CART</button>
            </div>
			<div className='flex justify-between w-[75%] bg-secondary py-2 px-8 rounded-3xl rounded-l-none'>
				{drinks.map((drink, index) => (
					<div
						key={index}
						className={`rounded-full p-2 border-4 transition-all duration-300 ${selectedDrink.name === drink.name ? 'bg-white scale-140 border-alternate' : 'border-transparent hover:border-alternate'}`}


						onClick={() => handleDrinkSelect(drink)}
					>
						<img src={drink.image} alt={drink.name} className='w-24' />
					</div>
				))}
			</div>
        </div>
        <div className="hidden w-full lg:w-1/2 relative lg:block">
            <AnimatePresence mode="wait">
				<motion.div
					key={selectedDrink.id}
					initial={{ x: 600 }}
					animate={{ x: 0 }}
					exit={{ x: 600 }}
					transition={{ duration: 0.4, ease: "easeInOut" }}
					className="absolute right-0 bg-secondary w-80 xl:w-110 z-10 h-[100%] rounded-4xl rounded-r-none transform"
				>
					<div className="w-full h-full flex items-center relative left-15 xl:left-5 justify-center rotate-270">
                        <h2 className="text-6xl xl:text-7xl font-extrabold uppercase opacity-10 text-white">{selectedDrink.name}</h2>
                    </div>

				</motion.div>
			</AnimatePresence>
            <div className="w-full h-full relative z-20 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedDrink.id} // important for animation trigger
                    src={selectedDrink.image}
                    alt={selectedDrink.name}
                    className="w-130 h-130 object-cover rounded-lg"
                    initial={{ x: 600}}
                    animate={{ x: 0}}
                    exit={{ x: 600}}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </AnimatePresence>
            </div>
    	  </div>
    </div>
  );
}

export default Hero