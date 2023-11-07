import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
  render() {

    return (
      <header >

        <nav id="nav-wrap">

          {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a> */}

          <ul id="nav" className="nav">
            <li><NavLink exact="true" className={"homeNav"} to="/">Home</NavLink></li>
            <li><NavLink exact="true" className={"aboutNav"} to="/about">About</NavLink></li>
            <li><NavLink className={"resumeNav"} to={{ pathname: "//linetpreshma.notion.site/linetpreshma/Preshma-Linet-Pereira-Resume-3e933c388bf14365b01f4e01f24737dc" }}  >Resume</NavLink></li>
            {/* <li><NavLink exact="true" className={"resumeNav"} to="/resume">Resume</NavLink></li> */}
            <li><NavLink exact="true" className={"portfolioNav"} to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink exact="true" className={"blogNav"} to={{pathname: "//preshmalinetpereira.wordpress.com"}}>Blog</NavLink></li>
            <li><NavLink exact="true" className={"contactNav"} to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
