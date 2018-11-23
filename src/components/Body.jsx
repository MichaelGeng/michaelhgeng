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
                        <li><span id={this.state.show_home} onClick={(e) => {this.navClick(e)}}>Home</span></li>
                        <li><span id={this.state.show_about} onClick={(e) => {this.navClick(e)}}>About</span></li>
                </ul>
                 <div id = "bodyContainer">

                    <div id = "buttons">
                            <Button style={{"height": "100%", "width": "23%", "minWidth": "46px"}} onClick={this.handleHomeClick} outline color="primary" active>Home</Button>{' '}
                            <Button style={{"height": "100%", "width": "23%", "minWidth": "46px"}} onClick={this.handleStoryClick} outline color="secondary">About</Button>{' '}
                            <Button style={{"height": "100%", "width": "23%", "minWidth": "46px"}} onClick={this.handleResumeClick} outline color="warning">Resume</Button>{' '}
                            <Button style={{"height": "100%", "width": "23%", "minWidth": "46px"}} onClick={this.handleContactClick} outline color="success">Contact</Button>{' '}
                    </div>
                    <div id = "content">
                        { this.state.show_home ? <Home /> : null}
                        { this.state.show_about ? <About /> : null}
                        { this.state.show_resume ? <Chart /> : null}
                        { this.state.show_contact ? <Contact /> : null}
                    </div>   
                {/* </Delay> */}
                </div>        
            </div>
        )
    }
}

export default Body;