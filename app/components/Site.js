import React from 'react';

class Site extends React.Component {
  render() {
    return (
        <div className="Fundo">
        	{this.props.children}
        </div>
    );
  }
}

export default Site;
