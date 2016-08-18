import React from 'react';
import Linha from '../Commons/Linha';

export default class Frase extends React.Component {
  render() {
    return (
		<h3 style={{padding: '40px 0px'}}>
			<div className="col-sm-3">
				<Linha />
			</div>
			<div className="col-sm-6 Frase-youtube">
				<a href="https://www.youtube.com/channel/UCnBPgN6OQ1zkbYq1JAl9h2Q" target="_blank">
					<img src="./images/visitecanal.png" alt="404" className="img-responsive marginTop"/>
				</a>
			</div>
			<div className="col-sm-3">
				<Linha />
			</div>
       	</h3>
    );
  }
}