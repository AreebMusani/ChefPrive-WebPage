import React, { useState, useRef, forwardRef } from "react";
import displayImg from "../../assets/images/displayImg.jpg";
import {
  FaAngleDown,
  FaAngleRight,
  FaLocationArrow,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { PiUsersThreeBold } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import customer1 from "../../assets/images/cus1.png";
import customer2 from "../../assets/images/cus2.png";
import customer3 from "../../assets/images/cus3.png";
import customer4 from "../../assets/images/cus4.png";
import visa from "../../assets/images/visa.png";
import mastercard from "../../assets/images/mastercard.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HeroSection = () => {
  const [noOfPerson, setnoOfPerson] = useState(5);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const startDatePickerRef = useRef(null);
  const endDatePickerRef = useRef(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  // alert(typeof startDate)
  const listOfCusPic = [customer1, customer2, customer3, customer4];

  const toggleDatePicker = (pickerRef) => {
    if (pickerRef.current) {
      pickerRef.current.setOpen((prevOpen) => !prevOpen);
    }
  };

  const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
    <p onClick={onClick} ref={ref}>
      {value}
    </p>
  ));

  return (
    <div className="w-[90%] m-auto py-20 flex flex-col lg:flex-row">
      <div className="basis-full lg:basis-1/2">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Book <span className="text-[#FF9E2C]">Private Chef</span>
          <br />
          for your <br />
          Dinner <span className="text-[#FF9E2C]">Party</span>
        </h1>
        <p className="my-2 text-base text-[#1F1F1F]/50">
          We’re providing the best Chef booking platform. <br />
          Choose a menu and book your Chef instantly
        </p>
        <div className="flex items-center w-full gap-2">
          <div className="my-10 bg-[#A9A9A9]/05 rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] py-5 flex flex-col gap-10 sm:gap-0 sm:flex-row items-center flex-grow">
            <div className="basis-1/3 flex flex-col items-center sm:border-r-2">
              <div className="px-1 flex items-center mb-1">
                <CiLocationArrow1 color="#000" size={20} />
                <h2 className="text-center text-base font-bold px-2">
                  Select region
                </h2>
                <FaAngleDown color="#FF9E2C" size={20} />
              </div>
              <p className="text-sm text-[#1F1F1F]/50 text-center">
                Al Shamal
                <span className="ml-2">الشمال</span>
              </p>
            </div>

            <div className="basis-1/3 flex flex-col items-center">
              <div className="px-1 flex items-center mb-1">
                <SlCalender color="#000" size={20} />
                <h2 className="text-center text-base font-bold px-2">
                  Select Date
                </h2>
                <FaAngleDown onClick={() => toggleDatePicker(startDatePickerRef)} color="#FF9E2C" size={20} />
              </div>
              {/* <p className="text-sm text-[#1F1F1F]/50 text-center">
                15 Jan - 20 Jan 2022
              </p> */}
              <div className="flex justify-center text-sm text-[#1F1F1F]/50 text-center">
                <DatePicker
                  selected={startDate}
                  onChange={handleStartDateChange}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="d MMM"
                  placeholderText="15 Jan"
                  showMonthDropdown
                  className="w-[55px] outline-none"
                  // showYearDropdown
                  dropdownMode="select"
                  ref={startDatePickerRef}
                  customInput={<CustomDateInput />}
                  onCalendarClose={() => toggleDatePicker(endDatePickerRef)}
                />
                {" - "}
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  dateFormat="d MMM YYYY"
                  placeholderText="20 Jan 2024"
                  showMonthDropdown
                  className="ml-2 w-[85px] outline-none"
                  // showYearDropdown
                  ref={endDatePickerRef}
                  customInput={<CustomDateInput />}
                  dropdownMode="select"
                />
              </div>
            </div>

            <div className="basis-1/3 flex flex-col items-center sm:border-l-2">
              <div className="px-1 flex items-center mb-1">
                <PiUsersThreeBold color="#000" size={20} />
                <h2 className="text-center text-base font-bold px-2">
                  Select persons
                </h2>
              </div>
              <div className="rounded-lg flex items-center justify-center text-xs text-[#1F1F1F]/50 text-center gap-2">
                <div
                  onClick={() =>
                    noOfPerson > 1 && setnoOfPerson(noOfPerson - 1)
                  }
                  className="cursor-pointer flex items-center justify-center self-center w-6 h-6 rounded-[50%] bg-[#FF9E2C]/20"
                >
                  <IoIosArrowDown color="FF9E2C" size={15} />
                </div>
                <p className="text-sm text-[#1F1F1F]/50">{noOfPerson}</p>
                <div
                  onClick={() => setnoOfPerson(noOfPerson + 1)}
                  className="cursor-pointer flex items-center justify-center self-center w-6 h-6 rounded-[50%] bg-[#FF9E2C]/20"
                >
                  <IoIosArrowUp color="#FF9E2C" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer flex items-center justify-center self-center min-w-14 min-h-14 rounded-[50%] bg-[#FF9E2C]">
            <FaAngleRight color="#fff" size={25} />
          </div>
        </div>
        {/* Customer reviews */}
        <div className="flex flex-wrap flex-col gap-5 sm:gap-0 items-center sm:flex-row">
          <div className="flex ml-[25%] sm:ml-0">
            {listOfCusPic.map((img, index) => (
              <img
                key={index}
                className="w-[20%]"
                style={{ transform: `translateX(-${index * 30}%)` }}
                src={img}
                alt="customer image"
              />
            ))}
          </div>
          <div className="sm:-ml-28 flex flex-col justify-center">
            <h1 className="text-lg text-[#FF9E2C] font-bold">
              Our happy customers
            </h1>
            <div className="flex justify-between">
              <div className="flex items-center justify-end gap-1">
                <FaStar color="#FF9E2C" size={20} />
                <h2 className="font-bold">4.7</h2>
              </div>
              <p className="text-[#777]">(8.2K Review)</p>
            </div>
          </div>

          <div className="flex-grow items-end lg:ml-5 flex flex-col justify-center gap-1">
            <h1 className="text-lg text-[#777] italic font-semibold">
              We accept
            </h1>
            <div className="flex gap-4">
              <img className="w-8" src={visa} alt="visa card" />
              <img className="w-8" src={mastercard} alt="visa card" />
            </div>
          </div>
        </div>
      </div>
      <div className="basis-full lg:basis-1/2 self-center">
        <img src={displayImg} alt="display Img" />
      </div>
    </div>
  );
};

export default HeroSection;
