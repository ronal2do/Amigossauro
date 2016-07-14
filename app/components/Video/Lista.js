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
				    src="http://img.youtube.com/vi/VVS2tqpXiZ0/default.jpg"
       	 	/>
			
       	 </div>
       	 <div className="col-sm-4">
       	 	<Item
            nome="meu nome 2"
				    src="http://img.youtube.com/vi/hsfA4kTdltE/default.jpg"
       	 	/>	
       	 </div>
       	 <div className="col-sm-4">
       	 	<Item
            nome="meu nome 3"
				    src="http://img.youtube.com/vi/c_yomf6U35A/default.jpg"
       	 	/>
       	 </div>
      </div>
    );
  }
}

export default (Lista);