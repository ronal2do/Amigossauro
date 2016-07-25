import React from 'react';

export default class InputEmail extends React.Component {
	
	constructor(props) {
	    super(props);

	    this.state = {
	        validatar: false
	    };
	}

	validar(value){
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(value);
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