import React from "react";
import chef from "../../assets/images/chef.png";
import Birthday from "../../assets/images/Birthday.png";
import Events from "../../assets/images/Events.png";
import Desserts from "../../assets/images/Desserts.png";
import food from "../../assets/images/explore-food.png";

const Categories = () => {
  const categoriesList = [
    { name: "Explore Food", url: food, height: "200px" },
    { name: "Master Chefs", url: chef, height: "100px" },
    { name: "Desserts", url: Desserts, height: "100px" },
    { name: "Events", url: Events, height: "100px" },
    { name: "Birthdays", url: Birthday, height: "100px" },
  ];

  return (
    <div className="w-full bg-[#F8F8F8] py-10 flex justify-center">
      <div className="w-[90%]">
        <div className="flex items-center mb-5 gap-5">
          <div className="w-10 border-2 border-black"></div>
          <h1 className="text-2xl font-bold">
            Browse by <span className="text-[#FF9E2C]">Categories</span>
          </h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {categoriesList.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer bg-no-repeat rounded-xl h-[200px] overflow-hidden relative ${
                index === 0 && "row-span-2 col-span-2 h-[400px] lg:h-auto"
              }`}
              // style={index === 0 ? {backgroundImage: `url(${item.url})`} : {}}
              style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)),url(${item.url})`, backgroundSize: 'cover' }}
            >
              {/* {index !== 0 && <img className='w-full h-full' src={item.url} alt="chef" />} */}
              <div className="absolute bottom-0 p-4 left-0 right-0">
                <h1 className="text-xl text-white font-bold text-center">
                  {item.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
