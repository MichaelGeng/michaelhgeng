import React, { Component } from 'react'
import About from './About';
import Particles from 'react-particles-js';
import Contact from './Contact';
import Home from './Home';
import Typed from './Typed';
import './Body.css';
import Favicon from 'react-favicon';

// Inspiration: https://github.com/eneax/eneax.github.io/blob/master/src/layouts/index.js
const particlesConfig = {
    "particles": {
      "number": {
        "value": 25,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#070000"
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
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#070000",
        "opacity": 0.4,
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
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
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
          "distance": 200,
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
        this.state = { show_intro: true, show_home: "active home", show_about: "about", nav_class: "topnav" };

        this.navClick = this.navClick.bind(this);
        this.responsiveView = this.responsiveView.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({ show_intro: false });
        }, 7000);
      }

    navClick(e){
        if (e.target.id === this.state.show_home){
            this.setState({show_home: "active home", show_about: "about"});
        } else {
            this.setState({show_home: "home", show_about: "active about"});
        }
    }

    responsiveView(){
        console.log('before: ' + this.state.nav_class);
        if (this.state.nav_class === "topnav") {
            this.setState({nav_class: "topnav responsive"})
        } else {
            this.setState({nav_class: "topnav"})
        }
        console.log('after: ' + this.state.nav_class);
    }
    render() {
        return (
            <div id = "parent">
                <Favicon url = "/images/MG.png" />
                <div id = "intro">{ this.state.show_intro ? <Typed /> : null }</div>
                 {/* <Delay wait={1000}> */}
                 <ul className={this.state.nav_class}>
                        <li><span id={this.state.show_home} onClick={this.navClick}>Home</span></li>
                        <li><span id={this.state.show_about} onClick={this.navClick}>About</span></li>
                        <li className="icon"><i onClick={this.responsiveView} className="fa fa-bars"></i></li>
                </ul>
                <div id = "header">
                    <p>All header infoo</p>
                    <Particles
                        params={particlesConfig}
                    />

                </div>
                 <div id = "bodyContainer">
                    <div id = "content">
                        { this.state.show_home === "active home" ? <Home /> : null}
                        { this.state.show_about === "active about" ? <About /> : null}
                    </div>   
                {/* </Delay> */}
                </div>
                <div id = "footer">
                    <Contact />
                </div>        
            </div>
        )
    }
}

export default Body;