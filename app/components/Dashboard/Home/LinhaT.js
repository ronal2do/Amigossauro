import React from 'react';

class LinhaT extends React.Component {
  render() {
    return (
      <div className="row">
				<div className="col-lg-3 col-sm-6">
					<div className="card card-circle-chart" data-background="color" data-color="blue">
						<div className="header text-center">
                            <h5 className="title">Dashboard</h5>
                            <p className="description">Meta de vendas</p>
                        </div>
						<div className="content">
							<div id="chartDashboard" className="chart-circle" data-percent="70">70%<canvas height="160" width="160"></canvas></div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="card card-circle-chart" data-background="color" data-color="green">
						<div className="header text-center">
                            <h5 className="title">Ordens</h5>
                            <p className="description">Completas</p>
                        </div>
						<div className="content">
							<div id="chartOrders" className="chart-circle" data-percent="34">34%<canvas height="160" width="160"></canvas></div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="card card-circle-chart" data-background="color" data-color="orange">
						<div className="header text-center">
                            <h5 className="title">Novos visitantes</h5>
                            <p className="description">Conteúdo do último mês</p>
                        </div>
						<div className="content">
							<div id="chartNewVisitors" className="chart-circle" data-percent="62">62%<canvas height="160" width="160"></canvas></div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="card card-circle-chart" data-background="color" data-color="brown">
						<div className="header text-center">
                            <h5 className="title">Inscritos</h5>
                            <p className="description">Newsletter mensal</p>
                        </div>
						<div className="content">
							<div id="chartSubscriptions" className="chart-circle" data-percent="10">10%<canvas height="160" width="160"></canvas></div>
						</div>
					</div>
				</div>
      </div>
    );
  }
}

export default (LinhaT);