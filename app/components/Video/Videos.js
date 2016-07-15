import React from 'react';

import Video from './Video';
import Lista from './Lista';
import Youtube from '../Galeria/Galeria';

data = [{"id":"VadjvlvBDxE"},{"id":"hsfA4kTdltE"},{"id":"c_yomf6U35A"},{"id":"DfRibIkjhew"}]

class Videos extends React.Component {

  render() {
    return (
	    <div className="col-sm-12 text-center Azul">
	    	<div className="Padding"></div>
	    	<h2 style={{paddingTop: '40px'}}>Nossos Vídeos</h2>
	        <Youtube data={data} />
	       	<Lista />
	    </div>
    );
  }
}

export default (Videos);