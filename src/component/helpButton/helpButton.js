import React, { Component } from 'react';
import './helpButton.css';
import Localization from '../../localization/localization';

class HelpButton extends Component {
  onClick = () => {
      this.props.toggleHelpState();
  }
  
  render() {
    return (
      <span className='help' onClick={this.onClick}>
        {Localization.getLocalizedString().helpButton}
      </span>
    );
  }
}

export default HelpButton;