import React from 'react';
import Tbody from './Tbody';
import Thead from './Thead';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsletter: []
    };
  }

  render() {
    return (
      <div className="content table-responsive table-full-width">
	      <table className="table">
			    <Thead />
	        <Tbody newsletter={this.state.newsletter}/>
	      </table>
      </div>
    );
  }

  componentDidMount() {
      fetch('/newsletter').then((response) => {
          return response.json();
      }).then((data) => {
          this.setState({newsletter: data});
          
      }).catch((err) => {
          throw new Error(err);
      });
  }
}

export default (Container);