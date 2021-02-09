import React, { Component } from 'react';

import Header from './components/Header';
import {
  Container
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {

  state = {
    activities: [
      {
        name: 'Do coding'
      },
      {
        name: 'Finish assigment'
      }
    ]
  }

  render() {
    return (
      <Container>
        <Header 
          activities={ this.state.activities }
        />
      </Container>
    )
  }
}

export default App;
