import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {

    return (
      <header >

        <nav id="nav-wrap">

          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

          <ul id="nav" className="nav">
            <li><NavLink exact="true" className={"homeNav"} to="/">Home</NavLink></li>
            <li><NavLink exact="true" className={"aboutNav"} to="/about">About</NavLink></li>
            {/* <li><NavLink exact="true" className={"resumeNav"} to="/resume">Resume</NavLink></li> */}
            <li><NavLink exact="true" className={"portfolioNav"} to="/portfolio">Portfolio</NavLink></li>
            {/* <li><NavLink exact="true" className={"contactNav"} to="/contact">Contact</NavLink></li> */}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
