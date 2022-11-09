import './App.css';
import { Component } from 'react';
import Header from './Header';
import Button from './Button';
import Cirlce from './Circle';

class App extends Component {
  state = {
    score: "0",
    misses: "3",
    isRunning: false,
  };

  changeGameState = (props) => {
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
              <Cirlce 
                circle_id={"1"}
                circleClick={this.changeGameState}
              />
              <Cirlce 
                circle_id={"2"}
                circleClick={this.changeGameState}
              />
              <Cirlce 
                circle_id={"3"}
                circleClick={this.changeGameState}
              />
              <Cirlce 
                circle_id={"4"}
                circleClick={this.changeGameState}
              />
             
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
