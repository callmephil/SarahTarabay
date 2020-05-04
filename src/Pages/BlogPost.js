import React from "react";
import PropTypes from "prop-types";
import PageSideHeader from "./Components/PageSideHeader";

function BlogPost(props) {
  return (
    <div id="wrapper">
      {/* content */}
      <div className="content">
        {/* column-image  */}
        <PageSideHeader
          image={"/Assets/images/bg/20.jpg"}
          title={"My Stories"}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.
              Nulla finibus lobortis pulvinar.`}
        />
        {/* column-image end  */}
        {/* column-wrapper */}
        <div className="column-wrapper single-content-section">
          {/*fixed-bottom-content */}
          <div className="fixed-bottom-content">
            {/* pagination   */}
            <div className="content-nav-fixed">
              <ul>
                <li>
                  <a href="blog-single.html" className="ln">
                    <i className="fal fa-long-arrow-left"></i>
                    <span>
                      Prev <strong>- Post Title</strong>
                    </span>
                  </a>
                  <div className="content-nav_mediatooltip cnmd_leftside">
                    <img src="/Assets/images/folio/6.jpg" alt="" />
                  </div>
                </li>
                <li>
                  <a href="blog-single.html" className="rn">
                    <span>
                      Next <strong>- Post Title</strong>
                    </span>
                    <i className="fal fa-long-arrow-right"></i>
                  </a>
                  <div className="content-nav_mediatooltip cnmd_rightside">
                    <img src="/Assets/images/folio/5.jpg" alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/*fixed-bottom-content end  */}
          {/*section  */}
          <section className="single-content-section">
            <div className="container small-container">
              {/* post */}
              <div className="post fl-wrap fw-post single-post ">
                <h2>
                  <span>Blog post title</span>
                </h2>
                <ul className="blog-title-opt">
                  <li>
                    <a href="#">12 may 2017</a>
                  </li>
                  <li> - </li>
                  <li>
                    <a href="#">Interviews </a>
                  </li>
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <li> - </li>
                  <li>
                    <a href="#">
                      <span className="author_avatar">
                        <img alt="" src="/Assets/images/avatar/1.jpg" width="50" height="50" />
                      </span>
                      Jane Kowalski
                    </a>
                  </li>
                </ul>
                {/* blog media */}
                <div className="blog-media fl-wrap">
                  <div className="single-slider-wrap">
                    <div className="single-slider fl-wrap">
                      <div className="swiper-container">
                        <div className="swiper-wrapper lightgallery">
                          <div className="swiper-slide hov_zoom">
                            <img src="/Assets/images/folio/4.jpg" alt="" />
                            <a
                              href="/Assets/images/folio/4.jpg"
                              className="box-media-zoom   popup-image">
                              <i className="fal fa-search"></i>
                            </a>
                          </div>
                          <div className="swiper-slide hov_zoom">
                            <img src="/Assets/images/folio/5.jpg" alt="" />
                            <a
                              href="/Assets/images/folio/5.jpg"
                              className="box-media-zoom   popup-image">
                              <i className="fal fa-search"></i>
                            </a>
                          </div>
                          <div className="swiper-slide hov_zoom">
                            <img src="/Assets/images/folio/6.jpg" alt="" />
                            <a
                              href="/Assets/images/folio/6.jpg"
                              className="box-media-zoom   popup-image">
                              <i className="fal fa-search"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ss-slider-pagination_wrap">
                      <div className="ss-slider-pagination"></div>
                    </div>
                    <div className="ss-slider-cont ss-slider-cont-prev color-bg">
                      <i className="fal fa-long-arrow-left"></i>
                    </div>
                    <div className="ss-slider-cont ss-slider-cont-next color-bg">
                      <i className="fal fa-long-arrow-right"></i>
                    </div>
                  </div>
                </div>
                {/* blog media end */}
                <div className="blog-text fl-wrap">
                  <div className="pr-tags fl-wrap">
                    <span>Tags : </span>
                    <ul>
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">Photography</a>
                      </li>
                      <li>
                        <a href="#">Fasion</a>
                      </li>
                    </ul>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed
                    quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur
                    vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit.
                    Quisque varius eros ac purus dignissim. Proin eu ultrices libero. Curabitur
                    vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit.
                    Quisque varius eros ac purus dignissim.
                  </p>
                  <blockquote>
                    <p>
                      Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel molestie
                      faucibus.Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel
                      molestie faucibus.Cras lacinia magna vel molestie faucibus.
                    </p>
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed
                    quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur
                    vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit.
                    Quisque varius eros ac purus dignissim. Proin eu ultrices libero. Curabitur
                    vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit.
                    Quisque varius eros ac purus dignissim.
                  </p>
                  <p>
                    Quisque varius eros ac purus dignissim. Proin eu ultrices libero. Curabitur
                    vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit.
                    Quisque varius eros ac purus dignissim.
                  </p>
                </div>
              </div>
              {/* post end*/}
            </div>
          </section>
          {/*section end  */}
          {/*footer */}
          <footer className="min-footer fl-wrap content-animvisible">
            <div className="container small-container">
              <div className="footer-inner fl-wrap">
                {/* policy-box*/}
                <div className="policy-box">
                  <span>&#169; Kotlis 2019 / All rights reserved. </span>
                </div>
                {/* policy-box end*/}
                <a href="#" className="to-top-btn to-top">
                  Back to top <i className="fal fa-long-arrow-up"></i>
                </a>
              </div>
            </div>
          </footer>
          {/*footer end  */}
        </div>
        {/* column-wrapper */}
      </div>
      {/*content end*/}
      {/*share-wrapper*/}
      <div className="share-wrapper">
        <div className="share-container fl-wrap  isShare"></div>
      </div>
      {/*share-wrapper end*/}
    </div>
  );
}

BlogPost.propTypes = {};

export default BlogPost;
