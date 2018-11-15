import React, { Component } from 'react'
import ReactRevealText from 'react-reveal-text';
import './Quote.css';

class Quote extends Component {
    constructor() {
        super();
        this.state = { show_quote: false, show_button: false };
      }
    
      componentDidMount() {
        setTimeout(() => {
          this.setState({ show_quote: true });
        }, 9000);
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
            </div>
        );
      }
}

export default Quote;