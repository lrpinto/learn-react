import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  class Square extends React.Component {
    /* Added a constructor to this class in order to initialise state */
    constructor(props) {
      super(props);
      this.state = {
        value: null
      }; /** React components can have state by setting this.state in their constructors. 
           * this.state should be considered as private to a React component that it’s defined in 
           */
    }

      render() {
        return (
          <button 
            className="square" 
            onClick={() => this.setState({value: 'X'})} /**
                                                         * By calling this.setState from an onClick handler in the Square’s render method, 
                                                         * we tell React to re-render that Square whenever its <button> is clicked 
                                                         * 
                                                         * Notice how with onClick={() => alert('click')}, 
                                                         * we’re passing a function as the onClick prop. It only fires after a click. 
                                                         * Forgetting () => and writing onClick={alert('click')} is a common mistake, 
                                                         * and would fire the alert every time the component re-renders.
                                                         */
            >
              {this.state.value}
          </button>
        );
      }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i}/>; // Pass property value to the Square component
    }
  
    render() {
      const status = 'Next player: X';
  
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
  