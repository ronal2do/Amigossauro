import React from 'react';

import Form from './Form';

class Newsletter extends React.Component {
  render() {
    return (
        <div className="Newsletter" style={{padding:'15px 0'}}>
            <div className="col-sm-3">
       			    <h3 className="Newsletter-titulo">Inscreva-se em nossa newsletter</h3>
            </div>
            <div className="col-sm-9">
            	<br/>
            	<Form />
            </div>
        </div>
    );
  }
}

export default (Newsletter);