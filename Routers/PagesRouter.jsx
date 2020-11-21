import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginPage from "../Pages/LoginPage";
import StoryPage from "../Pages/StoryPage";
import GamePlayPage from "../Pages/GamePlayPage";
import Test3D from "../Pages/Test3D";

export default class PagesRouter extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="test3D" component={Test3D} title="test3D" hideNavBar={true} initial={true} />
          <Scene key="loginPage" component={LoginPage} title="Login" hideNavBar={true} />
          <Scene key="storyPage" component={StoryPage} title="Story" hideNavBar={true}/>
          <Scene key="gamePlayPage" component={GamePlayPage} title="MainGame" hideNavBar={true}/>
        </Scene>
      </Router>
    )
  }
}
