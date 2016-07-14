import React from 'react';
import ReactDOM from 'react-dom';

const videoIdA = 'XxVg_s8xAms';
const videoIdB = '-DX3vJiqxm4';

class Video extends React.Component {

  render() {
    return (
	      <div className="text-center">
		       	<div className="embed-responsive embed-responsive-16by9">
				    <iframe className="embed-responsive-item" src="//www.youtube.com/embed/VadjvlvBDxE"></iframe>
				</div>
	      </div>
    );
  }
}

export default (Video);