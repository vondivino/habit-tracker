import React, { Component } from 'react';

import Header from './components/Header';
import {
  Container
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <Container>
        <Header />
      </Container>
    )
  }
}

export default App;
