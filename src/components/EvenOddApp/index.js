import  { Component } from 'react';
import './index.css';

class EvenOddApp extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    const randomIncrement = Math.floor(Math.random() * 101); // Generate random number between 0 to 100
    this.setState(prevState => ({
      count: prevState.count + randomIncrement,
    }));
  };

  render() {
    const { count } = this.state;
    const isEven = count % 2 === 0;

    return (
      <div className="even-odd-container">
        <h1 className="heading">Count {count}</h1>
        <div className="count-container">
          {isEven ? (
            <p className="even-odd-text even">Count is Even</p>
          ) : (
            <p className="even-odd-text odd">Count is Odd</p>
          )}
        </div>
        <button className="increment-button" onClick={this.incrementCount} type="button">
          Increment
        </button>
      </div>
    );
  }
}

export default EvenOddApp;
