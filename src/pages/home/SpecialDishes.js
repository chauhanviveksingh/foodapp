import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../../Components/Cards";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SimpleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      Next
    </div>
  );
};

const SimplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      Back
    </div>
  );
};

const SpecialDishes = () => {
  const [recipies, setRecipies] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        setRecipies(specials);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SimpleNextArrow />, // corrected name
    prevArrow: <SimplePrevArrow />, // corrected name
  };

  return (
    <div className="section-container my-20 relative">
      <div className="text-left">
        <p className="subtitle">Special Dishes</p>
        <h2 className="title md:w-[520px]">
          Enjoy delicious meals like never before
        </h2>
      </div>

      <div className="md: absolute right-3 top-16 mb-10 md:mr-25">
        <button
          onClick={() => slider?.current?.slickPrev()} // corrected method
          className="btn rounded-full ml-5 bg-blue"
        >
          <FaAngleLeft className="w-8 h-8 p-1 " />
        </button>
        <button
          onClick={() => slider?.current?.slickNext()} // corrected method
          className="btn rounded-full ml-5 bg-blue"
        >
          <FaAngleRight className="w-8 h-8 p-1" />
        </button>
      </div>

      <Slider ref={slider} {...settings}>
        {recipies.map((item, i) => (
          <Cards key={i} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default SpecialDishes;
