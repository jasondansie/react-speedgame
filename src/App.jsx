import './App.css';
import { Component } from 'react';
import Header from './Header';

class App extends Component {
  state = {
    score: "0",
    misses: "3",
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({
      showPopup: true
    });
  };

  closePopupHandler = (event) => {
    event.preventDefault();
    this.setState({
      showPopup: false
    });
    console.log("cancle");
  };

  render() {
    return (
      <main>
        <Header 
          score={this.state.score}
          misses={this.state.misses}
        />
      </main>
    );
  }
}

export default App;
