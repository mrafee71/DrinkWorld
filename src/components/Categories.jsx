import { useState } from 'react'
import Frooty from '../assets/images/frooty.png'
import FantaPineapple from '../assets/images/fanta-pineapple.png'
import CocoCola from '../assets/images/coco-cola.png'
import StarRating from '../utils/StarRating'


const Categories = () => {

    const [activeTab, setActiveTab] = useState("Drinks");

    const tabs = ["Drinks", "Food", "At Home", "Merchandise"];

    const items = [
      {
        name: "Frooty",
        category: "Drinks",
        image: Frooty,
        flavor: "Mango",
        ratings: 3,
        price: 20,
      },
      {
        name: "Fanta",
        category: "Drinks",
        image: FantaPineapple,
        flavor: "Pineapple",
        ratings: 4.5,
        price: 20,
      },
      {
        name: "Coca-Cola",
        category: "Drinks",
        image: CocoCola,
        flavor: "Cola",
        ratings: 4.5,
        price: 20,
      }
    ]

  return (
    <div className='p-6 md:p-12 lg:p-24'>
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center bg-secondary rounded-br-[6rem] rounded-tl-2xl w-fit mx-auto">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab;
          const isFirst = index === 0;
          const isLast = index === tabs.length - 1;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2 md:px-8 md:py-4 lg:px-12 rounded-br-[6rem] rounded-tl-2xl border-r-2 border-primary font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-white text-secondary"
                  : "bg-secondary text-white hover:bg-primary"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          );
        })}
      </div>
      <div className="mt-8 flex flex-wrap justify-center items-center gap-2">
        {items.map((item) => (
            item.category === activeTab && (
              <div
                key={item.name}
                className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center justify-center border-2 border-primary rounded-2xl transition-all duration-200 text-secondary"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="relative top-12 left-[25%] w-32 h-32 lg:w-48 lg:h-48 rounded-full hover:rotate-12 transition-all duration-200"
                />
                <div className='w-full bg-[url("./assets/images/product-bg.png")] border-2 border-secondary text-primary p-4 md:p-6 lg:p-8 rounded-xl rounded-br-4xl h-full'>
                  <h3 className="text-special text-lg md:text-xl lg:text-2xl font-bold mt-2">{item.name}</h3>
                  <p className="text-sm md:text-base lg:text-md mt-2"><b>Flavor:</b> {item.flavor}</p>
                  <p className="flex text-sm mt-2">
                    <StarRating rating={item.ratings} />
                    <span className="text-xs font-bold ml-2">{item.ratings} / 5</span>
                  </p>
                  <p className="text-special text-md md:text-lg lg:text-xl font-bold mt-2 mb-4">Price: ${item.price}</p>
                </div>
                <button className='relative bottom-6 lg:bottom-8 bg-white text-secondary border-2 border-transparent hover:bg-primary hover:text-white hover:border-white font-bold py-3 lg:py-3 px-6 md:px-8 xl:px-6 rounded-4xl cursor-pointer'>Add To Cart</button>
              </div>
            )
        ))}
      </div>
    </div>
  )
}

export default Categories