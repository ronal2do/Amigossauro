import React from 'react';

import Video from './Video';
import Item from './Item';

const ID = "VadjvlvBDxE";

class Videos extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      videoId: videoIdA,
      player: null,
    };

	this.onReady = this.onReady.bind(this);
    this.onChangeVideo = this.onChangeVideo.bind(this);
  }

  onChangeVideo() {
    this.setState({
      videoId: this.state.videoId === videoIdA ? videoIdB : videoIdA,
    });
  }

 onReady(event) {
    console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`); // eslint-disable-line
    this.setState({
      player: event.target,
    });
  }

  render() {
    return (
	    <div className="col-sm-12 text-center Azul">
	    	<div className="Padding"></div>
	    	<h2 style={{paddingTop: '40px'}}>Nossos Vídeos </h2>
	        <Video id={ID} />
	       	<div className="text-center">
		      	<br />

		       	<div className="col-sm-4">
		       	 	<Item
		       	 		onClick={this.onChangeVideo}
		            	nome="meu nome"
						src="http://img.youtube.com/vi/VVS2tqpXiZ0/default.jpg"
		       	 	/>
		       	</div>

		       	<div className="col-sm-4">
		       	 	<Item
		       	 		onClick={this.onChangeVideo}
		            	nome="meu nome 2"
						src="http://img.youtube.com/vi/hsfA4kTdltE/default.jpg"
		       	 	/>	
		       	</div>

		       	<div className="col-sm-4">
		       	 	<Item
		       	 		onClick={this.onChangeVideo}
		            	nome="meu nome 3"
						src="http://img.youtube.com/vi/c_yomf6U35A/default.jpg"
		       	 	/>
		       	</div>

	 			<br />
      		</div>

	    </div>
    );
  }
}

export default (Videos);