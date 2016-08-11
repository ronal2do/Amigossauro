import React from 'react';

import OwlCarousel from 'react-owl-carousel';

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
			<OwlCarousel 
        slideSpeed={300} 
        items={4} 
        navigation 
        navigationText={['<', '>']} 
        style={{padding:'35px 25px 0px'}} 
        autoPlay
        >
 			      <div className="Itens">
 		       	 	<a href='' onClick={this.onChangeVideoF}>
 			       	 	<Item
 			            	nome="Hora de dormir"
 							      id={videoIdF}
 			       	 	/>
 		       	 	</a>
 		       	</div>
 		       	<div className="Itens">
 		       	 	<a href='' onClick={this.onChangeVideoE}>
 			       	 	<Item
 			            	nome="Hora de dormir"
 							      id={videoIdE}
 			       	 	/>
 		       	 	</a>
 		       	</div>
 		       	<div className="Itens">
 		       		<a href='' onClick={this.onChangeVideo}>
 			       	 	<Item
 			            	nome="Amigossauro"
 							      id={videoIdA}
 			       	 	/>	
 		       	 	</a>
 		       	</div>
 		       	<div className="Itens"> 
 		       	 	<a href='' onClick={this.onChangeVideoB}>
 			       	 	<Item
 			            	nome="Você parece um dinossauro"
 							      id={videoIdB}
 			       	 	/>	
 		       	 	</a>
 		       	</div>
 		       	<div className="Itens">
 		       	 	<a href='' onClick={this.onChangeVideoC}>
 			       	 	<Item
 			            	nome="Cheirinho bom"
 							      id={videoIdC}
 			       	 	/>
 		       	 	</a>
 		       	</div>
 		       	<div className="Itens">
 		       	 	<a href='' onClick={this.onChangeVideoD}>
 			       	 	<Item
 			            	nome="Hora de dormir"
 							      id={videoIdD}
 			       	 	/>
 		       	 	</a>
 		       	</div>
 			</OwlCarousel>

	    </div>
    );
  }
}
Videos.propTypes = { initial: React.PropTypes.string };
Videos.defaultProps = { initial: videoIdF };