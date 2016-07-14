import React from 'react';

class Item extends React.Component {

   getInitialState(){
  	return {
  		click: false
  	};
  }

  toggleClick() {
    this.set.state({
    	click: !this.state.click
    });
  }

  render() {

    return (
     	<a onClick={ this.toggleClick }>
			<img 
				src={ this.props.src } 
				alt="Alt" 
				width="100%"/>
		</a>	
    );
  }
}

export default (Item);