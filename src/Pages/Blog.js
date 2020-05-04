import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PageSideHeader from "./Components/PageSideHeader";

const BlogCard = ({id, title, date, image, tags, description}) => {
  description = `Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris
  non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien
  dui. Nulla auctor sit amet sem non porta. Praesent eu massa vel diam laoreet
  elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec
  volutpat porta risus posuere imperdiet. Sed viverra dolor sed dolor placerat
  ornare ut . Integer iaculis tellus nulla, quis imperdiet magna venenatis vitae..`
  return (
    <div className="post fl-wrap fw-post">
      <h2>
        <span>{title}</span>
      </h2>
      <ul className="blog-title-opt">
        <li>
          <a href="#">{date}</a>
        </li>
      </ul>
      {/* blog media */}
      <div className="blog-media fl-wrap">
        <img src={image} className="respimg" alt={title} />
      </div>
      {/* blog media end */}
      <div className="blog-text fl-wrap">
        <div className="pr-tags fl-wrap">
          <span>Tags : </span>
          <ul>
            {
              tags && tags.map((tag, index) => (
                <li>
                  <a key={index} href="#">{tag}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <p>
          {description}
        </p>
        <Link className="btn float-btn flat-btn" to="post/id">Read more</Link>
      </div>
    </div>
  );
};

function Blog(props) {
  return (
    <div id="wrapper">
      {/* content */}
      <div className="content">
        {/* column-image  */}
        <PageSideHeader
          image={"/Assets/images/bg/22.jpg"}
          title={"My Stories"}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.
              Nulla finibus lobortis pulvinar.`}
        />
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
              <BlogCard id={0} title="Blog post title" date="12 mars 2019" image={"/Assets/images/folio/1.jpg"} tags={["Design", "Potography"]} description=""/>
              <BlogCard id={0} title="Blog post title" date="12 mars 2019" image={"/Assets/images/folio/13.jpg"} tags={["Design", "Potography"]} description=""/>
              <BlogCard id={0} title="Blog post title" date="12 mars 2019" image={"/Assets/images/folio/18.jpg"} tags={["Design", "Potography"]} description=""/>
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
