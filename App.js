import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
export default class App extends Component {
  render() {
    return (
      <Router hideNavBar= "true">
        <Scene key="root">
        </Scene>
      </Router>
    )
  }
}