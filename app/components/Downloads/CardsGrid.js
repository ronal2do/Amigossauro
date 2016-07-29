import React from 'react';
import { IndexLink, Link } from 'react-router';
import Box from '../Box';
import Card from './Cards';
import Baixar from '../Account/Baixar';

class CardsGrid extends React.Component {
    render() {
        return (
        	<div className="row">
        		<Link to="/downloads/jogos">
		            <Card
		                titulo="Jogos"
		                texto="Lorem ipsum dolor sit amet."
		                src="jogos"
		            >
		                <Baixar file="1"/>
		            </Card>
	            </Link>
				<Link to="/downloads/jogos">
		            <Card 
		                titulo="Para Colorir"
		                texto="Lorem ipsum dolor sit amet."
		                src="colorir"
		              >
		                  <Baixar file="1"/>
		            </Card>
	            </Link>
				<Link to="/downloads/jogos">
		             <Card 
		                titulo="Letras e Cifras"
		                texto="Lorem ipsum dolor sit amet."
		                src="letras"
		            >
		                <Baixar file="1"/>
		            </Card>
	            </Link>
				<Link to="/downloads/jogos">
		            <Card 
		                titulo="Paper Toys"
		                texto="Lorem ipsum dolor sit amet."
		                src="paper"
		            >
		                <Baixar file="1"/>
		            </Card>
	            </Link>
        </div>
		);
    }
}

export default CardsGrid;
