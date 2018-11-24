import React, { Component } from 'react'
import Delay from 'react-delay';
import About from './About';
import Chart from './Chart';
import Contact from './Contact';
import Home from './Home';
import Typed from './Typed';
import './Body.css';
import { Button } from 'reactstrap';
import Favicon from 'react-favicon';

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
        if (this.state.nav_class == "topnav") {
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