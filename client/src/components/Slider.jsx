import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Slider() {
  return (
    <section id="mu-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="mu-slider-single">
            <div className="mu-slider-img">
              <figure>
                <img src="assets/img/slider/1.jpg" alt="Slide 1" />
              </figure>
            </div>
            <div className="mu-slider-content">
              <h4>Welcome To Varsity</h4>
              <span></span>
              <h2>We Will Help You To Learn</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet error eius
                reiciendis eum sint unde eveniet deserunt est debitis corporis temporibus
                recusandae accusamus.
              </p>
              <a href="#" className="mu-read-more-btn">
                Read More
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="mu-slider-single">
            <div className="mu-slider-img">
              <figure>
                <img src="assets/img/slider/2.jpg" alt="Slide 2" />
              </figure>
            </div>
            <div className="mu-slider-content">
              <h4>Premium Quality Free Template</h4>
              <span></span>
              <h2>Best Education Template Ever</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet error eius
                reiciendis eum sint unde eveniet deserunt est debitis corporis temporibus
                recusandae accusamus.
              </p>
              <a href="#" className="mu-read-more-btn">
                Read More
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="mu-slider-single">
            <div className="mu-slider-img">
              <figure>
                <img src="assets/img/slider/3.jpg" alt="Slide 3" />
              </figure>
            </div>
            <div className="mu-slider-content">
              <h4>Exclusively For Education</h4>
              <span></span>
              <h2>Education For Everyone</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet error eius
                reiciendis eum sint unde eveniet deserunt est debitis corporis temporibus
                recusandae accusamus.
              </p>
              <a href="#" className="mu-read-more-btn">
                Read More
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Slider;
