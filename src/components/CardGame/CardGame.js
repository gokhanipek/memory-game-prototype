import React, { Component } from 'react'
import {shuffle} from 'lodash';

import Card from './../Card/Card';

import './CardGame.scss';

import bulbasaur from './../../assets/bulbasaur.png';
import charmander from './../../assets/charmander.png';
import eevee from './../../assets/eevee.png';
import jigglypuff from './../../assets/jigglypuff.png';
import pikachu from './../../assets/pikachu.png';
import psyduck from './../../assets/psyduck.png';
import snorlax from './../../assets/snorlax.png';
import squirtle from './../../assets/squirtle.png';

class CardGame extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards: [
                {name: 'bulbasaur', open: false, id: 1, image: bulbasaur, isCompleted: false }, 
                {name: 'charmander', open: false, id: 2, image: charmander, isCompleted: false  },
                {name: 'eevee', open: false, id: 3, image: eevee, isCompleted: false },
                {name: 'jigglypuff', open: false, id: 4, image: jigglypuff, isCompleted: false },
                {name: 'pikachu', open: false, id: 5, image: pikachu, isCompleted: false },
                {name: 'psyduck', open: false, id: 6, image: psyduck, isCompleted: false },
                {name: 'snorlax', open: false, id: 7, image: snorlax, isCompleted: false },
                {name: 'squirtle', open: false, id: 8, image: squirtle, isCompleted: false },
                {name: 'bulbasaur', open: false, id: 9, image: bulbasaur, isCompleted: false }, 
                {name: 'charmander', open: false, id: 10, image: charmander , isCompleted: false },
                {name: 'eevee', open: false, id: 11, image: eevee, isCompleted: false },
                {name: 'jigglypuff', open: false, id: 12, image: jigglypuff, isCompleted: false },
                {name: 'pikachu', open: false, id: 13, image: pikachu, isCompleted: false },
                {name: 'psyduck', open: false, id: 14, image: psyduck, isCompleted: false },
                {name: 'snorlax', open: false, id: 15, image: snorlax, isCompleted: false },
                {name: 'squirtle', open: false, id: 16, image: squirtle, isCompleted: false },
            ],
            flippedCards: [],
            matchedCards: [],
            shuffledCards: [],
            isOpen: false,
            score: 0
        }
    }

    componentDidMount(){
        this.setState({ shuffledCards: shuffle(this.state.cards) })
    }

    onClickHandler = (pokemon, index) => {
        if(this.state.flippedCards.length === 2){
            setTimeout(() => {
                this.check()
              },500)
        } else {
            let flippedCards =  this.state.flippedCards;
            let shuffledCards = this.state.shuffledCards;
            shuffledCards[index].open = true;
            flippedCards.push(pokemon);
            this.setState({ 
                flippedCards,
                shuffledCards
            })
            if(this.state.flippedCards.length === 2){
                setTimeout(() => {
                    this.check()
                  },500)
            }        
        }
    }

    check = () => {
        console.warn('isCheck');
        let shuffledCards = this.state.shuffledCards;
        let matchedCards = this.state.matchedCards;


        if((this.state.flippedCards[0].name === this.state.flippedCards[1].name)){
            shuffledCards.find(card => card.id === this.state.flippedCards[0].id).isCompleted = true;
            shuffledCards.find(card => card.id === this.state.flippedCards[1].id).isCompleted = true;
            matchedCards.push(this.state.flippedCards[0], this.state.flippedCards[1]) 
        }else {
            shuffledCards.find(card => card.id === this.state.flippedCards[0].id).open = false;
            shuffledCards.find(card => card.id === this.state.flippedCards[1].id).open = false;
        }

        this.setState({
          matchedCards,
          flippedCards: []
        })
    }

    render() {
        return (
            <div className="card-container">
                { this.state.shuffledCards.map(
                    (pokemon, index) => 
                    <Card 
                        open={pokemon.open}
                        pokemon={pokemon}
                        onClickHandler={() => this.state.flippedCards.length ===  2 ? null : this.onClickHandler(pokemon,index)} 
                    />
                )}
            </div>
        )
    }
}

export default CardGame;