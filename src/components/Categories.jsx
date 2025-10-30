import { useState } from 'react'

const Categories = () => {

    const [activeTab, setActiveTab] = useState("Drinks");

    const tabs = ["Drinks", "Food", "At Home", "Merchandise"];

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
    </div>
  )
}

export default Categories