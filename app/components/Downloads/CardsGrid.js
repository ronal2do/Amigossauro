import React from 'react';
import { IndexLink, Link } from 'react-router';
import Box from '../Box';
import Card from './Cards';
import Baixar from '../Account/Baixar';

class CardsGrid extends React.Component {
    render() {
        return (
        	<div className="row">
        		
				<Link to="/downloads/colorir">
		            <Card 
		                titulo="Para Colorir"
		                texto="Lorem ipsum dolor sit amet."
		                src="colorir"
		              >
		            </Card>
	            </Link>
				
				<Link to="/downloads/papertoy">
		            <Card 
		                titulo="Paper Toys"
		                texto="Lorem ipsum dolor sit amet."
		                src="paper"
		            >
		            </Card>
	            </Link>

	            <a href="/downloads/letras">
		            <Card 
		                titulo="Letras"
		                texto="Lorem ipsum dolor sit amet."
		                src="letras"
		              >
		            </Card>
	            </a>
				
				<a href="/downloads/jogos">
		            <Card 
		                titulo="Jogos"
		                texto="Lorem ipsum dolor sit amet."
		                src="jogos"
		            >
		            </Card>
	            </a>



        </div>
		);
    }
}

export default CardsGrid;
