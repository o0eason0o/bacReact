import React from 'react';
import '../css/game.css';
import Board from './board';
import tictac from './tictac';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1),
            current = history[history.length - 1],
            squares = current.squares.slice();

        if(tictac.calculate(squares) || squares[i]){
            return;
        }

        squares[i] = this.state.xIsNext? 'X' : 'O';
        this.setState({
            history: history.concat([{squares}]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2 )=== 0
        });
    }

    render() {
        const history = this.state.history,
            current = history[this.state.stepNumber],
            winner = tictac.calculate(current.squares),
            status = winner ? `Winner: ${winner}` : `Next player: ${this.state.xIsNext? 'X':'O'}`,
            moves = history.map((step, move)=>{
                const desc = move ? `Go to move #${move}` : 'Go to game start';
                return (
                    <li key={move}>
                        <button onClick={()=> this.jumpTo(move)}>{desc}</button>
                    </li>
                );
            });

        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares = {current.squares}
                        onClick = {(i)=> this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}