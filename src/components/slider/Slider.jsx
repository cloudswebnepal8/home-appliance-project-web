import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Slider.scss"
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { cards } from "../../../../data";
import {Link} from "react-router";

const Slider = () => {
  return (
    <div className="maincontainer ">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((item) => (
          <SwiperSlide key={item.id}>
            
            <div className="sub-container">
              <img
                src={item.img}
                alt={item.title}
                className="image"
              />
              <div className="text">
                <h2 >{item.title}</h2>
                <p>{item.desc}</p>
              </div>
           <Link to="/contact"><button>Book Now</button></Link>   
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;