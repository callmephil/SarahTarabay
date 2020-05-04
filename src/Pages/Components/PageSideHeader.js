import React from 'react'
import PropTypes from 'prop-types'

function PageSideHeader({image, title, description}) {
    return (
        <div className="column-image">
        <div className="bg" data-bg={image}></div>
        <div className="overlay"></div>
        <div className="column-title">
          <h2>{title}</h2>
          <h3>
            {description}
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
    )
}

PageSideHeader.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

export default PageSideHeader

