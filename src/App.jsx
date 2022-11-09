import './App.css';
import { Component } from 'react';
import Header from './Header';

class App extends Component {
  state = {
    score: "0",
    misses: "3",
  };

  render() {
    return (
      <main>
        <Header 
          score={this.state.score}
          misses={this.state.misses}
        />
        <div className='game_area'>
          <section>
            <div class="barn"></div>
            <div className='circles'></div>
          </section>
        </div>
      </main>
    );
  }
}

export default App;
