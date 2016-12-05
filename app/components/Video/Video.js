import React from 'react';

export default class Video extends React.Component {

  render() {
    return (
	      <div className="text-center">
		       	<div className="embed-responsive embed-responsive-16by9">
				    <iframe 
				    	className="embed-responsive-item" 
				    	src={'//www.youtube.com/embed/' + this.props.videoId}
				    ></iframe>
				</div>
	      </div>
    );
  }
}