import React, { Component } from 'react'
import About from './About';
import Particles from 'react-particles-js';
import Contact from './Contact';
import Home from './Home';
import Typed from './Typed';
import './Body.css';
import Favicon from 'react-favicon';
import ReactLoading from 'react-loading';

// Inspiration: https://github.com/eneax/eneax.github.io/blob/master/src/layouts/index.js
const particlesConfig = {
  "particles": {
    "number": {
      "value": 104,
      "density": {
        "enable": true,
        "value_area": 1025.8919341219544
      }
    },
    "color": {
      "value": "#3498db"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3.945738208161363,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#3498db",
      "opacity": 0.39457382081613634,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "remove"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 167.83216783216784,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
  

class Body extends Component {
    constructor() {
        super();
        this.state = { show_home: "active home", show_about: "about", nav_class: "topnav" };

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
      console.log(document.getElementById("mySidenav").style.transform);

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
            <div id = "parent">
              <ReactLoading type={'cylon'} color="#3498db" />
              <Favicon url = "/images/MG.png" />

                <div id="mySidenav">
                  <div id="inner">
                    <li className="firstSide"><span id={this.state.show_home} onClick={this.sideClick}>Home</span></li>
                    <li><span id={this.state.show_about}  onClick={this.sideClick}>About</span></li>
                  </div>
                </div>

                <div id ="other">
                 <ul className={this.state.nav_class}>
                    <li><span id={this.state.show_home} onClick={this.navClick}>Home</span></li>
                    <li><span id={this.state.show_about} onClick={this.navClick}>About</span></li>
                    <li className="icon"><i onClick={this.responsiveView} className="fa fa-bars"></i></li>
                </ul>

                <div id = "header">
                    <div id = "textEntry">
                      <h1>Michael Geng</h1>
                      <h3>University of Michigan Alum. Passionate about Engineering, Traveling, and Fitness.</h3>
                      <h3><b>This site is currently undergoing reconstruction as of 11/29/18.</b></h3>
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
            </div>
        )
    }
}

export default Body;