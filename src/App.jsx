import './App.css';
import { Component } from 'react';
import Header from './Header';
import Button from './Button';
import Circle from './Circle';
import Modal from './Modal';
import spring from './sounds/spring.mp3'
import hillbilly from './sounds/hillbilly.mp3'
import cowMoo from './sounds/cow_moo.mp3'
import twang from './sounds/twang.mp3'

let startSound = new Audio(spring);
let endSound = new Audio(twang);
let hillbillSound = new Audio(hillbilly);
let cowSound = new Audio(cowMoo);

class App extends Component {
  state = {
    score: 0,
    misses: 3,
    isRunning: false,
    showModal: false,
    modalText: "",
    circles: [1, 2, 3, 4],
    current: -1,
    pace: 1000,
  };

  timer;


  playCowSound = () => {
    if (cowSound.paused) {
      cowSound.play();
    } else {
      cowSound.currentTime = 0;
    }
  }

  getRandNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  circleHandler = (i) => {
    if (this.state.isRunning == true) {
      this.playCowSound();
      if (this.state.current !== i) {
        this.setState({
          misses: this.state.misses - 1,
        });

        if (this.state.misses <= 0) {
          this.stopHandler();
          return;
        }
      }
      this.setState({
        score: this.state.score + 1,
      });
    }
  }

  nextCircle = () => {
    if (this.state.misses <= 0) {
      this.stopHandler();
      return;
    }

    let nextActive;
    do {
      nextActive = this.getRandNum(0, this.state.circles.length - 1);
    } while (nextActive === this.state.current)

    this.setState({
      current: nextActive,
      pace: this.state.pace * 95,

    });

    this.timer = setTimeout(this.nextCircle, 1000);
  }

  startHandler = () => {
    startSound.play();
    hillbillSound.play();
    this.nextCircle();
    this.setState({
      isRunning: true
    })
  }

  stopHandler = () => {
    endSound.play();
    hillbillSound.pause();
    console.log("Stopped");
    clearTimeout(this.timer);
    this.loadModal();
    this.setState({
      isRunning: false,
      current: -1,
      showModal: true,
      misses: 3,
      score: 0,
    })
  }

  loadModal = () => {
    let string = ``;
    if (this.state.score === 0) {
      string = "Try again.";
    }
    else if (this.state.score < 6) {
      string = "Good job.";
    }
    else if (this.state.score < 11) {
      string = "Wow your doing awesome.";
    }
    else if (this.state.score < 16) {
      string = "Your going to make the top score.";
    }
    else if (this.state.score < 21) {
      string = "Wow amazing skills.";
    }
    else {
      string = "You are out of this world.";
    }

    this.setState({ modalText: `You scored ${this.state.score} ${string}` });
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
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
              {this.state.circles.map((circle, i) => (
                <Circle
                  key={i}
                  id={i + 1}
                  click={() => this.circleHandler(i)}
                  active={this.state.current === i}
                />
              ))
              }
            </div>
            {this.state.isRunning
              ? <Button
                button_name={"End Game"}
                buttonClick={this.stopHandler}
              />
              : <Button
                button_name={"Start Game"}
                buttonClick={this.startHandler}
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
