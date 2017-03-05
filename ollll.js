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
  const videoIdG = "uzAilH_UT1A";
  const videoIdH = "_yoR5hE8y4Y";
	const videoIdI = "_7qCxuBylK4";

  const videos = [
    {'id': 'VadjvlvBDxE' },
    {'id': 'VVS2tqpXiZ0' },
    {'id': 'c_yomf6U35A' },
    {'id': 'WIksma_8Ka4' },
    {'id': 'hsfA4kTdltE' },
    {'id': 'bgVz5fJeI40' },
    {'id': 'uzAilH_UT1A' },
    {'id': '_yoR5hE8y4Y' },
    {'id': '_7qCxuBylK4' },
]

	const AUTOPLAY = "?autoplay=1";

export default class Videos extends React.Component {

  state = {
      videoId: props.initial
  };

  onChangeVideo = (e, video) => {
  	e.preventDefault()
  	this.setState({videoId: video.id + AUTOPLAY})
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
          {videos.map((video) => {
            <div className="Itens" key={video.id}>
 		       	 	<a href='' onClick={this.onChangeVideo(video)}>
 			       	 	<Item
 			            	nome="Hora de dormir"
 							      id={videoIdF}
 			       	 	/>
 		       	 	</a>
 		       	</div>
          })}


 			</OwlCarousel>

	    </div>
    );
  }
}
Videos.propTypes = { initial: React.PropTypes.string };
Videos.defaultProps = { initial: videoIdF };
