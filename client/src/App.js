import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //initialise state
  state = { respondents: [] }

  //fetch respondent data after first mount
  componentDidMount(){
    this.getRespondents();
  }

  getRespondents = ()  =>{
    //get the respondents and store them in state
    fetch('/api/respondents')
    .then(res => res.json())
    .then(respondents => this.setState({ respondents }));
  }

  render() {
    const { respondents } = this.state;

    return (
      <div className="App">
        <h1>{respondents.length} respondents</h1>
        <ul className="respondents">
          {respondents.map((respondent, index) =>
          <li key={index}>
            {respondent.first_name} {respondent.last_name} - {respondent.gender}
          </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
