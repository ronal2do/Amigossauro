import React from 'react';

import Item from './Item';
import Video from './Video';

  const videoIdA = "VadjvlvBDxE";
	const videoIdB = "VVS2tqpXiZ0";
	const videoIdC = "c_yomf6U35A";
	const videoIdD = "WIksma_8Ka4";
	const videoIdE = "hsfA4kTdltE";
  const videoIdF = "bgVz5fJeI40";
  const videoIdG = "nmw6nnQ9OnU";
	const videoIdH = "tvZQxAnMrX4";

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
    this.onChangeVideoE = this.onChangeVideoE.bind(this);
    this.onChangeVideoF = this.onChangeVideoF.bind(this);
    this.onChangeVideoG = this.onChangeVideoG.bind(this);
    this.onChangeVideoH = this.onChangeVideoH.bind(this);
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
  onChangeVideoG(e) {
  	e.preventDefault()
  	this.setState({videoId: videoIdG + AUTOPLAY})
  }
  onChangeVideoH(e) {
  	e.preventDefault()
  	this.setState({videoId: videoIdH + AUTOPLAY})
  }

  render() {
    return (
	    <div className="col-sm-12 text-center Azul">
	    	<h2>{this.props.titulo}</h2>
	     	{this.props.children}
			  <Video videoId={this.state.videoId} />
  			<div className="owl-carousel" style={{padding:'25px 25px 0px'}}>
          <div className="Itens">
            <a href onClick={this.onChangeVideoH}>
              <Item
                  nome="Na era dos Dinossauros"
                  id={videoIdH}
              />
            </a>
          </div>
          <div className="Itens">
            <a href onClick={this.onChangeVideoG}>
              <Item
                  nome="Dia de chuva"
                  id={videoIdG}
              />
            </a>
          </div>
          <div className="Itens">
         	 	<a href onClick={this.onChangeVideoF}>
  	       	 	<Item
  	            	nome="Hora de dormir"
  					      id={videoIdF}
  	       	 	/>
         	 	</a>
         	</div>
         	<div className="Itens">
         	 	<a href onClick={this.onChangeVideoE}>
  	       	 	<Item
  	            	nome="Hora de dormir"
  					id={videoIdE}
  	       	 	/>
         	 	</a>
         	</div>
         	<div className="Itens">
         		<a href onClick={this.onChangeVideo}>
  	       	 	<Item
  	            	nome="Amigossauro"
  					id={videoIdA}
  	       	 	/>
         	 	</a>
         	</div>
         	<div className="Itens">
         	 	<a href onClick={this.onChangeVideoB}>
  	       	 	<Item
  	            	nome="Você parece um dinossauro"
  					      id={videoIdB}
  	       	 	/>
         	 	</a>
         	</div>
         	<div className="Itens">
         	 	<a href onClick={this.onChangeVideoC}>
  	       	 	<Item
  	            	nome="Cheirinho bom"
  					      id={videoIdC}
  	       	 	/>
         	 	</a>
         	</div>
          <div className="Itens">
         	 	<a href onClick={this.onChangeVideoD}>
  	       	 	<Item
  	            	nome="Cheirinho bom"
  					      id={videoIdD}
  	       	 	/>
         	 	</a>
         	</div>
  			</div>
	    </div>
    );
  }
}
Videos.propTypes = { initial: React.PropTypes.string };
Videos.defaultProps = { initial: videoIdH };
