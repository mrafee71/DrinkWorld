import { useState } from 'react'
import Frooty from '../assets/images/frooty.png'

const Categories = () => {

    const [activeTab, setActiveTab] = useState("Drinks");

    const tabs = ["Drinks", "Food", "At Home", "Merchandise"];

    const items = [
      {
        name: "Frooty",
        category: "Drinks",
        image: Frooty,
        desc: "Frooty is a drink that is made from fruits. It is a great way to start your day.",
        price: 20,
      },
      {
        name: "Fruit Punch",
        category: "Drinks",
        image: Frooty,
        desc: "Fruit Punch is a drink that is made from fruits. It is a great way to start your day.",
        price: 20,
      },
      {
        name: "Pepsi",
        category: "Drinks",
        image: Frooty,
        desc: "Pepsi is a drink that is made from fruits. It is a great way to start your day.",
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
                  className="relative top-12 left-[25%] w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full"
                />
                <div className='border-2 border-secondary text-white p-4 md:p-6 lg:p-8 rounded-xl rounded-br-4xl'>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mt-2">{item.name}</h3>
                  <p className="text-sm md:text-base lg:text-lg mt-2">{item.desc}</p>
                  <p className="text-md md:text-lg lg:text-xl font-bold mt-4">${item.price}</p>
                </div>
              </div>
            )
        ))}
      </div>
    </div>
  )
}

export default Categories