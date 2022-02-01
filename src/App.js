import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component.jsx'

// react uses functions to return HTML
// App() is an example of a component
// A component is a self contained peice of code that returns some sort of UI

class App extends Component {
  constructor()
  {
    super();

    this.state = {
      characters: [],
      searchField:''
    };
  }    
  
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())  // promise is only executed if successful and recieved
    .then(users => this.setState({ characters: users })); // only executed if previous promise was successful
  }

  handleChange = (e) => // arrow functions automatically fix the 'this.' scope error
  {                     // 'this.' is automatically bound to the place where the arrow function was defined (like a reg function)
    this.setState({ searchField: e.target.value });
  }

  render() 
      {
        const { characters, searchField } = this.state; // destructuring to set properties as constants for ez access
        const filteredCharacters = characters.filter(character =>
          character.name.toLowerCase().includes(searchField.toLowerCase())  // for each character in the characters array convert name
          ) // to lowercase and then filter to names that include searchField value as lowercase as well for uniformity

        return (
          <div className="App">
          <h1>Character Rolodex</h1>
          <SearchBox 
            placeholder= 'search monsters'
            handleChange= {this.handleChange}
          />

          <CardList characters = {filteredCharacters} />
          </div>
        );
      }
}

export default App;
