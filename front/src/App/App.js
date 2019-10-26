import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../Layout/App.css";
import Sidebar from "../Components/Navigation/Sidebar";
import Topbar from "../Components/Navigation/Topbar";
import Portfolio from "../Components/Portfolio";
import Contact from "../Components/Contact";
import Dashboard from "../Components/Dashboard";
import Footer from "../Components/Navigation/Footer";

function App() {
  const isDesktop = () => {
    return window.innerWidth > 1024 ? "95%" : "100%";
  };
  return (
    <div className="w3-light-grey">
      <Router>
        <Topbar />
        <Sidebar />
        <div
          className="w3-main w3-content"
          style={{ maxWidth: isDesktop(), marginTop: "83px" }}
        >
          <div className="w3-row w3-grayscale-min">
            <Switch>
              <Route exact path="/">
                <Portfolio />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
