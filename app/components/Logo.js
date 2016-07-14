import React from 'react';
import { IndexLink } from 'react-router';

class Logo extends React.Component {
  render() {
    return (
      <div className="Logo">
       	<IndexLink to="/"><img src="/images/logo_amigossauro.png" alt="" /></IndexLink>       	
      </div>
    );
  }
}

export default (Logo);