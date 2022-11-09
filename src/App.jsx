import './App.css';
import { Component } from 'react';
import Header from './Header';
import Button from './Button';
import Cirlce from './Circle';
import Modal from './Modal';

class App extends Component {
  state = {
    score: 0,
    misses: 3,
    isRunning: false,
    showModal: false,
    modalText:"",
  };

  circleHandler = (props) =>{
    console.log("circle clicked");
  }

  changeGameState = (props) => {
    if (this.state.isRunning) {
      this.loadModal();
      this.setState({
        isRunning: false,
        showModal: true
      });
    }
    else{
      this.setState({
        isRunning: true
      });
    }
  }

  loadModal = () => {
    let string = ``;
    if (this.state.score === 0) {
      string = "Try again.";
    }
    else if(this.state.score < 6){
      string = "Good job.";
    }
    else if(this.state.score < 11){
      string = "Wow your doing awesome.";
    }
    else if(this.state.score < 16){
      string = "Your going to make the top score.";
    }
    else if(this.state.score < 21){
      string = "Wow amazing skills.";
    } 
    else{
      string = "You are out of this world.";
    }

    this.setState({modalText: `You scored ${this.state.score} ${string}`});
    this.setState({showModal: true});
}

closeModal = () => {
  this.setState({showModal: false});
    //startGame();
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
                circleClick={this.circleHandler}
              />
              <Cirlce 
                circle_id={"2"}
                circleClick={this.circleHandler}
              />
              <Cirlce 
                circle_id={"3"}
                circleClick={this.circleHandler}
              />
              <Cirlce 
                circle_id={"4"}
                circleClick={this.circleHandler}
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
        <section>
          {
            this.state.showModal &&
            <Modal 
              modalText={this.state.modalText}
              closeModal={this.closeModal}
            />        
          }
            
          </section>
      </main>
    );
  }
}

export default App;
