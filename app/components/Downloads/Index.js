import React from 'react';

import Social from '../Social';
import Box from '../Box';
import Card from './Cards';
import Newsletter from '../Newsletter/Newsletter';



class Downloads extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="pull-right"> 
          <Social />
        </div>
        <div className="row">
          <Box 
            titulo="Downloads"
            texto={[
                    "This ", <strong>negrito</strong>, " working! " , <br /> , 
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, repellendus adipisci dolore officia aut voluptatum ullam. Accusamus ducimus voluptatem dolor et autem illo veniam culpa hic repudiandae, iusto nulla quo."
                    ]}
            src="deco"
          />
          <Card 
              titulo="Paper Toy"
              texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              src="dana"

          /> 
        </div>

        <div className="row">
          <Newsletter className="col-sm-12" style={{padding:'0px'}}/>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Downloads);
