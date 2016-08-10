import React from 'react';
import Linha from '../Commons/Linha';

export default class Frase extends React.Component {
  render() {
    return (
		<h3 style={{padding: '40px 0px'}}>
			<div className="col-sm-4">
				<Linha />
			</div>
			<div className="col-sm-4 Frase-youtube">
					Visite Nosso Canal
			</div>
			<div className="col-sm-4">
				<Linha />
			</div>
       	</h3>
    );
  }
}