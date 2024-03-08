import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Categories from "../../components/Categories";
import CustomerReviews from "../../components/CustomerReviews";
import PopularDishes from "../../components/PopularDishes";
import MobileAppPromotion from "../../components/MobileAppPromotion";
import HeroSection from "../../components/HeroSection";

const Home = () => {
  return (
    <>      
      <Header active={"Home"} />
      <HeroSection />
      <MobileAppPromotion />
      <PopularDishes />
      <Categories />
      <CustomerReviews />
      <Footer />
    </>
  );
};

export default Home;
