import React from 'react';

class Menu extends React.Component {
  render() {
    return (
    		<div className="sidebar-wrapper">
				<div className="user">
	                <div className="photo">
	                    <img src="../../assets/img/faces/face-2.jpg" />
	                </div>
	                <div className="info">
	                    <a data-toggle="collapse" href="#collapseExample" className="collapsed">
	                       Meu nome
	                        <b className="caret"></b>
	                    </a>
	                    <div className="collapse" id="collapseExample">
	                        <ul className="nav">
	                            <li><a href="#profile">Meu Perfil</a></li>
	                            <li><a href="#edit">Editar Perfil</a></li>
	                            <li><a href="#settings">Sair</a></li>
	                        </ul>
	                    </div>
	                </div>
	            </div>
	            <ul className="nav">
					<li>
	                    <a data-toggle="collapse" href="#dashboardOverview">
	                        <i className="ti-panel"></i>
	                        <p>Dashboard
                                <b className="caret"></b>
                            </p>
	                    </a>
                        <div className="collapse" id="dashboardOverview">
							<ul className="nav">
								<li><a href="../dashboard/overview.html">Geral</a></li>
								<li><a href="../dashboard/stats.html">Status</a></li>
							</ul>
						</div>
	                </li>
					<li>
	                    <a data-toggle="collapse" href="#componentsExamples">
	                        <i className="ti-package"></i>
	                        <p>Componentes
	                           <b className="caret"></b>
	                        </p>
	                    </a>
	                    <div className="collapse in" id="componentsExamples">
	                        <ul className="nav">
	                            <li className="active"><a href="notifications.html">Notifications</a></li>
	                            <li><a href="icons.html">Icons</a></li>
	                        </ul>
	                    </div>
	                </li>
					<li>
						<a data-toggle="collapse" href="#formsExamples">
	                        <i className="ti-clipboard"></i>
	                        <p>
								Blog
	                           <b className="caret"></b>
	                        </p>
	                    </a>
	                    <div className="collapse" id="formsExamples">
	                        <ul className="nav">
								<li><a href="../forms/regular.html">Postagens</a></li>
								<li><a href="../forms/extended.html">Categorias</a></li>
	                            <li><a href="../forms/wizard.html">Escrever</a></li>
	                        </ul>
	                    </div>
	                </li>
					<li>
						<a data-toggle="collapse" href="#tablesExamples">
	                        <i className="ti-view-list-alt"></i>
	                        <p>
								Tabelas
	                           <b className="caret"></b>
	                        </p>
	                    </a>
	                    <div className="collapse" id="tablesExamples">
	                        <ul className="nav">
								<li><a href="../tables/regular.html">Tabela de ...</a></li>
								<li><a href="../tables/extended.html">Tabela de ...</a></li>
								<li><a href="../tables/datatable.html">Tabela de ...</a></li>
	                        </ul>
	                    </div>
	                </li>
	            </ul>
	    	</div>
    );
  }
}

export default (Menu);