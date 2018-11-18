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
        this.state = { show_intro: true, show_home: true, show_about: false, show_resume: false, show_contact: false };

        this.handleHomeClick = this.handleHomeClick.bind(this);
        this.handleStoryClick = this.handleStoryClick.bind(this);
        this.handleResumeClick = this.handleResumeClick.bind(this);
        this.handleContactClick = this.handleContactClick.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({ show_intro: false });
        }, 7000);
      }

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
            <div id = "parent">
                <Favicon url = "/images/MG.png" />
                <div id = "intro">{ this.state.show_intro ? <Typed /> : null }</div>
                <Delay wait={1000}>
                    <div id = "buttons">
                            <Button style={{"height": "100%", "width": "23%", "minWidth": "46px"}} onClick={this.handleHomeClick} outline color="primary">Home</Button>{' '}
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
                </Delay>         
            </div>
        )
    }
}

export default Body;