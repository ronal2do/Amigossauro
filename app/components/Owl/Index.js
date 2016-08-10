import React from 'react';

class OwlCarousel extends React.Component {
  
  componentDidMount(){
	//          
  }

  render() {
    return (
      <div className="owl-carousel">
       	  {this.props.children}
      </div>
    );
  }
}

export default (OwlCarousel);