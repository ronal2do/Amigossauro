import React from 'react';

import Video from './Video';
import Lista from './Lista';

class Videos extends React.Component {
  render() {
    return (
	    <div className="col-sm-12 text-center Azul">
	    	<div className="Padding"></div>
	    	<h2 style={{paddingTop: '40px'}}>Nossos Vídeos</h2>
	       	<Video />
	       	<Lista />
	    </div>
    );
  }
}

export default (Videos);