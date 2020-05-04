import React from "react";
import PropTypes from "prop-types";

const MultiSlideShowWrapper = ({ id, imgList }) => {
  const ms_item = id !== 1 ? `ms_item${id}` : `ms_item`;
  const SwiperSlide = ({ isKenburns, img }) => {
    const extraClass = isKenburns ? "kenburns" : "";
    return (
      <div className="swiper-slide">
        <div className={`${ms_item} fl-wrap ${extraClass}`}>
          <div className="bg" data-bg={`Assets/images/bg/${img}.jpg`}></div>
          <div className="overlay"></div>
        </div>
      </div>
    );
  };

  return (
    <div className={`multi-slideshow-wrap_${id} ms-wrap`}>
      <div className="full-height fl-wrap">
        <div className={`multi-slideshow_${id} ms-container fl-wrap full-height`}>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <SwiperSlide isKenburns={false} img={imgList[0]} />
              <SwiperSlide isKenburns={false} img={imgList[1]} />
              <SwiperSlide isKenburns={false} img={imgList[2]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Home(props) {
  return (
    <div id="wrapper">
      <div className="content full-height">
        <div className="home-main_container">
          <div className="follow-wrap">
            <div className="clearfix"></div>
            <ul>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-vk"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="home-main_title">
            <div className="home-main_title_item">
              <h4>Photographer and director based in New York</h4>
              <h2>Jane Kowalski</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="portfolio.html" className="btn fl-btn">
                My portfolio
              </a>
            </div>
          </div>
          <div className="slide-progress-wrap">
            <div className="slide-progress"></div>
          </div>
          <div className="slider-mask"></div>
          <MultiSlideShowWrapper id={1} imgList={[3, 8, 1]} />
          <MultiSlideShowWrapper id={2} imgList={[15, 6, 13]} />
          <MultiSlideShowWrapper id={3} imgList={[16, 9, 10]} />
        </div>
      </div>
      <div className="share-wrapper">
        <div className="share-container fl-wrap  isShare"></div>
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
