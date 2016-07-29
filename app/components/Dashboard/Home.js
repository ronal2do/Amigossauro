import React from 'react';
import Linha from './Home/Linha';
import LinhaT from './Home/LinhaT';
import Table from './Widgets/Table';


class Home extends React.Component {
  render() {
    return (
        <div className="container-fluid">
			<Linha />
			<LinhaT />
			<Table />
        </div>
    );
  }
}

export default Home;
