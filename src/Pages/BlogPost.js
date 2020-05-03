import React from "react";
import PropTypes from "prop-types";

function BlogPost(props) {
  return (
    <div id="wrapper">
      {/* content */}
      <div className="content">
        {/* column-image  */}
        <div className="column-image">
          <div className="bg" data-bg="/Assets/images/bg/20.jpg"></div>
          <div className="overlay"></div>
          <div className="column-title">
            <h2>My Stories</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.
              Nulla finibus lobortis pulvinar.
            </h3>
          </div>
          <div className="column-notifer">
            <div className="scroll-down-wrap transparent_sdw">
              <div className="mousey">
                <div className="scroller"></div>
              </div>
              <span>Scroll down to Discover</span>
            </div>
          </div>
          <div className="fixed-column-dec"></div>
        </div>
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
                    </span>{" "}
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
                        {" "}
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
                            <a href="/Assets/images/folio/4.jpg" className="box-media-zoom   popup-image">
                              <i className="fal fa-search"></i>
                            </a>
                          </div>
                          <div className="swiper-slide hov_zoom">
                            <img src="/Assets/images/folio/5.jpg" alt="" />
                            <a href="/Assets/images/folio/5.jpg" className="box-media-zoom   popup-image">
                              <i className="fal fa-search"></i>
                            </a>
                          </div>
                          <div className="swiper-slide hov_zoom">
                            <img src="/Assets/images/folio/6.jpg" alt="" />
                            <a href="/Assets/images/folio/6.jpg" className="box-media-zoom   popup-image">
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
                      {" "}
                      Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel molestie
                      faucibus.Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel
                      molestie faucibus.Cras lacinia magna vel molestie faucibus.{" "}
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
                {/* post-author*/}
                <div className="post-author fl-wrap">
                  <div className="author-img">
                    <img src="/Assets/images/avatar/1.jpg" alt="" />
                  </div>
                  <div className="author-content">
                    <h5>
                      <a href="#">Jane Kowalski</a>
                    </h5>
                    <p>
                      At one extremity the rope was unstranded, and the separate spread yarns were
                      all braided and woven round the socket of the harpoon; the pole was then
                      driven hard up into the socket; from the lower end the rope was traced
                      half-way along the pole’s length, and firmly secured so, with intertwistings
                      of twine.
                    </p>
                    <div className="author-social">
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
                  </div>
                </div>
                {/*post-author end*/}
                <div id="comments" className="single-post-comm fl-wrap">
                  {/*title*/}
                  <h6 id="comments-title">
                    Comments<span>( 2 )</span>
                  </h6>
                  <ul className="commentlist clearafix">
                    <li className="comment">
                      <div className="comment-body">
                        <div className="comment-author">
                          <img alt="" src="/Assets/images/avatar/1.jpg" width="50" height="50" />
                        </div>
                        <cite className="fn">
                          <a href="#">Kevin</a>
                        </cite>
                        <div className="comment-meta">
                          <h6>
                            <a href="#">January 02, 2014 at 07:39 am</a> /{" "}
                            <a className="comment-reply-link" href="#">
                              Reply
                            </a>
                          </h6>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
                          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                          dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet
                          viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
                          Nullam mollis. Ut justo.
                        </p>
                      </div>
                    </li>
                    <li className="comment">
                      {/*comment body*/}
                      <div className="comment-body">
                        <div className="comment-author">
                          <img alt="" src="/Assets/images/avatar/2.jpg" width="50" height="50" />
                        </div>
                        <cite className="fn">
                          <a href="#">Andy</a>
                        </cite>
                        <div className="comment-meta">
                          <h6>
                            <a href="#">January 22, 2014 at 03:19 am</a> /{" "}
                            <a className="comment-reply-link" href="#">
                              Reply
                            </a>
                          </h6>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
                          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                          dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet
                          viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
                          Nullam mollis. Ut justo.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                  <div id="respond" className="clearafix">
                    <h6 id="reply-title">Leave A Review</h6>
                    <form className="custom-form " name="commentform">
                      <fieldset>
                        <input
                          type="text"
                          name="name"
                          id="name2"
                          placeholder="Your Name *"
                          value=""
                        />
                        <input
                          type="text"
                          name="email"
                          id="email2"
                          placeholder="Email Address *"
                          value=""
                        />
                        <textarea
                          name="comments"
                          id="comments2"
                          cols={40}
                          rows={3}
                          placeholder="Your Message:"></textarea>
                        <button className="btn float-btn" id="submit">
                          Add Comment{" "}
                        </button>
                      </fieldset>
                    </form>
                  </div>
                  {/*end respond*/}
                </div>
                {/*comments end */}
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
