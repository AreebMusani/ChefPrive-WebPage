import React from "react";
import dish1 from "../../assets/images/dish1.png";
import dish2 from "../../assets/images/dish2.png";
import dish3 from "../../assets/images/dish3.png";
import chefImg from "../../assets/images/chefImg.png";
import { FaStar } from "react-icons/fa";

const PopularDishes = () => {
  const listOfPopularDishes = [
    {
      id: 1,
      image: dish1,
      title: "Menu Title Here",
      des: "Pick 5 out of 10 dishes",
      price: "QAR 200",
      chefPic: chefImg,
      chefName: "Marriot Head Chef",
      rating: 4.5,
    },
    {
      id: 2,
      image: dish2,
      title: "Menu Title Here",
      des: "Pick 5 out of 10 dishes",
      price: "QAR 200",
      chefPic: chefImg,
      chefName: "Marriot Head Chef",
      rating: 4.5,
    },
    {
      id: 3,
      image: dish3,
      title: "Menu Title Here",
      des: "Pick 5 out of 10 dishes",
      price: "QAR 200",
      chefPic: chefImg,
      chefName: "Marriot Head Chef",
      rating: 4.5,
    },
  ];

  return (
    <div className="w-full py-16 flex justify-center">
      <div 
      className="relative overflow-hidden w-[90%] flex flex-col sm:flex-row items-center gap-5">
        <div className="sm:bg-gradient-to-l from-white to-white-10 absolute z-10 right-0 top-0 bottom-0 w-[15%]"></div>
        <div className="flex-grow text-center sm:text-start">
          <h1 className="w-max text-4xl md:text-5xl leading-tight font-bold">
            Our Most
            <br />
            <span className="text-[#FF9E2C]">Popular Dishes</span>
            <br />
            This Month
          </h1>
          <button className="mt-6 bg-[#FF9E2C] rounded-[20px] text-white py-2 px-8">
            See all
          </button>
        </div>

        {listOfPopularDishes.map((item, index) => (
          <div className="w-auto m-4 my-8 sm:my-12 sm:min-w-72 cursor-pointer rounded-3xl overflow-hidden shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]" key={index}>
            <img className="w-full sm:w-72 h-auto sm:h-40" src={item.image} alt={item.title} />
            <div className="p-3">
              <h1 className="text-lg font-semibold">{item.title}</h1>
              <h2 className="text-sm">Pick <span className="text-[#FF9E2C]">5</span> out of <span className="text-[#FF9E2C]">10</span> dishes</h2>
              <h1 className="text-lg font-bold">{item.price}</h1>
              <div className="my-2 border-[1px] border-[#1F1F1F]/30"></div>
              <div className="flex items-center gap-3">
                <img className="w-10" src={item.chefPic} alt={item.chefName} />
                <h2 className="flex-grow">{item.chefName}</h2>
                <div className="flex items-center justify-end gap-1">
                  <FaStar color="#FF9E2C" size={20} />
                  <h2 className="font-bold">{item.rating}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDishes;
