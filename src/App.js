import React, { Component } from 'react';

import { Container, ListGroup } from 'react-bootstrap';

import Header from './components/Header';
import Activity from './components/Activity';

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
        <ListGroup variant="flush">
        {this.state.activities.map(item => {
          return (
            <Activity 
              name={ item.name }
            />
          )
        })}
        <ListGroup.Item>
          
        </ListGroup.Item>
        </ListGroup>
      </Container>
    )
  }
}

export default App;
