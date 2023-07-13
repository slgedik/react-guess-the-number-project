import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    randomNumber: Math.floor(Math.random() * 100) + 1,
    userGuess: '',
    message: '',
  };

  checkGuess = () => {
    const { userGuess, randomNumber } = this.state;

    if (userGuess === randomNumber) {
      this.setState({ message: 'Congratulations! You guessed the correct number!' });
    } else if (userGuess < randomNumber) {
      this.setState({ message: 'Too low. Try again.' });
    } else {
      this.setState({ message: 'Too high. Try again.' });
    }
  };

  handleChange = (e) => {
    this.setState({ userGuess: parseInt(e.target.value) });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.checkGuess();
    }
  };

  render() {
    const { message } = this.state;

    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='max-w-[450px] mx-auto pt-10 bg-[#c9acac] rounded-2xl px-5 py-5 flex flex-col items-center'>
          <h1 className='mt-5'>Guess the Number Game</h1>
          <p className='lead'>Guess a number between 1 and 100:</p>
          <div className='input-group mb-3'>
            <input
              type='number'
              className='form-control items-center justify-center flex'
              id='userGuess'
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
            <button className='btn btn-primary mt-3' onClick={this.checkGuess}>
              Submit
            </button>
          </div>
          <p id='message' className='mt-3' style={{ color: message.includes('Congratulations') ? 'green' : 'red' }}>
            {message}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
