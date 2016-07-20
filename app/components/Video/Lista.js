import React from 'react';

import Item from './Item';

class Lista extends React.Component {

  render() {
      return (
      <div className="text-center">
      	 <br />

       	 <div className="col-sm-4">
         	 	<Item
              nome="meu nome"
  				    id="VVS2tqpXiZ0"
         	 	/>
       	 </div>

       	 <div className="col-sm-4">
         	 	<Item
              nome="meu nome 2"
  				    id="hsfA4kTdltE"
         	 	/>	
       	 </div>

       	 <div className="col-sm-4">
         	 	<Item
              nome="meu nome 3"
  				    id="c_yomf6U35A"
         	 	/>
       	 </div>

      </div>
    );
  }
}

export default (Lista);