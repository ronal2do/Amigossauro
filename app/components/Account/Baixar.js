import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { login } from '../../actions/auth';
import { facebookLogin } from '../../actions/oauth';
import Messages from '../Messages';
import FontAwesome from 'react-fontawesome';

class Baixar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFacebook = this.handleFacebook.bind(this)
  }

  handleFacebook() {
    this.props.dispatch(facebookLogin())
  }

  render() {
    const baixar = this.props.token ? (
      <p><br />
        <button className="btn btn-newsletter pull-right" file={this.props.file} >
            <FontAwesome
              className='fa-fw'
              name='download'
              size='1x'
            />
            Baixar
            </button>
      </p>
    ) : (
       <button onClick={this.handleFacebook} className="btn btn-facebook">Baixar via Facebook</button>
    );

    return (
      <div>
         {baixar}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    token: state.auth.token,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Baixar);
