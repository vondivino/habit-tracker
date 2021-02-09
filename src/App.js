import React, { Component } from 'react';

import { Container, ListGroup } from 'react-bootstrap';

import Header from './components/Header';
import Activity from './components/Activity';
import Footer from './components/Footer';

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
        <Header />
        <ListGroup variant="flush">
        {this.state.activities.map(item => {
          return (
            <Activity name={ item.name } />
          )
        })}
        <Footer activities={ this.state.activities } />
        </ListGroup>
      </Container>
    )
  }
}

export default App;
