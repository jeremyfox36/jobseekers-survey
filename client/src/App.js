import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
  //initialise state
  

  //fetch respondent data after first mount
  render() {
    return (
      <div className="container">
      <h1 className="text-center">Jobseekers Survey 2018</h1>
      <Form />
      </div>
    );
  }
}

export default App;
