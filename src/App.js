import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField : ''
  }
}

  async componentDidMount(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    this.setState({ monsters: data })
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render(){
    const { monsters, searchField } = this.state;
    const searchMonsters = monsters.filter( monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })


    return(
      <div className='App'>
          <h1>Monsters Rolodex</h1>
          <SearchBox 
            placeholder="Search Monster" 
            handleChange={this.handleChange}
          />

          <CardList 
            monsters={searchMonsters}
          />


      </div>
    )
  }

}

export default App;
