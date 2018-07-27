import React, { Component } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap';


class Buttons extends Component {
  render() {
    return (
      <div>
        <ButtonToolbar>
          {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
          <Button bsStyle="primary">Bio</Button>

          {/* Indicates a successful or positive action */}
          <Button bsStyle="success">Experience</Button>

          {/* Contextual button for informational alert messages */}
          <Button bsStyle="info">Skills</Button>

          {/* Indicates caution should be taken with this action */}
          <Button bsStyle="warning">Contact</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Buttons;