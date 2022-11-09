import './App.css';
import { Component } from 'react';
import Header from './Header';
import Button from './Button';

class App extends Component {
  state = {
    score: "0",
    misses: "3",
    isRunning: false,
  };

  changeGameState = (props) => {
    console.log("it works!!");
    if (this.state.isRunning) {
      this.setState({
        isRunning: false
      });
    }
    else{
      this.setState({
        isRunning: true
      });
    }

  }

  render() {
    return (
      <main>
        <Header 
          score={this.state.score}
          misses={this.state.misses}
        />
        <div className='game_area'>
          <section>
            <div className="barn"></div>
            <div className='circles'>

            </div>
            {this.state.isRunning 
              ? <Button 
                  button_name={"End Game"} 
                  buttonClick={this.changeGameState}
                />
              : <Button 
                  button_name={"Start Game"}
                  buttonClick={this.changeGameState}
                />
            }         
          </section>
        </div>
      </main>
    );
  }
}

export default App;
