import React from 'react';

class Item extends React.Component {
  render() {
    return (
		<img
			src={ this.props.src } 
			alt={ this.props.nome } 
			width="100%"/>
    );
  }

}

export default (Item);