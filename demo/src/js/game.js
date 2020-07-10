import React from 'react';
import '../css/game.css';
import Board from './board';

export default class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    my game!!
                    <Board/>
                </div>
                <div className="game-info">
                    <div></div>
                    <ol></ol>
                </div>
            </div>
        );
    }
}