import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginPage from "../Pages/LoginPage";
import StoryPage from "../Pages/StoryPage";
import GamePlayPage from "../Pages/GamePlayPage";
import QuestionPage from "../Pages/QuestionPage";
import correctQuestionPage from "../Pages/CorrectQusetionPage";
import incorrectQuestionPage from "../Pages/InCorrectQuestionPage";

export default class PagesRouter extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="loginPage" component={LoginPage} title="Login" hideNavBar={true}  />
          <Scene key="storyPage" component={StoryPage} title="Story" hideNavBar={true}/>
          <Scene key="gamePlayPage" component={GamePlayPage} title="MainGame" hideNavBar={true} initial={true}/>
          <Scene key="questionPage" component={QuestionPage} title="QuestionGame" hideNavBar={true} />
          <Scene key="correctQuestionPage" component={CorrectQuestionPage} title="CorrectQuestionGame" hideNavBar={true} />
          <Scene key="incorrectQuestionPage" component={InCorrectQuestionPage} title="InCorrectQuestionGame" hideNavBar={true} />
        </Scene>
      </Router>
    )
  }
}
