import React from 'react';
import './App.css';
import Person from "./Person"

class App extends React.Component {
  state = {
    people: [],

  }
  componentDidMount() {
    fetch("https://swapi.co/api/people/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          people: data.results
        })

      })

  }

  render() {

    const people = this.state.people.map(person => (
      <Person key={person.name} person={person}></Person>
    ))


    return (
      <div className="app">
        <h1>Employees list</h1>
        <div className="blue"></div>
        {people}
      </div>
    );
  }
}

export default App;
