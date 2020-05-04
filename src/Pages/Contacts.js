import React from "react";
import PropTypes from "prop-types";
import PageSideHeader from "./Components/PageSideHeader";
import PageFooter from "./Components/PageFooter";

function Contacts(props) {
  return (
    <div id="wrapper">
      <div className="content">
        <PageSideHeader
          image={"/Assets/images/bg/2.jpg"}
          title={"Contact Info"}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.
              Nulla finibus lobortis pulvinar.`}
        />
        <div className="column-wrapper ">
          <div className="scroll-nav-wrap">
            <nav className="scroll-nav scroll-init">
              <ul>
                <li>
                  <a href="#sec1">Say Hello</a>
                </li>
                <li>
                  <a className="act-scrlink" href="#sec2">
                    Details
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <section id="sec1">
            <div className="container small-container">
              <div className="section-title fl-wrap">
                <h3>Contact Information</h3>
                <h4>Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa</h4>
                <div className="section-number">01.</div>
              </div>
              <div className="column-wrapper_item fl-wrap">
                <div className="column-wrapper_text fl-wrap">
                  <p>
                    If you’d like to talk about a project, our work or anything else then get in
                    touch.
                  </p>
                  <div className="contact-details fl-wrap">
                    <ul>
                      <li>
                        <span>Mail :</span>
                        <a href="#" target="_blank">
                          yourmail@domain.com
                        </a>
                      </li>
                      <li>
                        <span>Adress :</span>
                        <a href="#" target="_blank">
                          USA 27TH Brooklyn NY
                        </a>
                      </li>
                      <li>
                        <span>Phone :</span>
                        <a href="#">+7(111)123456789</a> , <a href="#">+8(222)987654321</a>
                      </li>
                    </ul>
                  </div>
                  <a href="#sec2" className="custom-scroll-link btn fl-btn">
                    Say Hello
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="sec-dec"></div>
          <section id="sec2">
            <div className="container small-container">
              <div className="section-title fl-wrap">
                <h3>Get In Touch</h3>
                <h4>Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa</h4>
                <div className="section-number">02.</div>
              </div>
              <div className="column-wrapper_item fl-wrap">
                <div className="column-wrapper_text fl-wrap">
                  <div id="contact-form" className="fl-wrap">
                    <div id="message"></div>
                    <form
                      className="custom-form"
                      action="http://kotlis.kwst.net/dark/php/contact.php"
                      name="contactform"
                      id="contactform">
                      <fieldset>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your Name *"
                          value=""
                        />
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email Address *"
                          value=""
                        />
                        <textarea
                          name="comments"
                          id="comments"
                          cols={40}
                          rows={3}
                          placeholder="Your Message:"></textarea>
                        <button className="btn float-btn flat-btn color-bg" id="submit">
                          Send Message
                        </button>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <PageFooter />
        </div>
      </div>
      <div className="share-wrapper">
        <div className="share-container fl-wrap  isShare"></div>
      </div>
    </div>
  );
}

Contacts.propTypes = {};

export default Contacts;
