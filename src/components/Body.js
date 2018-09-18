import React, { Component } from 'react'
import './Bio.css'
import Delay from 'react-delay';

class Body extends Component {
    constructor() {
        super();
        this.state = { show_about: false, show_resume: false, show_contact: false };

        this.handleStoryClick = this.handleStoryClick.bind(this);
        this.handleResumeClick = this.handleResumeClick.bind(this);
        this.handleContactClick = this.handleContactClick.bind(this);

    }
    // TODO: Have it load components instead of variables
    handleStoryClick(){
        this.setState({show_about: !this.state.show_about});
    }
    handleResumeClick(){
        this.setState({show_resume: !this.state.show_resume})
    }
    handleContactClick(){
        this.setState({show_contact: !this.state.show_contact})
    }
    render() {
        return (
            <div>
                <Delay wait={4000}>
                    <button onClick={this.handleStoryClick}>My Story</button>
                    <button onClick={this.handleResumeClick}>Resume</button>
                    <button onClick={this.handleContactClick}>Contact</button>
                </Delay>
                <p>This site is currently undergoing reconstruction 9/18/18</p>
                { this.state.show_about ? <p>it works</p> : null}
                { this.state.show_resume ? <p>resume stufff</p> : null}
                { this.state.show_contact ? <p>Contact information</p> : null}
            </div>
        )
    }
}

export default Body;