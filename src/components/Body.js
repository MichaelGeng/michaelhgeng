import React, { Component } from 'react'
import Delay from 'react-delay';
import About from './About';
import Chart from './Chart';
import Contact from './Contact';

class Body extends Component {
    constructor() {
        super();
        this.state = { show_home: true, show_about: false, show_resume: false, show_contact: false };

        this.handleHomeClick = this.handleHomeClick.bind(this);
        this.handleStoryClick = this.handleStoryClick.bind(this);
        this.handleResumeClick = this.handleResumeClick.bind(this);
        this.handleContactClick = this.handleContactClick.bind(this);

    }
    // TODO: Have it load components instead of variables
    handleHomeClick(){
        this.setState({show_home: true, show_about: false, show_resume: false, show_contact: false});
    }
    handleStoryClick(){
        this.setState({show_home: false, show_about: true, show_resume: false, show_contact: false});
    }
    handleResumeClick(){
        this.setState({show_home: false, show_about: false, show_resume: true, show_contact: false});
    }
    handleContactClick(){
        this.setState({show_home: false, show_about: false, show_resume: false, show_contact: true});
    }
    render() {
        return (
            <div>
                <Delay wait={4000}>
                    <button onClick={this.handleHomeClick}>Home</button>
                    <button onClick={this.handleStoryClick}>About</button>
                    <button onClick={this.handleResumeClick}>Resume</button>
                    <button onClick={this.handleContactClick}>Contact</button>
                </Delay>
                <p><b>This site is currently undergoing reconstruction 11/12/18</b></p>
                { this.state.show_about ? <About /> : null}
                { this.state.show_resume ? <Chart /> : null}
                { this.state.show_contact ? <Contact /> : null}
            </div>
        )
    }
}

export default Body;