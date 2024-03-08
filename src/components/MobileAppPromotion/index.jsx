import React from "react";
import backroundImg from "../../assets/images/curveBack.png";
import mobileApp from "../../assets/images/mobile.png";
import googleplay from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";
import pizza from "../../assets/images/pizza.png";
import corn from "../../assets/images/corn.png";
import circle from "../../assets/images/circleforbg.png";

const MobileAppPromotion = () => {
  return (
    // <div className='w-[90%] relative my-20'>
    // <img className='w-full h-full' src={backroundImg} alt="background image" />
    //   <img className='absolute -top-16 left-[6%] h-[140%]' src={mobileApp} alt="my app" />
    //   <div className='flex flex-col absolute left-[35%] bottom-[25%]'>
    //     <h1 className='text-white mb-2 md:mb-[5%] text-xl md:text-3xl lg:text-4xl font-bold'>Download our Mobile App</h1>
    //     <div className='flex justify-between'>
    //         <img className='cursor-pointer w-32 md:w-40 lg:w-52' src={googleplay} alt="googleplay" />
    //         <img className='cursor-pointer w-32 md:w-40 lg:w-52' src={appstore} alt="appstores" />
    //     </div>
    //   </div>
    //   <img className='w-[15%] absolute -top-[20%] right-[5%]' src={pizza} alt="pizza" />
    //   <img className='w-[15%] absolute -bottom-[8%] -right-[5%]' src={corn} alt="pizza" />
    // </div>
    <div
      className={`rounded-[40px] bg-no-repeat bg-cover lg:min-h-[400px] w-[90%] relative my-10 lg:my-40 bg-[url('/src/assets/images/curveBack.png')] flex flex-col sm:flex-row justify-center sm:justify-evenly lg:justify-start items-center`}
    >
      <img className="z-[1] absolute w-[10%] left-10" src={circle} alt="circle" />
      <img className="z-[1] absolute w-[10%] right-10 top-[30%] sm:top-16" src={circle} alt="circle" />
      <img className="z-[1] absolute w-[8%] right-[30%] top-[20%] sm:top-12" src={circle} alt="circle" />
      <img className="z-[1] absolute w-[12%] left-[20%] sm:left-[40%] bottom-[4%] sm:bottom-[10%]" src={circle} alt="circle" />
      <img className="z-[1] absolute w-[6%] right-[15%] bottom-[8%]" src={circle} alt="circle" />
      <img className="z-[2] lg:ml-[10%] lg:mr-[8%] sm:translate-y-3 sm:scale-125 lg:w-72 w-40" src={mobileApp} alt="my app" />
      <div className="z-[2] sm:translate-y-10 text-center sm:text-start mb-5">
        <h1 className="text-white mb-2 md:mb-5 lg:mb-8 text-xl md:text-3xl lg:text-4xl font-bold">
          Download our Mobile App
        </h1>
        <div className="flex justify-center sm:justify-start flex-wrap">
          <img
            className="cursor-pointer w-36 md:w-44 lg:w-52"
            src={googleplay}
            alt="googleplay"
          />
          <img className="cursor-pointer w-36 md:w-44 lg:w-52" src={appstore} alt="appstores" />
        </div>
      </div>

      <img className='z-[2] w-[15%] md:w-42 lg:w-32 absolute top-[10%] sm:-top-[6%] md:-top-[12%] lg:-top-14 right-[5%]' src={pizza} alt="pizza" />
      <img className='z-[2] w-[15%] md:w-42 lg:w-32 absolute -bottom-4 -right-[5%] lg:-right-[3%]' src={corn} alt="pizza" />
   
    </div>
  );
};

export default MobileAppPromotion;
