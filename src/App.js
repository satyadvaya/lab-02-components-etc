import React, { Component } from 'react';
import creatureData from './data.js';
import Creature from './ImageItem.js';
import './App.css';

class App extends Component {
  state = { selected: null };

  handleChange = (e) => {
    this.setState({ selected: e.target.value });
  };
  
  render() {
    return (
      <div>
        <header>
          <img src="logo192.png" alt="React Logo" />
          <h1>Horned Creatures</h1>
        </header>

        <main>
          <section className="options">
            {/* lets move this to another component */}
            <select className="creature-keyword-filter" onChange={this.handleChange}>
              <option value="" defaultValue>
                All Keywords
              </option>
              <option value="uniwhal">UniWhal</option>
              <option value="rhino">Rhino</option>
              <option value="unicorn">Unicorn</option>
              <option value="unilego">UniLego</option>
              <option value="narwhal">Narwhal</option>
              <option value="triceratops">Triceratops</option>
              <option value="markhor">Markhor</option>
              <option value="mouflon">Mouflon</option>
              <option value="addax">Addax</option>
              <option value="chameleon">Chameleon</option>
              <option value="lizard">Lizard</option>
              <option value="dragon">Dragon</option>
            </select>
          </section>


          <section className="list-section">
            <ul className="creatures">
              {
                creatureData
                  .filter(creature => {
                    // if there is nothing selected, show ALL CREATURES
                    if (!this.state.selected) return true;
            
                    // otherwise only show the creature if the creature type is the same as the selected creature type
                    return creature.keyword === this.state.selected;
                  })
                  .map(animal => {
                  console.log(animal)
                  return <Creature bovid={animal} />
                  })        
              }
            </ul>
          </section>
        </main>
      </div>
    );
  }
}
export default App;