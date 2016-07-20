import React from 'react';

import Item from './Item';
import Video from './Video';

  	const videoIdA = "VadjvlvBDxE";
	const videoIdB = "VVS2tqpXiZ0";
	const videoIdC = "c_yomf6U35A";
	const videoIdD = "WIksma_8Ka4";
  
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
}

  onChangeVideo(e) {
	e.preventDefault()
	this.setState({videoId: videoIdA})
	// console.log(this.state)
  }
  onChangeVideoB(e) {
	e.preventDefault()
	this.setState({videoId: videoIdB})
	// console.log(this.state)
  }
  onChangeVideoC(e) {
	e.preventDefault()
	this.setState({videoId: videoIdC})
	// console.log(this.state)
  }
  onChangeVideoD(e) {
	e.preventDefault()
	this.setState({videoId: videoIdD})
	// console.log(this.state)
  }
  render() {    	
    return (

	    <div className="col-sm-12 text-center Azul">

	    	<h2 style={{paddingTop: '40px'}}>Nossos Vídeos</h2>
	     
			<Video videoId={this.state.videoId} />

	       	<div className="text-center" style={{marginBottom:'15px', paddingTop:'15px'}}>

		       	<div className="col-sm-3 Itens">
		       		<a href='' onClick={this.onChangeVideo}>
			       	 	<Item
			            	nome="meu nome Ed"
							id={videoIdA}
			       	 	/>	
		       	 	</a>
		       	</div>

		       	<div className="col-sm-3 Itens"> 
		       	 	<a href='' onClick={this.onChangeVideoB}>
			       	 	<Item
			            	nome="meu nome 2"
							id={videoIdB}
			       	 	/>	
		       	 	</a>
		       	</div>

		       	<div className="col-sm-3 Itens">
		       	 	<a href='' onClick={this.onChangeVideoC}>
			       	 	<Item
			            	nome="meu nome 3"
							id={videoIdC}
			       	 	/>
		       	 	</a>
		       	</div>
		       	<div className="col-sm-3 Itens">
		       	 	<a href='' onClick={this.onChangeVideoD}>
			       	 	<Item
			            	nome="meu nome 3"
							id={videoIdD}
			       	 	/>
		       	 	</a>
		       	</div>

      		</div>

	    </div>
    );
  }
}
Videos.propTypes = { initial: React.PropTypes.String };
Videos.defaultProps = { initial: videoIdA };