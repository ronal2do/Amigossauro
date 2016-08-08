import React from 'react';
import Table from './Table';


class Content extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
		task: []
	};
  }
  render() {
    return (
      <div className="content">
	    <div className="table-full-width table-tasks">
			<Table task={this.state.task}/>	       
	    </div>
      </div>
    );
  }
 
}

export default (Content);