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
        this.state = { show_intro: true, show_home: "active home", show_about: "about" };

        this.navClick = this.navClick.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({ show_intro: false });
        }, 7000);
      }

    navClick(e){
        console.log('clicked on about');

        console.log(e.target.id);

        if (e.target.id === this.state.show_home){
            console.log('home is active');
            this.setState({show_home: "active home", show_about: "about"});
        } else {
            this.setState({show_home: "home", show_about: "active about"});
        }
    }
    render() {
        let home = this.state.show_home;
        let about = this.state.show_about;
        return (
            <div id = "parent">
                <Favicon url = "/images/MG.png" />
                <div id = "intro">{ this.state.show_intro ? <Typed /> : null }</div>
                 {/* <Delay wait={1000}> */}
                 <ul>
                        <li><span id={this.state.show_home} onClick={this.navClick}>Home</span></li>
                        <li><span id={this.state.show_about} onClick={this.navClick}>About</span></li>
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