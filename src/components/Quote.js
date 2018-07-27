import React, { Component } from 'react'
import ReactRevealText from 'react-reveal-text';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Delay from 'react-delay';

class Quote extends Component {
    constructor() {
        super();
        this.state = { show_quote: false, show_button: false };
      }
    
      componentDidMount() {
        setTimeout(() => {
          this.setState({ show_quote: true });
        }, 2000);
        setTimeout(() => {
            this.setState({ show_button: true });
        }, 4000);
      }
    
      render() {
        const textStyles = {
          color: 'black',
          fontSize: '24px',
          lineHeight: '36px',
          fontFamily: 'sans-serif',
          textAlign: 'center',
          paddingLeft: '1em', // to compensate for letter spacing
        };
        return (
            <div>
                <div style={textStyles}>
                    <ReactRevealText show={this.state.show_quote}>
                    "I can accept failure, everyone fails at something. But I can't accept not trying." - Michael Jordan
                    </ReactRevealText>
                </div>
                <Delay wait={4000}>
                    <ButtonToolbar>
                        <Button bsStyle="primary" bsSize="large" active>
                            My Story
                        </Button>
                        <Button bsSize="large" active>
                            Resume
                        </Button>
                    </ButtonToolbar>
                </Delay>
            </div>
        );
      }
}

export default Quote;