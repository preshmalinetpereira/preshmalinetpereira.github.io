import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
   
    render(){
        if(this.props.data){
            var name = this.props.data.name;
            var occupation= this.props.data.occupation;
            var description= this.props.data.description;
            var city= this.props.data.address.city;
            var state= this.props.data.address.state;
            var resumeDownload = this.props.data.resumedownload;
            var networks= this.props.data.social.map(function(network){
              return <li key={network.name}><a target={"_blank"} href={network.url}><i className={network.className}></i></a></li>
            })
          }

          return(
            <section id="home">
            <div className="row banner">
            <div className="banner-text">
               <h2>Hey there!</h2>
               <h1 className="responsive-headline"> I'm {name}.</h1>
               <h3> A <span>{occupation}</span>, 
                based in {city}, {state}. </h3>
                <h3>{description}</h3>
                <div class="home-content__buttons">
                    <a href={resumeDownload} download className=" btn btn--stroke">
                    <i className="fa fa-download"></i> Download CV
                    </a>
                    {/* <a href="/about" className=" "> */}
                    <Link className="btn btn--stroke" to="/about"> More About Me</Link>
                    {/* </a> */}
                </div>
               <hr />
               <ul className="social">
                  {networks}
               </ul>
            </div>
         </div>
         </section>
          )
    }
}
export default Home;