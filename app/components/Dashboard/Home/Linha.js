import React from 'react';

class Linha extends React.Component {
  render() {
    return (
      <div className="row">
       	        <div className="col-lg-3 col-sm-6">
                    <div className="card">
                        <div className="content">
                            <div className="row">
                                <div className="col-xs-5">
                                    <div className="icon-big icon-warning text-center">
                                        <i className="ti-server"></i>
                                    </div>
                                </div>
                                <div className="col-xs-7">
                                    <div className="numbers">
                                        <p>Disco</p>
                                        105GB
                                    </div>
                                </div>
                            </div>
                        </div>
						<div className="card-footer">
							<hr/>
							<div className="stats">
								<i className="ti-reload"></i> Atualizar
							</div>
						</div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="card">
                        <div className="content">
                            <div className="row">
                                <div className="col-xs-5">
                                    <div className="icon-big icon-success text-center">
                                        <i className="ti-wallet"></i>
                                    </div>
                                </div>
                                <div className="col-xs-7">
                                    <div className="numbers">
                                        <p>Créditos</p>
                                        R$1,345
                                    </div>
                                </div>
                            </div>
                        </div>
						<div className="card-footer">
							<hr/>
							<div className="stats">
								<i className="ti-calendar"></i> Ultimos dias
							</div>
						</div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="card">
                        <div className="content">
                            <div className="row">
                                <div className="col-xs-5">
                                    <div className="icon-big icon-danger text-center">
                                        <i className="ti-pulse"></i>
                                    </div>
                                </div>
                                <div className="col-xs-7">
                                    <div className="numbers">
                                        <p>Erros</p>
                                        01
                                    </div>
                                </div>
                            </div>
                        </div>
						<div className="card-footer">
							<hr/>
							<div className="stats">
								<i className="ti-timer"></i> Na ultima hora
							</div>
						</div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="card">
                        <div className="content">
                            <div className="row">
                                <div className="col-xs-5">
                                    <div className="icon-big icon-info text-center">
                                        <i className="ti-twitter-alt"></i>
                                    </div>
                                </div>
                                <div className="col-xs-7">
                                    <div className="numbers">
                                        <p>Seguidores</p>
                                        +3
                                    </div>
                                </div>
                            </div>
                        </div>
						<div className="card-footer">
							<hr/>
							<div className="stats">
								<i className="ti-reload"></i> Atualizar
							</div>
						</div>
                    </div>
                </div>
      </div>
    );
  }
}

export default (Linha);