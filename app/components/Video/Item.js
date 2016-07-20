import React from 'react';

class Item extends React.Component {
  render() {
    return (
		<img
			src={'http://img.youtube.com/vi/' + this.props.id + '/mqdefault.jpg'}
			alt={ this.props.nome } 
			width="100%"
		/>
    );
  }

}

export default (Item);