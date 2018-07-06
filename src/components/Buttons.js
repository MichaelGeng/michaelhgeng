import React, { Component } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap';

class Buttons extends Component {
  constructor(props){
    super(props);
    this.state = {
      bio: false,
      exp: false
    };
    this.handleBioClick = this.handleBioClick.bind(this);
    this.handleExpClick = this.handleExpClick.bind(this);
  }
    handleBioClick(){
      this.setState(previousState => {
        return {
          bio: !previousState.bio
        };
      });
    }

    handleExpClick(){
      this.setState(previousState => {
        return {
          exp: !previousState.exp
        };
      });
    }

  render() {
    return (
      <div>
        <ButtonToolbar>
          {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
          <Button bsStyle="primary" onClick={this.handleBioClick.bind(this)} active>
            {this.state.bio ? "show" : "not show"}
          </Button>

          {/* Indicates a successful or positive action */}
          <Button bsStyle="success" onClick={this.handleExpClick.bind(this)} active>
            {this.state.exp ? "exp" : "not exp"}
          </Button>

          {/* Contextual button for informational alert messages */}
          <Button bsStyle="info" active>Skills</Button>

          {/* Indicates caution should be taken with this action */}
          <Button bsStyle="warning" active>Contact</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Buttons;