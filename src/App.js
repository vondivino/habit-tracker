import React, { Component } from 'react';

// Bootstrap
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Styling
import './App.css';

// Component
import Header from './components/Header';
import ActivityList from './components/ActivityList';

class App extends Component {

  render() {
    return (
      <Container>
        <Header />
        <ActivityList />
      </Container>
    )
  }
}

export default App;
