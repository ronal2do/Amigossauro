import React from 'react';

export default class InputText extends React.Component {

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
	            type="text" 
	            className="form-control" 
	            onBlur={this.validar} 
	            placeholder={this.props.placeholder}  
	            autocomplete="off"
	        />
    	) ;
  }
}

