import React from "react";

import "../Layout/css/reset.css";
import "../Layout/css/plugins.css";
import "../Layout/css/style.css";

import "../Layout/css/style-dark.css";

import Home from "../Pages/Home";
import Navbar from "../Components/Navbar";
import ImageGallery from "../Pages/ImageGallery";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import BlogPost from "../Pages/BlogPost";
import Contacts from "../Pages/Contacts";
import Sidebar from "../Components/Sidebar";

import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <div className="loader-wrap">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>

      <Navbar />
      <Sidebar />
      <div id="main">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/gallery" render={() => <ImageGallery />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/blog" render={() => <Blog />} />
          <Route exact path="/post/id" render={() => <BlogPost />} />
          <Route exact path="/contacts" render={() => <Contacts />} />
        </Switch>
        <div className="element">
          <div className="element-item"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
