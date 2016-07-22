import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import { logout } from '../actions/auth';
import Divisor from './commons/Divisor';

class Header extends React.Component {
  
  componentDidMount() {
     let sticky = document.querySelector('.sticky');

      if (sticky.style.position !== 'sticky') {
        let stickyTop = sticky.offsetTop;

        document.addEventListener('scroll', function () {
          window.scrollY >= stickyTop ?
            sticky.classList.add('navbar-fixed-top') :
            sticky.classList.remove('navbar-fixed-top');
        });
      }
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.dispatch(logout());
  }

  render() {
    const active = { color:'#ffd403' };
    const rightNav = this.props.token ? (
    
        <li className="dropdown">
          <a href="#" data-toggle="dropdown" className="navbar-avatar dropdown-toggle">
            <img src={this.props.user.picture || this.props.user.gravatar}/>
             {' '}{this.props.user.name || this.props.user.email || this.props.user.id}{' '}
            <i className="caret"></i>
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/account">Minha conta</Link></li>
            <li className="divider"></li>
            <li><a href="#" onClick={this.handleLogout.bind(this)}>Sair</a></li>
          </ul>
        </li>
  
    ) : (
     <li className="dropdown">
        <a href="#" data-toggle="dropdown" className="navbar-avatar dropdown-toggle">
           logar
            <i className="caret"></i>
        </a>
        <ul className="dropdown-menu">
          <li><Link to="/login" activeStyle={active}>Acessar</Link></li>
          <li className="divider"></li>
          <li><Link to="/signup" activeStyle={active}>Registrar</Link></li>
        </ul>
     </li>
    );
    return (
      <nav className="navbar navbar-default sticky">
        <div className="container">
          <div className="navbar-header">
            <button type="button" data-toggle="collapse" data-target="#navbar" className="navbar-toggle collapsed">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          
          <div classNmae="container">
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><IndexLink to="/" activeStyle={active}>Home</IndexLink></li>
                <Divisor />
                <li><Link to="/amizade" activeStyle={active}>Era da Amizade</Link></li>
                <Divisor />
                <li><Link to="/downloads" activeStyle={active}>Downloads</Link></li>
                <Divisor />
                <li><Link to="/blog" activeStyle={active}>Blog</Link></li>
                <Divisor />
                <li><Link to="/contato" activeStyle={active}>Contato</Link></li>
                
              </ul>
            
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Header);
