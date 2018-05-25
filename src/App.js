import React, { Component } from 'react';
import animals from "./friends.json";
import './App.css';
import Wrapper from './components/wrapper';
import Cards from "./components/Cards"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    animals
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Clicky</h1>
        </header>
        <h1 className="App-intro">
          Click on a image and remember what you have clicked!
        </h1>
             <Wrapper>
        {this.state.animals.map(animal => (
          <Cards
            name={animal.name}
            image={animal.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
