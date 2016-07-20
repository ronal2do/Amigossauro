import React from 'react';
import Head from './Head';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Head/>
        <div className="Fundo">
        	{this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
