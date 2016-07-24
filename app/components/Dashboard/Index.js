import React from 'react';
import Lista from './Lista.js';

class Dashboard extends React.Component {
   	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

  	render() {
    	return (
	     	<div className="Fundo">
	           	<section className="container">
			    	<h2>Lista de inscritos</h2>
			      	<Lista data={this.state.data} />
		      	</section>
	        </div>
    	);
  	}

	componentDidMount() {
	    fetch('/newsletter').then((response) => {
	        return response.json();
	    }).then((data) => {
	        this.setState({data: data});
	        console.log(data);
	    }).catch((err) => {
	        throw new Error(err);
	    });
  	}
}
export default Dashboard;
