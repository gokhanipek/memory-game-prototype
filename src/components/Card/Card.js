import React, { Component } from 'react'

import './Card.scss';
import closed from './../../assets/pokeball.png'; 

class Card extends Component {
    render() {
        const {pokemon, onClickHandler, open} = this.props;
        return (
            <div className="card">
                <img onClick={onClickHandler} className={open ? 'open' : 'closed'} src={open ? pokemon.image : closed} alt={pokemon.name} />
            </div>
        )
    }
}

export default Card;