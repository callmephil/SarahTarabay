import React from "react";
import PropTypes from "prop-types";

function Blog(props) {
  return (
    <div id="wrapper">
      {/* content */}
      <div className="content">
        {/* column-image  */}
        <div className="column-image">
          <div className="bg" data-bg="/Assets/images/bg/22.jpg"></div>
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
        <div className="column-wrapper  single-content-section">
          {/* fixed-bottom-content*/}
          <div className="fixed-bottom-content">
            {/* pagination   */}
            <div className="pagination-container fl-wrap">
              <a href="#" className="prevposts-link">
                <i className="fal fa-chevron-left"></i>
              </a>
              <a href="#">1</a>
              <a href="#" className="current-page">
                2
              </a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#" className="nextposts-link">
                <i className="fal fa-chevron-right"></i>
              </a>
            </div>
            {/* pagination  end */}
          </div>
          {/* fixed-bottom-content end */}
          {/*section  */}
          <section className="single-content-section">
            <div className="container small-container">
              {/* post */}
              <div className="post fl-wrap fw-post">
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
                </ul>
                {/* blog media */}
                <div className="blog-media fl-wrap">
                  <img src="/Assets/images/folio/5.jpg" className="respimg" alt="" />
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
                    Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris
                    non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien
                    dui. Nulla auctor sit amet sem non porta. Praesent eu massa vel diam laoreet
                    elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec
                    volutpat porta risus posuere imperdiet. Sed viverra dolor sed dolor placerat
                    ornare ut . Integer iaculis tellus nulla, quis imperdiet magna venenatis vitae..
                  </p>
                  <a href="blog-single.html" className="btn float-btn flat-btn">
                    Read more{" "}
                  </a>
                </div>
              </div>
              {/* post end*/}
              {/* post */}
              <div className="post fl-wrap fw-post">
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
                </ul>
                {/* blog media */}
                <div className="blog-media fl-wrap">
                  <img src="/Assets/images/folio/4.jpg" className="respimg" alt="" />
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
                    Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris
                    non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien
                    dui. Nulla auctor sit amet sem non porta. Praesent eu massa vel diam laoreet
                    elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec
                    volutpat porta risus posuere imperdiet. Sed viverra dolor sed dolor placerat
                    ornare ut . Integer iaculis tellus nulla, quis imperdiet magna venenatis vitae..
                  </p>
                  <a href="blog-single.html" className="btn float-btn flat-btn">
                    Read more{" "}
                  </a>
                </div>
              </div>
              {/* post end*/}
              {/* post */}
              <div className="post fl-wrap fw-post">
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
                </ul>
                {/* blog media */}
                <div className="blog-media fl-wrap">
                  <img src="/Assets/images/folio/12.jpg" className="respimg" alt="" />
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
                    Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris
                    non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien
                    dui. Nulla auctor sit amet sem non porta. Praesent eu massa vel diam laoreet
                    elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec
                    volutpat porta risus posuere imperdiet. Sed viverra dolor sed dolor placerat
                    ornare ut . Integer iaculis tellus nulla, quis imperdiet magna venenatis vitae..
                  </p>
                  <a href="blog-single.html" className="btn float-btn flat-btn">
                    Read more{" "}
                  </a>
                </div>
              </div>
              {/* post end*/}
              {/* post */}
              <div className="post fl-wrap fw-post">
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
                </ul>
                {/* blog media */}
                <div className="blog-media fl-wrap">
                  <img src="/Assets/images/folio/13.jpg" className="respimg" alt="" />
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
                    Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris
                    non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien
                    dui. Nulla auctor sit amet sem non porta. Praesent eu massa vel diam laoreet
                    elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec
                    volutpat porta risus posuere imperdiet. Sed viverra dolor sed dolor placerat
                    ornare ut . Integer iaculis tellus nulla, quis imperdiet magna venenatis vitae..
                  </p>
                  <a href="blog-single.html" className="btn float-btn flat-btn">
                    Read more{" "}
                  </a>
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

Blog.propTypes = {};

export default Blog;
