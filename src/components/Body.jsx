import React, { Component } from 'react'
import About from './About';
import Particles from 'react-particles-js';
import Contact from './Contact';
import Home from './Home';
import Typed from './Typed';
import './Body.css';
import Favicon from 'react-favicon';
import { ClipLoader } from 'react-spinners';
import particlesConfig from './particles';

class Body extends Component {
    constructor() {
        super();
        this.state = { show_home: "active home", show_about: "about", nav_class: "topnav", loading: true };

        this.navClick = this.navClick.bind(this);
        this.sideClick = this.sideClick.bind(this);
        this.responsiveView = this.responsiveView.bind(this);
    }

    navClick(e){
        if (e.target.id === this.state.show_home){
            this.setState({show_home: "active home", show_about: "about"});
        } else {
            this.setState({show_home: "home", show_about: "active about"});
        }
    }

    sideClick(e){
      document.getElementById("mySidenav").style.transform = "translate(100%)";
      document.getElementById("other").style.transform = "translate(0%)";

      if (e.target.id === this.state.show_home){
        this.setState({show_home: "active home", show_about: "about"});
      } else {
        this.setState({show_home: "home", show_about: "active about"});
      }
    }

    responsiveView(){
      //initial case
      if (document.getElementById("mySidenav").style.transform === "" || document.getElementById("mySidenav").style.transform === "translate(100%)"){
        document.getElementById("mySidenav").style.transform = "translate(0%)";
        document.getElementById("other").style.transform = "translate(-30%)";
      } else {
        document.getElementById("mySidenav").style.transform = "translate(100%)";
        document.getElementById("other").style.transform = "translate(0%)";
      }
    }
    render() {
        return (
            <div id="parent">
              <Favicon url = "/images/MG.png" />
              <div className="elementToFadeInAndOut"><ClipLoader sizeUnit={"px"} size={300} color={'#123abc'} /></div>

              <div className="fadeIn">
                {/* Side Nav */}
                <div id="mySidenav">
                  <div id="inner">
                    <li className="firstSide"><span id={this.state.show_home} onClick={this.sideClick}>Home</span></li>
                    <li><span id={this.state.show_about}  onClick={this.sideClick}>About</span></li>
                  </div>
                </div>
                {/* Side Nav */}'
                
                {/* Other */}
                <div id ="other">
                  <ul className={this.state.nav_class}>
                    <li><span id={this.state.show_home} onClick={this.navClick}>Home</span></li>
                    <li><span id={this.state.show_about} onClick={this.navClick}>About</span></li>
                    <li className="icon"><i onClick={this.responsiveView} className="fa fa-bars"></i></li>
                  </ul>

                  <div id = "header">
                    <div id = "textEntry">
                      <p>Michael Geng</p>
                      <p>University of Michigan Alum. Interested in Engineering, Traveling, and Fitness.</p>
                      <Typed />
                    </div>
                    <Particles
                        height={300} style={{top: 0, position: "absolute"}} params={particlesConfig}
                    />
                  </div>

                  <div id = "bodyContainer">
                    <div id = "content">
                      { this.state.show_home === "active home" ? <Home /> : null}
                      { this.state.show_about === "active about" ? <About /> : null}
                    </div>   
                  </div>

                  <div id = "footer">
                    <Contact />
                  </div>  
                </div>
                {/* Other End */}
              </div>
            </div>
        )
    }
}

export default Body;