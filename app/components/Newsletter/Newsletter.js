import React from 'react';

import Form from './Form';

class Newsletter extends React.Component {
  render() {
    return (
        <div className="Newsletter">
            <div className="col-sm-3">
       			    <h3>Inscreva-se em nossa newsletter</h3>
            </div>
            <div className="col-sm-9 " style={{padding:'15px'}}>
            	<br/>
            	<Form />

            </div>
        </div>
    );
  }
}

export default (Newsletter);