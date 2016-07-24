import React from 'react';

import Social from '../Social';
import Box from '../Box';
import Newsletter from '../Newsletter/Newsletter';

export default class Blog extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="pull-right"> 
          <Social />
        </div>
        <div className="row">
          <Box 
            titulo="Blog"
            src="home"
          />
        </div>

        <div className="row">
          <Newsletter className="col-sm-12" style={{padding:'0px'}}/>
        </div>

      </div>
    );
  }
}
