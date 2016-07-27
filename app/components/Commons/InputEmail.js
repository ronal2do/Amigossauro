import React from 'react';

export default class InputEmail extends React.Component {
	
	constructor(props) {
	    super(props)

  	}

  	validar(event){
		if (event.target.value == ''){
		  console.log(event.target.value);
		  console.log('inválido');
		  this.setState({ valido: 'error'});
		} else {
			console.log('valido');
			this.setState({ valido: ''});
		}
	}

	validarEmail(event){
	      const validar = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	      if (validar.test(event.target.value) === false  || event.target.value == ''){
	          console.log(event.target.value);
	          console.log('inválido');
	          this.setState({ valido: 'error'});
	      } else {
	        console.log('valido');
	        this.setState({ valido: ''});
	      }
	}
	 
  	render() {
    	return (
  				<div className="col-sm-12">
					<input 
	                    type="email"
	                    name="email"
	                    ref="email"
	                    id="email"
	                    value="email"
	                    placeholder="E-mail: "
                    />
                 
				</div>
    	) ;
  }
}