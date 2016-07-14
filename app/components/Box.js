import React from 'react';

class Box extends React.Component {
  render() {
    return (
      <div className="col-sm-12" style={{ borderBottom:'3px red solid' }}>
      		<div className="Padding-top">
       			
       		</div>
       		<div className="col-sm-8" style={{ borderBottom:'3px red solid' }}>
           <h1 style={{color:'red'}}> {this.props.titulo} </h1>
       			  <p style={{color:'blue'}}>	
                {this.props.texto}
              </p>
       		</div>
       		<div className="col-sm-4">
       			<img src={this.props.foto} className="img-responsive img-circle" alt="Cinque Terre" />
       		</div>
          <br/>
          <br/>
      </div>
    );
  }
}

export default (Box);