import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  /** 
   * Square is now a function componenent - a simpler way to write components that only contain a render method and don’t have their own state
   */
  function Square (props) {
      return (
        <button className="square" onClick={props.onClick}>
          {props.value}
         </button>
      );
  }
  
  class Board extends React.Component {

    /* Constructor to set the Board's initial state to contain an array with 9 nulls. 
     * These 9 nulls correspond to the 9 squares. 
     */
    constructor(props) {
      super(props);
      this.state = { 
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    }

    handleClick(i) {
      /**
       * Create a copy of the squares array to modify instead of modifying the existing array.
       * 
       * Ref. Why immutability is important
       * https://reactjs.org/tutorial/tutorial.html#why-immutability-is-important
       */
      const squares = this.state.squares.slice();
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }

    renderSquare(i) {
      return (
        /**
         * Pass value of the Board's -ith square to the Square component, 
         * and call the Board's function handleClick when a Square is clicked.
         */
        <Square 
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />
      ); 
    }
  
    render() {
      const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  