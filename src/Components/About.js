import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }

      return (
         <section id="about">
            <section class="u-align-center u-clearfix u-section-1" id="carousel_51e4">
               <div class="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-sheet-1">
                  <div class="u-expanded-width-xs u-image u-image-circle u-image-1"></div>
                  <div class="u-expanded-width u-palette-2-light-2 u-shape u-shape-rectangle u-shape-1"></div>
                  <h2 class="u-text u-text-1">About Me</h2>
                  <p class="u-text u-text-2"> Under Construction...</p>
               </div>
            </section>
            {/* <div class="row about-content">

            <div class="col-six tab-full left">
                <h3>Howdy!</h3>

                <p>Lorem ipsum Ut eiusmod ex magna sit dolor esse adipisicing minim ad cupidatat eu veniam nostrud mollit laboris sunt magna velit culpa consectetur nostrud consectetur labore sed do.</p>

                <p>
                Lorem ipsum Nisi officia Duis irure voluptate dolor commodo pariatur occaecat aliquip adipisicing voluptate Ut in qui ea sint occaecat in commodo in in in incididunt ut sunt in Ut Duis in ut ex qui anim cupidatat cupidatat ex in non dolore labore ea amet cillum ea qui dolor nisi sed velit mollit exercitation ex fugiat labore in deserunt culpa laborum culpa anim dolore laboris amet irure mollit proident velit fugiat aute ea elit magna consequat qui officia quis elit Duis dolor esse cupidatat tempor proident voluptate aliqua ex cupidatat do eiusmod veniam irure laborum ut magna nostrud dolore ullamco commodo elit sit magna aliqua laborum veniam officia dolor.	
                </p>
            </div>

            <div class="col-six tab-full right">
                <h3>I've Got Some skills.</h3>

                <ul class="skill-bars">
                    <li>
                    <div class="progress percent90"><span>90%</span></div>
                    <strong>HTML5</strong>
                    </li>
                    <li>
                    <div class="progress percent85"><span>85%</span></div>
                    <strong>CSS3</strong>
                    </li>
                    <li>
                    <div class="progress percent70"><span>70%</span></div>
                    <strong>JQuery</strong>
                    </li>
                    <li>
                    <div class="progress percent95"><span>95%</span></div>
                    <strong>PHP</strong>
                    </li>
                    <li>
                    <div class="progress percent75"><span>75%</span></div>
                    <strong>Wordpress</strong>
                    </li>   
                    <li>
                    <div class="progress percent90"><span>90%</span></div>
                    <strong>Angular JS</strong>
                    </li>   
                </ul>
            </div>

        </div>  */}
        {/* <!-- end about-content --> */}

        <div class="row about-content about-content--buttons">

            <div class="col-six tab-full left">
                <a href="#0" class="btn btn--primary full-width">Download My CV</a>
            </div>
            <div class="col-six tab-full right">
                <a href="#0" class="btn full-width">Hire Me Now</a>
            </div>

        </div>
            {/* <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Preshma Linet Pereira Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>

                  <p>{bio}</p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name}</span><br />
                           <span>
                              {street}<br />
                              {city} {state}, {zip}
                           </span><br />
                           <span>{phone}</span><br />
                           <span>{email}</span>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <a href={resumeDownload} download className="button"><i className="fa fa-download"></i>Download Resume</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div> */}

         </section>
      );
   }
}

export default About;
