import React from 'react';
import Box from '../Box';
import Card from './Cards';
import Baixar from '../Account/Baixar';

class CardsGrid extends React.Component {
    render() {
        return (
        	<div className="row">
	            <Card 
	                titulo="Jogos"
	                texto="Lorem ipsum dolor sit amet."
	                src="dana"
	            >
	                <Baixar file="1"/>
	            </Card>
	            <Card 
	                titulo="Para Colorir"
	                texto="Lorem ipsum dolor sit amet."
	                src="dana"
	              >
	                  <Baixar file="1"/>
	            </Card>
	             <Card 
	                titulo="Letras e Cifras"
	                texto="Lorem ipsum dolor sit amet."
	                src="dana"
	            >
	                <Baixar file="1"/>
	            </Card>
	            <Card 
	                titulo="Paper Toys"
	                texto="Lorem ipsum dolor sit amet."
	                src="dana"
	            >
	                <Baixar file="1"/>
	            </Card>
        </div>
		);
    }
}

export default CardsGrid;
