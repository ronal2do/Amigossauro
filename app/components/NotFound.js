import React from 'react';

const NotFound = (props) => {
  return (
    <div className="container text-center">
     <br/> <br/>
      <h1 style={{color:'rgb(176,47,130)'}}>404</h1>
      <p className="Frase-youtube" style={{color:'rgb(176,47,130)',fontFamily:'AvenirNext-DemiBold',fontSize:'1.2em'}}>
      	Esta página está sendo construída <br/> 
      	com muito carinho e está ficando demais. <br/>
      	Em breve, teremos novidades incríveis por aqui.
      </p>
      <img src="./images/404.png" alt="404" className="img-responsive" />
    </div>
  );
};

export default NotFound;
