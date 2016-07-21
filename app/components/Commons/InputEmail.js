import React from 'react';

export default class InputEmail extends React.Component {
	
	constructor(props) {
	    super(props);

	    this.state = {
	        validate: false
	    };
	}

	validar(){
		console.log("blur, validar");
	}
	
  	render() {
    	return (
    	  	<input 
	            type="email" 
	            onBlur={this.validar} 
	            className="form-control" 
	            placeholder={this.props.placeholder}  
	            validate={this.state}
	        />
    	) ;
  }
}