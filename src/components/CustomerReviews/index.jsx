import React from "react";
import userImg from '../../assets/images/customerPic.png'
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomerReviews = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  const reviews = [
    {
      id: 1,
      name: "William Smith 1",
      category: "Customer",
      img: userImg,
      message:
        "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة",
      rating: 4.7
    },
    {
        id: 2,
        name: "William Smith 2",
        category: "Customer",
        img: userImg,
        message:
        "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة",
        rating: 4.7
      },
      {
        id: 3,
        name: "William Smith 3",
        category: "Customer",
        img: userImg,
        message:
          "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة",
        rating: 4.7
      },
      {
        id: 4,
        name: "William Smith 4",
        category: "Customer",
        img: userImg,
        message:
        "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة",
        rating: 4.7
      },
      {
        id: 5,
        name: "William Smith 5",
        category: "Customer",
        img: userImg,
        message:
          "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة",
        rating: 4.7
      },
  ];

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="absolute sm:top-1/2 left-0 right-0 flex justify-center gap-6 sm:gap-0 sm:justify-between carousel-button-group"> 
            <div
              onClick={() => previous()} 
              className={`cursor-pointer flex items-center justify-center self-center w-10 h-10 rounded-[50%] bg-[#FF9E2C] ${currentSlide === 0 ? 'disable' : '' }`}>
                <FaAngleLeft color="#fff" size={20} />
            </div>

            <div
              onClick={() => next()} 
              className={`cursor-pointer flex items-center justify-center self-center w-10 h-10 rounded-[50%] bg-[#FF9E2C]`}>
                <FaAngleRight color="#fff" size={20} />
            </div>
      </div>
    );
  };

  return (
    <div className='w-full py-16 flex justify-center'>
      <div className="w-[90%]">
        <h1 className="text-4xl font-bold">
          What our <br />
          <span className="text-[#FF9E2C]">Customers</span> says
        </h1>
        <div className="my-5 relative min-[500px]:px-[50px]">
            {/* <div className="cursor-pointer flex items-center justify-center self-center w-10 h-10 rounded-[50%] bg-[#FF9E2C]">
                <FaAngleLeft color="#fff" size={20} />
            </div> */}
            <Carousel autoPlay={false} arrows={false} className="" responsive={responsive}
             renderButtonGroupOutside={true} 
            //  customLeftArrow={CustomLeftArrow} customRightArrow={CustomRightArrow} >
            customButtonGroup={<ButtonGroup />} >
            
        {reviews.map((item, index) => (
          <div key={index} className="m-5 flex flex-col rounded-2xl shadow-[0_5px_15px_0px_rgb(0,0,0,0.1)] p-5">
            <div className="flex items-center">
                <img className="md:w-auto w-20" src={item.img} alt={item.name} />
                <div className="flex-grow">
                    <h1 className="text-lg">{item.name}</h1>
                    <p className="text-[#808080] mt-1">{item.category}</p>
                </div>
            </div>
            <p className="leading-8 text-lg font-normal flex-1">{item.message}</p>
            <div className="flex items-center justify-end gap-1">
                <FaStar color="#FF9E2C" size={20} />
                <h2 className="font-bold">{item.rating}</h2>
            </div>
          </div>
        ))}
        </Carousel>
        {/* <div className="cursor-pointer flex items-center justify-center self-center w-10 h-10 rounded-[50%] bg-[#FF9E2C]">
                <FaAngleRight color="#fff" size={20} />
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
