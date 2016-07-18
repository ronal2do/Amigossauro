import React from 'react';

class Video extends React.Component {
  
  render() {
    return (
	      <div className="text-center">
		       	<div className="embed-responsive embed-responsive-16by9" style={{margin:'15px'}}>
				    <iframe 
				    	className="embed-responsive-item" 
				    	src={'//www.youtube.com/embed/' + this.props.id}
				    ></iframe>
				</div>
	      </div>
    );
  }
}

export default (Video);