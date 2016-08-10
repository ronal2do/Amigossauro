import React from 'react';


import Item from './Item';
import Video from './Video';

  	const videoIdA = "VadjvlvBDxE";
	const videoIdB = "VVS2tqpXiZ0";
	const videoIdC = "c_yomf6U35A";
	const videoIdD = "WIksma_8Ka4";
	const videoIdE = "hsfA4kTdltE";
	const videoIdF = "bgVz5fJeI40";
	const AUTOPLAY = "?autoplay=1";

export default class Videos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        videoId: props.initial
    };

    this.onChangeVideo  = this.onChangeVideo.bind(this);
    this.onChangeVideoB = this.onChangeVideoB.bind(this);
    this.onChangeVideoC = this.onChangeVideoC.bind(this);
    this.onChangeVideoD = this.onChangeVideoD.bind(this);
    this.onChangeVideoE = this.onChangeVideoD.bind(this);
    this.onChangeVideoF = this.onChangeVideoD.bind(this);
}

  onChangeVideo(e) {
	e.preventDefault()
	this.setState({videoId: videoIdA + AUTOPLAY})
  }
  onChangeVideoB(e) {
	e.preventDefault()
	this.setState({videoId: videoIdB + AUTOPLAY})
  }
  onChangeVideoC(e) {
	e.preventDefault()
	this.setState({videoId: videoIdC + AUTOPLAY})
  }
  onChangeVideoD(e) {
	e.preventDefault()
	this.setState({videoId: videoIdD + AUTOPLAY})
  }
  onChangeVideoE(e) {
	e.preventDefault()
	this.setState({videoId: videoIdE + AUTOPLAY})
  }
  onChangeVideoF(e) {
	e.preventDefault()
	this.setState({videoId: videoIdF + AUTOPLAY})
  }

  render() {    	
    return (
	    <div className="col-sm-12 text-center Azul">
	    
	    	<h2>{this.props.titulo}</h2>
	     		{this.props.children}
			<Video videoId={this.state.videoId} />


	    </div>
    );
  }
}
Videos.propTypes = { initial: React.PropTypes.string };
Videos.defaultProps = { initial: videoIdF };