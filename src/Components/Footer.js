import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return <li key={network.name}><a target="_blank" href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
            {/* {this.props.data.social.map(x => */}
               {networks}
            {/* //   <li key={x.name}><a href={x.url}><i className={x.className}></i></a></li>
            // )}; */}
            </ul>

            <ul className="copyright">
              <li />
              <li>&copy; Copyright 2022 Preshma Linet Pereira</li>
              <li/>
            </ul>

          </div>
          {/* <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div> */}
        </div>
      </footer>
    );
  }
}

export default Footer;
