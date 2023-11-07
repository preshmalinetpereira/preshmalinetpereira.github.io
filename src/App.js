import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return ( 
      <div className="App">
        <BrowserRouter> 
        <Header  />
        <Routes>  
              <Route path="/" element={<Home data={this.state.resumeData.main}/>} /> 
              <Route path="/about" element={<About data={this.state.resumeData.main}/>} />
              {/* <Route path="/resume" element={() => { window.location.href = 'https://linetpreshma.notion.site/linetpreshma/Preshma-Linet-Pereira-Resume-3e933c388bf14365b01f4e01f24737dc'; return null;}} />  */}
              {/* <Route path="/resume" element={<Resume/>} /> */}
              <Route path="/portfolio" element={<Portfolio data={this.state.resumeData.portfolio}/>} />
              {/* <Route path="/blog" element={() => { window.location.href = 'https://preshmalinetpereira.wordpress.com'; return null;}} /> */}
              <Route path="/contact" element={<Contact data={this.state.resumeData.main}/>} />
        </Routes>
        </BrowserRouter>
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
