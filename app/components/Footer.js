import React from 'react';
import Social from './Social';

class Footer extends React.Component {
  render() {
    return (
      <footer>
      	<div className="pull-left" style={{ paddingTop:'22em' }}>

          <Social /> 
          <p>© 2016 Amigossauro. All Rights Reserved.</p>
        </div>
       
      </footer>
    );
  }
}

export default Footer;
