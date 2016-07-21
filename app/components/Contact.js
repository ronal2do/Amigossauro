import React from 'react';
import { connect } from 'react-redux'
import { submitContactForm } from '../actions/contact';
import Messages from './Messages';
import Social from './Social';
import Submit from './commons/Submit';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(submitContactForm(this.state.name, this.state.email, this.state.message));
    this.setState = { name: '', email: '', message: '' };
  }

  render() {
    return (
      <div className="container">
        <div className="pull-right"> 
          <Social />
        </div>
          <div className="col-sm-12">
            <div className="Padding-top"></div>
            <h1>Contato</h1>
            <div className="panel-body"> 
                <Messages messages={this.props.messages}/>
                    <form onSubmit={this.handleSubmit} className="form-horizontal">
                      <div className="form-group">
                        <label htmlFor="name" className="col-sm-2">Name</label>
                        <div className="col-sm-8">
                          <input type="text" name="name" id="name" className="form-control" value={this.state.name} onChange={this.handleChange} autoFocus/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="col-sm-2">Email</label>
                        <div className="col-sm-8">
                          <input type="email" name="email" id="email" className="form-control" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="message" className="col-sm-2">Body</label>
                        <div className="col-sm-8">
                          <textarea name="message" id="message" rows="7" className="form-control" value={this.state.message} onChange={this.handleChange}></textarea>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-8">
                           <Submit texto="Enviar" />
                        </div>
                      </div>
                    </form>
                </div>
          </div>
   
       </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Contact);
