import React from 'react';

import Form from './Form';

class Newsletter extends React.Component {
  render() {
    return (
      <div className="col-sm-12">

          <div className="">
            <div className="">
              <div className="col-sm-4">
         			<h3>Inscreva-se em nossa newsletter</h3>
              </div>
              <div className="col-sm-8 ">
              	<br/>
              		<Form />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default (Newsletter);