import React from 'react';
import { connect } from 'react-redux'
import { submitNewsletterForm } from '../../actions/newsletter';
import Messages from '../Messages';
import Submit from './../commons/Submit';

class Form extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
        nome: '' 
      , email: '' 
      , estado: '' 
      , cidade: '' 
      , valido: '' 
      , nvalido: '' 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validarEmail = this.validarEmail.bind(this);
    this.validarNome  = this.validarNome.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentDidMount() {
        new dgCidadesEstados({
          cidade: document.getElementById('cidade'),
          estado: document.getElementById('estado'),
          estadoVal: '',
          cidadeVal: ''
        })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(submitNewsletterForm(this.state.nome, this.state.email, this.state.estado, this.state.cidade));
    this.setState({ nome: '', email: '', estado: '', cidade: '' });
  }

  validarNome(event){
      const validarNome = /^[a-záàâãéèêíïóôõöúçñ ]+$/;
      if (validarNome.test(event.target.value) === false  || event.target.value == ''){
          console.log(event.target.value);
          console.log('inválido');
          this.setState({ nvalido: 'error'});
      } else {
        console.log('valido');
        this.setState({ nvalido: ''});
      }
  }

  validarEmail(event){
      const validar = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (validar.test(event.target.value) === false  || event.target.value == ''){
          console.log(event.target.value);
          console.log('inválido');
          this.setState({ valido: 'error'});
      } else {
        console.log('valido');
        this.setState({ valido: ''});
      }
  }

  render() {
    return (
          <div className="padding-top">
            <Messages messages={this.props.messages}/>
              <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <div className="col-sm-12">
                    <input 
                      type="text"
                      name="nome"
                      ref="nome"
                      className={'form-control ' + this.state.nvalido}
                      id="nome"
                      onBlur={this.validarNome}
                      valor={"nome"}
                      placeholder={"Nome: "}
                      value={this.state.nome} 
                      onChange={this.handleChange}
                    />
                    <small className={'Span' + this.state.nvalido}>Não pode estar em branco</small>
                  </div>
                </div>
                <div className={'form-group'}>
                  <div className="col-sm-12">
                    <input 
                      type="email"
                      name="email"
                      ref="email"
                      className={'form-control ' + this.state.valido}
                      id="email"
                      onBlur={this.validarEmail}
                      valor={"email"}
                      placeholder={"E-mail: "}
                      value={this.state.email} 
                      onChange={this.handleChange}
                    />
                    <small className={'Span' + this.state.valido}>Não é um e-mail válido!</small>
                  </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-6">
                      <select name="estado" id="estado" className="form-control"
                        onChange={this.handleChange}></select>
                    </div>
                    <div className="col-sm-6">
                      <select name="cidade" id="cidade" className="form-control" 
                        onChange={this.handleChange}></select>
                    </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-12">
                    <Submit texto="Enviar" classe="newsletter"/>
                  </div>
                </div>
              </form>
          </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Form);