import React from "react";
import PropTypes from "prop-types";

const list = [
    {
      "image": "24.jpg",
      "title": "This is a title",
      "description": "Here you can place an optional description of your picture",
      "category": "dummy"
    },
    {
      "image": "2.jpg",
      "title": "This is a title",
      "description": "Here you can place an optional description of your picture",
      "category": "dummy"
    },
    {
      "image": "27.jpg",
      "title": "This is a title",
      "description": "Here you can place an optional description of your picture",
      "category": "dummy"
    },
    {
      "image": "4.jpg",
      "title": "This is a title",
      "description": "Here you can place an optional description of your picture",
      "category": "dummy"
    },
    {
      "image": "5.jpg",
      "title": "This is a title",
      "description": "Here you can place an optional description of your picture",
      "category": "dummy"
    },
    {
      "image": "6.jpg",
      "title": "This is a title",
      "description": "Here you can place an optional description of your picture",
      "category": "dummy"
    },
    {
      "image": "8.jpg",
      "title": "This is a title",
      "description": "Here you can place an optional description of your picture",
      "category": "dummy"
    },
    {
      "image": "9.jpg",
      "title": "This is a title",
      "description": "Here you can place an optional description of your picture",
      "category": "dummy"
    },
    {
      "image": "10.jpg",
      "title": "This is a title",
      "description": "Here you can place an optional description of your picture",
      "category": "dummy"
    },
    {
      "image": "25.jpg",
      "title": "This is a title",
      "description": "Here you can place an optional description of your picture",
      "category": "dummy"
    },
    {
      "image": "11.jpg",
      "title": "This is a title",
      "description": "Here you can place an optional description of your picture",
      "category": "dummy"
    },
    {
      "image": "12.jpg",
      "title": "This is a title",
      "description": "Here you can place an optional description of your picture",
      "category": "dummy"
    },
    {
      "image": "18.jpg",
      "title": "This is a title",
      "description": "Here you can place an optional description of your picture",
      "category": "dummy"
    },
    {
      "image": "21.jpg",
      "title": "This is a title",
      "description": "Here you can place an optional description of your picture",
      "category": "dummy"
    },
    {
      "image": "22.jpg",
      "title": "This is a title",
      "description": "Here you can place an optional description of your picture",
      "category": "dummy"
    },
    {
      "image": "13.jpg",
      "title": "This is a title",
      "description": "Here you can place an optional description of your picture",
      "category": "dummy"
    },
    {
      "image": "20.jpg",
      "title": "This is a title",
      "description": "Here you can place an optional description of your picture",
      "category": "dummy"
    }
];

function GalleryFilter() {
  return (
    <div className="bottom-filter-wrap hor-filter-wrap">
      <div className="scroll-down-wrap">
        <div className="mousey">
          <div className="scroller"></div>
        </div>
        <span>Scroll down to discover</span>
      </div>
      <div className="filter-title">
        Filters <i className="fal fa-long-arrow-right"></i>
      </div>
      <div className="gallery-filters">
        <a href="#" className="gallery-filter  gallery-filter-active" data-filter="*">
          All
        </a>
        <a href="#" className="gallery-filter" data-filter=".nature">
          Nature
        </a>
        <a href="#" className="gallery-filter" data-filter=".models">
          Models
        </a>
        <a href="#" className="gallery-filter" data-filter=".couples">
          Couples
        </a>
        <a href="#" className="gallery-filter" data-filter=".outdoor">
          Outdoor
        </a>
      </div>
      <div className="count-folio round-counter">
        <div className="num-album"></div>
        <div className="all-album"></div>
      </div>
    </div>
  );
}

const GalleryItems = ({ list }) => {
  if (typeof list === 'undefined')
    return <h1>Undefined List (Contact Dev)</h1>

  return list.map(({ image, title, category, description }, index) => {
    const url = `Assets/images/folio/${image}`;
    return (
      <div key={index} className={`gallery-item ${category}`}>
        <div className="grid-item-holder hov_zoom">
          <img src={url} alt={title} />
          <a href={url} className="box-media-zoom popup-image">
            <i className="fal fa-search"></i>
          </a>
          <div className="thumb-info">
            <h3>
              <a href="portfolio-single.html">{title}</a>
            </h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  });
};

function ImageGallery(props) {
  return (
    <div id="wrapper">
      <div className="content">
        <GalleryFilter />
        <div className="ff_panel-conainer fl-wrap">
          <div className="gallery-items min-pad four-column fl-wrap lightgallery">
            <GalleryItems list={list} />
          </div>
        </div>
      </div>
      {/*share-wrapper*/}
      <div className="share-wrapper">
        <div className="share-container fl-wrap  isShare"></div>
      </div>
      {/*share-wrapper end*/}
    </div>
  );
}

ImageGallery.propTypes = {};

export default ImageGallery;
